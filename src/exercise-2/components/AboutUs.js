import React, { Component } from "react";
import Home from "./Home";
import { Link, Route } from "react-router-dom";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div>Company: ThoughtWorks Local</div>
        <div>Location: CDC</div>
        <div>For more info, please</div>
        <div>
          view our
          <Link to="/"> website.</Link>
        </div>

        <Route exact path="/" component={Home} />
      </div>
    );
  }
}
export default AboutUs;
