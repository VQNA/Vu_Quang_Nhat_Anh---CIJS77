import "./App.css";
import React from "react";
import users_list from "./user_data.js";
function App() {
  return (
    <div className="App">
      <RegisterPage />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
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
    } else if (nameInput == "username" && users_list.some(function(el){ return el.username == value})) {
      errorMessage["fullnameM"] =
        "Ten tai khoan da duoc nguoi khac su dung";
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

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { errorMessage, fullname, password, username } = this.state;
    if (Object.values(errorMessage).filter((value) => value != "").length > 0) {
      return;
    }
    fetch("https://635d3172cb6cf98e56af26be.mockapi.io/api/v1/users/users", {
      method: "POST",
      body: JSON.stringify({
        user: {
          name: fullname,
          username: username,
          password: password,
        },
      }),
    });
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <div class ="container">
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
              <div class = "errorMsg">{errorMessage.fullnameM}</div>
            ) : (
              <></>
            )}
            {errorMessage.usernameM != "" ? (
              <div class = "errorMsg">{errorMessage.usernameM}</div>
            ) : (
              <></>
            )}
            {errorMessage.passwordM != "" ? (
              <div class = "errorMsg">{errorMessage.passwordM}</div>
            ) : (
              <></>
            )}
            {errorMessage.passwordConfirmM != "" ? (
              <div class = "errorMsg">{errorMessage.passwordConfirmM}</div>
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
