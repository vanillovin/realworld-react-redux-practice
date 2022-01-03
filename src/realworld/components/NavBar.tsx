import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, REGISTER } from '../../path';
import { CurrentUserContext } from '../../CurrentUserContext';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={to}>
        {children}
      </Link>
    </li>
  );
}

function NavBar() {
  const currentUser = useContext(CurrentUserContext);

  const isLogedIn = currentUser === null;

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
          {isLogedIn ? (
            <>
              <NavLink to={LOGIN} children="Sign in" />
              <NavLink to={REGISTER} children="Sign up" />
            </>
          ) : (
            <>
              <NavLink to="/new-post" children="New Post" />
              <NavLink to="/settings" children="Settings" />
              <NavLink to={'/@' + currentUser.username}>
                <img className="user-pic" src={currentUser.image} />
                {currentUser.username}
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
