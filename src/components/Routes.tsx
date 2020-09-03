import React from "react";
import { Switch, Route } from "react-router-dom";

import { RoutePath } from "../config/route-config";
import { App } from "./App";
import { Signup } from "./signup/Signup";
import { NotFound } from "./NotFound";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={RoutePath.Home} component={App} />
      <Route path={RoutePath.Signup} component={Signup} />
      <Route component={NotFound} />
    </Switch>
  );
};
