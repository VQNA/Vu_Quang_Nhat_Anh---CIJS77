import "./App.css";
import { useState, useEffect } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useHistory,
  Redirect
} from "react-router-dom";
import { useContext } from 'react';
let UserContext = React.createContext();
let PhotoContext = React.createContext();



function App() {
  let userId = localStorage.getItem("userId");
  let photoId = localStorage.getItem("photoId")

  return (
    <UserContext.Provider value={{ userId: JSON.parse(userId) }}>
      <PhotoContext.Provider value={{ photoId: JSON.parse(photoId) }}>
        <Router>
          <Switch>
            <Route exact path="/register"  >
              <RegisterPage />
            </Route>
            <Route exact path="/login" >
              <LoginPage />
            </Route>
            <PrivateRoute exact component={HomePageHook} path="/" />
            <PrivateRoute exact component={AddPhotoPage} path="/add-photos" />
            <PrivateRoute exact component={Photo_description} path="/photo-edit" />
          </Switch>
        </Router>
      </PhotoContext.Provider>
    </UserContext.Provider>
  );
}


export default App;


class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: "",
      description: ""
    }
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter % 2 == 0;
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return <>
      <h1>HomePage</h1>
      <div>
        <div>{this.state.counter}</div>
        <button onClick={() => {
          this.setState({
            counter: this.state.counter + 1
          })
        }}>+1</button>
      </div>
      <div>
        <button onClick={() => {
          this.props.history.push("/login");
        }}>go to login page</button>
      </div>
    </>
  }
}

HomePage = withRouter(HomePage);

function HomePageHook() {
  let [listImage, setListImage] = useState([]);
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);
  let [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    getListPhotos();
  }, [])

  useEffect(() => {
    getListPhotos();
  }, [page])

  function getListPhotos() {
    fetch(`https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users/1/photos?page=${page}&limit=${limit}`).then((response) => response.json()).then((res) => {
      setListImage([...res.items]);
      setMaxPage(res.count / limit);
    }).catch((err) => console.log(err))
  }

  return <>
    <h1>HomePage</h1>
    <div>
      {page > 1 ? <button onClick={() => {
        setPage(page - 1)
      }}>Previous Page</button> : <></>}
      <>{page}</>
      {page < maxPage ? <button onClick={() => {
        setPage(page + 1)
      }}>Next page</button> : <></>}
    </div>
    <div>
      <select onChange={(e) => {
        setLimit(e.target.value);
        setPage(1);
      }} defaultValue={limit} >
        <option value={10} >10</option>
        <option value={20} >20</option>
        <option value={50} >50</option>
        <option value={100}>100</option>
      </select>
    </div>
    <div>
      {
        listImage.map((value, index) => <div key={index}>
          <img src={value.image} alt={value.description} onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            history.push(`/photo-edit`)

            localStorage.setItem("photoId", JSON.stringify(index));
          }} />
        </div>)
      }
    </div>
  </>
}





class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
      image: "",
      description: "",
      password: "",
      passwordConfirm: "",
      errorMessage: {
        fullnameM: "",
        usernameM: "",
        passwordM: "",
        passwordConfirmM: "",
      },
    };
  }

  onCreateUser = (e) => {
    e.preventDefault();
  };

  onChangeInput = (nameInput, value) => {
    var special_character = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var hasNumber = /\d/;
    const errorMessage = {
      ...this.state.errorMessage,
    };
    if (nameInput == "passwordConfirm" && this.state.password != value) {
      errorMessage["passwordConfirmM"] = "Password ko giong nhau";
      // } else if (nameInput == "username" && users_list.some(function(el){ return el.username == value})) {
    } else if (nameInput == "username") {
      this.checkUsernameExist(value)

    } else if (
      (nameInput == "fullname" && special_character.test(value) == true) ||
      (nameInput == "fullname" && hasNumber.test(value) == true)
    ) {
      console.log(value);
      errorMessage["fullnameM"] =
        "Ten khong duoc chua cac dau dac biet hoac chu so";
    } else if (
      (nameInput == "password" && special_character.test(value) == false) ||
      (nameInput == "password" && hasNumber.test(value) == false)
    ) {
      console.log("f");
      errorMessage["passwordM"] =
        "Mat khau phai bao gom it nhat mot ky tu dac biet va mot chu so";
    } else {
      console.log(value.split(""));
      errorMessage["fullnameM"] = "";
      errorMessage["usernameM"] = "";
      errorMessage["passwordM"] = "";
      errorMessage["passwordConfirmM"] = "";
    }
    this.setState({
      ...this.state,
      [nameInput]: value,
      errorMessage: errorMessage,
    });
  };

  checkUsernameExist(valueInput) {
    fetch(`https://635d3172cb6cf98e56af26be.mockapi.io/api/v1/users/users?username=${valueInput}`, {
      method: "GET"
    }).then((response) => response.json()).then((users) => {
      if (users.filter((user) =>
        user.username == valueInput
      ).length > 0) {
        this.setState({
          ...this.state,
          errorMessage: {
            ...this.state.errorMessage,
            usernameM: "Username da ton tai",
          },
        })
      } else {
        this.setState({
          ...this.state,
          errorMessage: {
            ...this.state.errorMessage,
            usernameM: "",
          },
        })
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();

    const { errorMessage, fullname, password, username } = this.state
    if (Object.values(errorMessage).filter((value) => value != "").length > 0) {
      return;
    }
    fetch("https://635d3172cb6cf98e56af26be.mockapi.io/api/v1/users/users", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullname: fullname,
        username: username,
        password: password,
      })
    }).then(() => {
      const { match, location, history } = this.props;
      history.replace("/login");
    }).catch((err) => {

    });
  }


  render() {
    const { errorMessage } = this.state;
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmitForm}>
          <div>
            <label>Fullname</label>
            <input
              type="text"
              name="fullname"
              onChange={(e) => {
                this.onChangeInput("fullname", e.target.value);
              }}
            />
          </div>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={(e) => {
                this.onChangeInput("username", e.target.value);
              }}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                this.onChangeInput("password", e.target.value);
              }}
            />
          </div>
          <div>
            <label>Password confirm</label>
            <input
              type="password"
              name="passwordConfirm"
              onChange={(e) => {
                this.onChangeInput("passwordConfirm", e.target.value);
              }}
            />
            {errorMessage.fullnameM != "" ? (
              <div className="errorMsg">{errorMessage.fullnameM}</div>
            ) : (
              <></>
            )}
            {errorMessage.usernameM != "" ? (
              <div className="errorMsg">{errorMessage.usernameM}</div>
            ) : (
              <></>
            )}
            {errorMessage.passwordM != "" ? (
              <div className="errorMsg">{errorMessage.passwordM}</div>
            ) : (
              <></>
            )}
            {errorMessage.passwordConfirmM != "" ? (
              <div className="errorMsg">{errorMessage.passwordConfirmM}</div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
RegisterPage = withRouter(RegisterPage)

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    }
  }

  onChangeInput = (nameInput, value) => {
    this.setState({
      ...this.state,
      [nameInput]: value,
    })
  }
  checkUsernameExist(valueInput) {
    fetch(`https://635d3172cb6cf98e56af26be.mockapi.io/api/v1/users/users?username=${valueInput}`, {
      method: "GET"
    }).then((response) => response.json()).then((users) => {
      if (users.filter((user) =>
        user.username == valueInput
      ).length > 0) {
        this.setState({
          ...this.state,
          errorMessage: {
            ...this.state.errorMessage,
            usernameM: "Username da ton tai",
          },
        })
      } else {
        this.setState({
          ...this.state,
          errorMessage: {
            ...this.state.errorMessage,
            usernameM: "",
          },
        })
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    fetch(`https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users?username=${this.state.username}`, {
      method: "GET"
    }).then((response) => response.json()).then((users) => {
      let userFound = users.find((user) =>
        user.username === this.state.username
      )
      let message = ''
      if (userFound != null) {
        if (this.state.username == userFound.username && userFound.password === this.state.password) {
          localStorage.setItem("userId", JSON.stringify(userFound.id));
          this.props.history.push("/");
        } else {
          message = "Sai username hoac password"
        }
      } else {
        message = "Sai username hoac password"
      }
      this.setState({
        ...this.state,
        password: "",
        errorMessage: message
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { errorMessage } = this.state
    return <>
      <h1>Login</h1>
      <form onSubmit={this.handleSubmitForm}>
        <div>
          <label>Username</label>
          <input type="text" name="username" onChange={(e) => {
            this.onChangeInput("username", e.target.value);
          }} />
          {errorMessage.usernameM != "" ? <div>{errorMessage.usernameM}</div> : <></>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={(e) => {
            this.onChangeInput("password", e.target.value);
          }} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  }
}

LoginPage = withRouter(LoginPage);


function PrivateRoute({ component: Component, path, ...rest }) {
  let userId = localStorage.getItem("userId");
  return <Route {...rest}
    render={(props) => {
      return userId != null && userId != "" ? <Component {...props} /> : <Redirect to={{
        pathname: "/login"
      }} />
    }}>
  </Route>
}

function AddPhotoPage() {
  let userContext = useContext(UserContext);
  let history = useHistory();
  let [input, setInput] = useState({
    image: "",
    description: "",
  })

  const onChangeInput = (nameInput, value) => {
    setInput({
      ...input,
      [nameInput]: value
    })
    console.log(value)
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    fetch(`https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users/${userContext.userId}/photos/`, {
      method: "POST",
      body: JSON.stringify({
        userId: userContext.userId,
        image: input.image,
        description: input.description
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      if (res.status == 201) {
        setInput({
          image: "",
          description: "",
        })
        history.push("/");
      }
    })
  }

  return <form onSubmit={handleSubmitForm}>
    <div>
      <label>Image</label>
      <input type="text" name="image" onChange={(e) => {
        onChangeInput("image", e.target.value);
      }} />
    </div>
    <div>
      <label>Description</label>
      <textarea type="description" name="description" onChange={(e) => {
        onChangeInput("description", e.target.value);
      }} />
      {input.image != "" ? (
        <img className="img" src={input.image} alt={input.description}></img>
      ) : (
        <></>
      )}

    </div>
    <button>Them photo</button>
  </form>
}

function Photo_description() {
  let userContext = useContext(UserContext);
  let history = useHistory();
  let [listImage, setListImage] = useState([])
  let photoId = localStorage.getItem("photoId")
  console.log(`https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users/${userContext.userId}/photos/${photoId}`)

  useEffect(() => {
    getListPhotos();
  }, [])

  function getListPhotos() {
    fetch(`https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users/${userContext.userId}/photos`, {
      method: "GET"
    }).then((response) => response.json()).then((res) => {
      setListImage([...res.items]);
    }).catch((err) => console.log(err))
  }







  const onChangeInput = (nameInput, value) => {
    setListImage({
      ...listImage,
      [nameInput]: value
    })
    console.log(value)
  };


  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    fetch(`https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users/${userContext.userId}/photos/${photoId}`, {
      method: "POST",
      body: JSON.stringify({
        id: PhotoContext.photoId,
        userId: userContext.userId,
        image: listImage.image,
        description: listImage.description
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      console.log(".")
      if (res.status == 201) {
        setListImage({
          image: "",
          description: "",
        })
        history.push("/");
      }
    })
  };
  return <form onSubmit={handleSubmitForm}>
    <div>
      <label>Image</label>
      <input type="text" name="image" defaultValue={listImage.image} onChange={(e) => {
        onChangeInput("image", e.target.value);
      }}></input>
    </div>
    <div>
      <label>Description</label>
      <h1></h1>
      <textarea type="description" name="description" onChange={(e) => {
        onChangeInput("description", e.target.value);
      }}>{listImage.description}</textarea>
      <img className="img" src={listImage.image} alt={listImage.description} />


    </div>
    <button>Edit photo</button>
  </form>
}