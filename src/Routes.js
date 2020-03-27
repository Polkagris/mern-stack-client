import React from "react";
import { Switch, Route } from "react-router-dom";
import AppliedRoutes from "./components/AppliedRoutes";
import NotFound from "./components/NotFound";
import MyExercises from "./container/MyExercises";
import Login from "./container/Login";
import Register from "./container/Register";
import Create from "./container/Create";
import Home from "./container/Home";

function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoutes path="/" exact component={Home} />
      <AppliedRoutes
        path="/my-exercises"
        exact
        component={MyExercises}
        appProps={appProps}
      />
      <Route
        exact
        path="/login"
        render={props => <Login {...props} appProps={appProps} />}
      />
      <AppliedRoutes
        path="/register"
        exact
        component={Register}
        appProps={appProps}
      />
      <AppliedRoutes
        path="/create"
        exact
        component={Create}
        appProps={appProps}
      />
      <AppliedRoutes component={NotFound} appProps={appProps} />
    </Switch>
  );
}

export default Routes;
