import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

// Lazy imports here
const Home = lazy(() => import("./pages/home"));

// Array of routes
const routes = [
  <Switch>
    <Route path="/" exact component={Home} key="home" />,
  </Switch>,
];

export default routes;
