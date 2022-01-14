// @@@@@@@@@@@@@@@ #64.Error404PageNotFound  @@@@@@
import React from "react";
import { NavLink } from "react-router-dom";
import "./404.css";

const NavbarApp = () => {
  return (
    <>
      <div className="main_menu">
        <NavLink
          exact
          activeClassName="menu_link"
          className="menu-style"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          exact
          activeClassName="menu_link"
          className="menu-style"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          exact
          activeClassName="menu_link"
          className="menu-style"
          to="/contact"
        >
          Contact US
        </NavLink>
      </div>
    </>
  );
};

export default NavbarApp;
