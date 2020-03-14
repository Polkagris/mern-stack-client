import React, { useEffect, useState } from "react";
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
  const [exercises, setExercises] = useState([]);

  const propsFromMyExercisesCallback = exercisesProps => {
    console.log("props to parent in Home:", exercises);
    setExercises(exercisesProps);
    console.log("exercises in Routes:", exercises);
  };

  useEffect(() => {
    propsFromMyExercisesCallback();
  });

  return (
    <Switch>
      {/* <AppliedRoutes path="/" exact component={Home} isLoggedIn={isLoggedIn} /> */}
      <Route
        exact
        path="/"
        render={props => (
          <Home
            {...props}
            isLoggedIn={isLoggedIn}
            appProps={appProps}
            exercises={exercises}
          />
        )}
      />
      <Route
        exact
        path="/my-exercises"
        render={props => (
          <MyExercises
            {...props}
            appProps={appProps}
            childCallback={propsFromMyExercisesCallback}
          />
        )}
      />
      {/*       <AppliedRoutes
        path="/my-exercises"
        exact
        component={MyExercises}
        appProps={appProps}
        propsFromMyExercisesCallback={propsFromMyExercisesCallback}
      /> */}
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
