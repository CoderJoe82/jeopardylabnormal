import React from 'react';
import Jeopardy from "./components/jeopardy/Jeopardy";
import Navigation from "./components/navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return(
    <div className = "App">
      <Navigation/>
      <Switch>
        <Route
          exact
          path = "/"
          render = {(props) => <Welcome {...props} name = "Joseph"/>}
          />
        <Route path = "/welcome/:name" component = {Welcome}/>
        <Route path = "/clock" component = {Clock}/>
        <Route path = "/contact" component = {Contact}/>
        <Route path = "/jeopardy" component = {Jeopardy}/>
        <Route component = {NoMatch}/>
      </Switch>
    </div>
  )
}

export default App;