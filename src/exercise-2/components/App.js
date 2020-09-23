import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { Link, Switch, BrowserRouter, Route } from "react-router-dom";
import PageHeader from "./PageHeader.js";
// import Profile from "./Profile";
// import Home from "./Home";
// import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <PageHeader />
        </div>
      </Router>
    );
  }
}
export default App;
