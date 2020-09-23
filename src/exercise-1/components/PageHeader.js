import React, { Component } from "react";
import { Link, Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../components/Home";
import Profile from "../components/Profile";
import AboutUs from "../components/AboutUs";

class PageHeader extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <div>
            <div className='to_home'>
              <Link to="/">Home</Link>
            </div>
            <div className='to_profile'>
              <Link to="/my-profile">My Profile</Link>
            </div>
            <div className='to_about_us'>
              <Link to="/about-us">About Us</Link>
            </div>
          </div>
          <Switch>
            <Route path="/my-profile" component={Profile} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default PageHeader;
