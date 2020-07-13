import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.components";
import UserList from "./components/user-list.components";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navebar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              Fuel quote App
            </Link>
            <div className=" navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Users
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    CreateUser
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={UserList} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/create" component={CreateUser} />
        </div>
      </Router>
    );
  }
}

export default App;
