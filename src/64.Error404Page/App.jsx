//@@@@@@@@@@@@@@  #64. Error404PageNotFound in React Router @@@@@@@@@@@
//@@@  #65. Redirect in React Router | 404 Error Page Redirect to Homepage or Custom Page in React  @@@@
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavbarApp from "./64.NavbarApp";
import Error404 from "./Error404";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
// import "./404.css";

const App = () => {
  return (
    <>
      <NavbarApp />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route component={Error404} /> */}
        <Redirect to="./" />
      </Switch>
    </>
  );
};
export default App;

//note : so see the result comment and un comment the Error404 &  <Redirect to="./" />
