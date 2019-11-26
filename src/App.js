import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style/main.less";

import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./Home";
import Experience from "./Experience";
import Resume from "./Resume";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light " style={{"backgroundColor": "#005696"}}>
          {/* <div className="navbar-brand">
               
              </div> */}
          <a className="navbar-brand" style={{color:"white"}} href="/">
            {" "}
            Shubham Saxena
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active" style={{ listStyleType: "none" }}>
                <Link className="abc" to="/">Home</Link>
              </li>
              <li className="nav-item " style={{ listStyleType: "none" }}>
                <Link className="abc" to="/experience">Experience</Link>
              </li>
              <li className="nav-item " style={{ listStyleType: "none" }}>
                <Link className="abc" to="/resume">Resume</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Home />
            </div>
          )}
        />
        <Route
          path="/experience"
          render={() => (
            <div id="experience">
              <Experience />
            </div>
          )}
        />
        <Route
          path="/resume"
          render={() => (
            <div>
              <Resume />
            </div>
          )}
        />
      </BrowserRouter>
    );
  }
}
