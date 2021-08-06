import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import CuttingOilAdditive from "./pages/cutting-oil-additive";

// Lazy imports here
const Home = lazy(() => import("./pages/home"));

// Array of routes
const routes = [
  <Switch>
    ,
    <Route path="/" exact component={Home} key="home" />,
    <Route path="/cutting-oil-additive" exact component={CuttingOilAdditive} key="cutting-oil-additive" />,
  </Switch>,
];

export default routes;
