import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import MaterialUIApp from "./MaterialUIApp";
import NpmClock from "./NpmClock";
import Bootstrap4App from "./Bootstrap4App";
import WebPageApp from "./49.ReactWebpageApp";
import ContextApiApp from "./ContextApi/51.ContextApiApp";
import UseEffectApp from "./53.useEffectApp";
import HookChallenge from "./54.HookChalenge";
import Covid19App from "./Covid-19App";
import "./Covid-19/StatewiseData/statewise.css";
import RouterApp from "./56.RouterApp";
import App from "./64.Error404Page/App.jsx";
import Bootstrap5App from "./66.Bootstrap5App";

ReactDOM.render(
  <React.StrictMode>
    {/* <MaterialUIApp /> */}
    {/* <NpmClock /> */}
    {/* <Bootstrap4App /> */}
    {/* <WebPageApp /> */}
    {/* <ContextApiApp /> */}
    {/* <UseEffectApp /> */}
    {/* <HookChallenge /> */}
    {/* <Covid19App /> */}
    <BrowserRouter>
      <RouterApp />
      {/* <App /> */}
    </BrowserRouter>
    {/* <Bootstrap5App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
