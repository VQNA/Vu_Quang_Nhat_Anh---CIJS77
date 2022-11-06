import { useState, useEffect } from 'react'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default funtion App(){
  return {
    <Router>
    <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/topics">
      <Topics />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</Router>
  }
}


class homepage extends React.Component {
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