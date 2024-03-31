import React from "react";
import './Nav.scss';
import { NavLink, Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        {/* <NavLink activeClassname="selected" to="/">Home</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/about">About</NavLink> */}
        <a className="active" href="/">
          Home
        </a>
        <a href="/todos">Todos</a>
        <a href="/about">About</a>
        <a href="/user">Users</a>
      </div>
    );
  }
}
export default Nav;
