import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../../core/api/users.api';

export function Header() {

  const [isLoggedOut, setLogoutFlag] = useState(false);

  const onLogout = (event) => {
    logout();
    setLogoutFlag(true);
  }


    return (
      <>
        { isLoggedOut && <Redirect to="/login" /> }
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/users" className="nav-link">Users</Link>
      </li>
      <li className="nav-item">
        <Link to="/users/create" className="nav-link">Create user</Link>
      </li>
      <li className="nav-item">
        <Link to="/notes" className="nav-link">All notes</Link>
      </li>
      <li className="nav-item">
        <Link to="/notes/create" className="nav-link">Create note</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <span className="logout-btn" onClick={onLogout} >Logout</span>
  </div>
</nav>

</>
    );
}