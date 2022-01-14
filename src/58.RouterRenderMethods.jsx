// @@@@@@@@@@@@@@@@@ #58.React Route Render Method
//  | Difference between Render and Component Prop on React Router @@@@@@@@@@@@@@@@

import React from "react";
import { NavLink } from "react-router-dom";

const RouterRenderMethod = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink
          exact
          activeClassName="active_class"
          to="/"
          style={{ textDecoration: "none" }}
        >
          AboutUs
        </NavLink>
        <NavLink
          exact
          activeClassName="active_class"
          to="/service"
          style={{ textDecoration: "none" }}
        >
          Services
        </NavLink>
        <NavLink
          exact
          activeClassName="active_class"
          to="/contact"
          style={{ textDecoration: "none" }}
        >
          Contact US
        </NavLink>
      </div>
    </>
  );
};

export default RouterRenderMethod;

// Note:  this component is imported in 56.routerApp.jsx
//Note : uncomment the {probs.name} code from About.jsx in 56.Router folder
