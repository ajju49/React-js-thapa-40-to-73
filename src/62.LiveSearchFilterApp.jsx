// @@@@@@@@@@@@@@@ #62.Live Search Filter using Hooks & Router  @@@@@@
import React from "react";
import { NavLink } from "react-router-dom";

const LiveSearchFilterApp = () => {
  return (
    <div className="menu_style">
      <NavLink exact activeClassName="active_class" to="/">
        AboutUs
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/service">
        Services
      </NavLink>
      <NavLink
        exact
        activeClassName="active_class"
        style={{ textDecoration: "none" }}
        to="/search"
      >
        Search
      </NavLink>
      <NavLink activeClassName="active_class" to="/historyuser/shubham/pandkar">
        HistoryUser
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">
        Contact US
      </NavLink>
    </div>
  );
};

export default LiveSearchFilterApp;

//Note: Service.jsx & Sresult.jsx is from 56.Router folder
