import { useState, useEffect } from 'react'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useHistory
} from "react-router-dom";

export default function App(){
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
          {/* HomePageHook /> */}
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}


class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentWillMount() {
    console.log("componentWillMount")
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  componentWillUpdate() {
    console.log("componentWillUpdate")
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter % 2 == 0
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps")
  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }


}