import React from "react";
import { Switch, Route } from "react-router-dom";
import AppliedRoutes from "./components/AppliedRoutes";
import CreateExercise from "./container/CreateExercise";
import NotFound from "./container/NotFound";
import MyExercises from "./container/MyExercises";
import Login from "./Login";
import Register from "./Register";
import Create from "./container/Create";
import Home from "./container/Home";

function Routes({ appProps, isLoggedIn, setIsLoggedIn }) {
  return (
    <Switch>
      {/* <AppliedRoutes path="/" exact component={Home} isLoggedIn={isLoggedIn} /> */}
      <Route
        exact
        path="/"
        render={props => (
          <Home {...props} isLoggedIn={isLoggedIn} appProps={appProps} />
        )}
      />
      <AppliedRoutes
        path="/my-exercises"
        exact
        component={MyExercises}
        appProps={appProps}
      />
      <Route
        exact
        path="/login"
        render={props => (
          <Login {...props} setIsLoggedIn={setIsLoggedIn} appProps={appProps} />
        )}
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
      <AppliedRoutes
        path="/create"
        exact
        component={CreateExercise}
        appProps={appProps}
      />
      <AppliedRoutes component={NotFound} appProps={appProps} />
    </Switch>
  );
}

export default Routes;
