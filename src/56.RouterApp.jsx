// @@@@@@@@@@@@@@@ #56. #57. #58. #60. #61 @@@@@@@@@@@@@@@@@@//
import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./56.Router/About";
import Contact from "./56.Router/Contact";
import Error from "./56.Router/Error";
import Service from "./56.Router/Service";
import RouterMenu from "./57.RouterMenu";
import RouterRenderMethod from "./58.RouterRenderMethods";
//--------------------------------------------------
import UseParamsHook from "./59.UseParamsHook";
import User from "./56.Router/User";
//------------------------------------------
import UseLocationHook from "./60.UseLocation";
import LocationUser from "./56.Router/LocationUser";
//--------------------------------------------------
import UseHistoryApp from "./61.UseHistoryApp";
import HistoryUser from "./56.Router/HistoryUser";
//------------------------------------------------
import LiveSearchFilterApp from "./62.LiveSearchFilterApp";
import Search from "./56.Router/Search";
import Sresult from "./56.Router/Sresult";
//------------------------------------------------
import "./index.css";

const RouterApp = () => {
  const Name = () => {
    return <h1>Hello I am Name page</h1>;
  };
  //-------------------------------------------
  return (
    <>
      {/* <RouterMenu />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route component={Error} />
      </Switch> */}

      {/* //------------------------------------------------------- */}

      {/* <RouterRenderMethod />
      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/service"
          render={() => <Service name="Service" />} //render method
        />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route component={Error} />
      </Switch> */}

      {/* //-------------------------------------------------------  */}

      {/* #59. useParams Hooks in React Router */}
      {/* <UseParamsHook />
      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/service"
          render={() => <Service name="Service" />} //render method
        />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route path="/user/:fname/:lname" component={User} />
        <Route component={Error} />
      </Switch> */}

      {/* //-------------------------------------------------------  */}

      {/* #60. useLocationHook in React Router */}
      {/* <UseLocationHook />
      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/service"
          render={() => <Service name="Service" />} //render method
        />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route path="/locationuser/:fanme/:lname" component={LocationUser} />
        <Route component={Error} />
      </Switch> */}

      {/* //-------------------------------------------------------  */}

      {/* #61. UseHistoryApp in React Router */}
      <UseHistoryApp />
      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/service"
          render={() => <Service name="Service" />} //render method
        />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route path="/historyuser/:fname/:lname" component={HistoryUser} />
        <Route component={Error} />
      </Switch>
      {/* //-------------------------------------------------------  */}

      {/* #62. LiveSearchFilterApp in React Router */}
      {/* <LiveSearchFilterApp />
      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/service"
          render={() => <Service name="Service" />} //render method
        />
        <Route exact path="/search" component={Search} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route path="/historyuser/:fname/:lname" component={HistoryUser} />
        <Route component={Error} />
      </Switch> */}

      {/* //-------------------------------------------------------  */}
    </>
  );
};

export default RouterApp;
