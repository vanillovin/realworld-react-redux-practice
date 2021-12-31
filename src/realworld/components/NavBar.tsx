import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../path';

function NavBar() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={LOGIN}>
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
