import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";
import logo from './bloc_jams_logo.png';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'; 



class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Bloc Jams</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Landing</Link>
                </li>
                <li className="nav-item">
                  <Link to="/library" className="nav-link">Library</Link>
                </li>
              </ul>
            </div>
          </nav>
       
        <main className="row">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
