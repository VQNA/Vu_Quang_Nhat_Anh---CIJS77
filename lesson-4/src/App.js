import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
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
    <Counter/>
    </div>
  );
}

export default App;


class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      student:{
        name: "123",
        age: 10
      }

    }
    // this.clickCounter = this.clickCounter.bind(this)
  }

  // clickCounter(){
  //   this.setState({
  //     ...this.state, 
  //     counter:this.state.counter + 1
  //   })
  // }


  // componentWillMount(){
  //   console.log("a")
  // }
  // componentDidMount(){
  //   console.log("b")
  // }



  render(){
    // console.log("c")
    return <div>
      <div>Counter: {this.state.counter}</div>
    <button onClick = {() =>{
      this.setState({
        ...this.state, 
      counter:this.state.counter + 1
      })
    }}>Click</button>

    <div>Counter: {this.state.student.age}</div>
    <button onClick = {() =>{
      this.setState({
        ...this.state, 
      student:{
        ...this.state.student,
        age:this.state.student.age + 1,
      }
      })
    }}>Click</button></div>
  }
}