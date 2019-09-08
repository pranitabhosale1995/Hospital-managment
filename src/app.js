import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//---> App
import HomeView from "appRoot/views/home";
import ErrorView from "appRoot/views/error";
import Abc from "./views/Abc"


import "./app.css";

const App = () => {
  return (
    <Router hashType="hashbang" >
      <Switch>
        <Route exact path="/" component={HomeView} />
       
        <Route exact path="/user/:id" component={Abc} />
        <Route type="404" component={ErrorView} />
      </Switch>
    </Router>
  )
  
}

export default App;