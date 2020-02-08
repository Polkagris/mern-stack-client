import React from 'react';
import {
    Switch,
} from "react-router-dom";
import AppliedRoutes from './components/AppliedRoutes';
import CreateExercise from './container/CreateExercise';
import NotFound from './container/NotFound';
import Home from './container/Home';
import Login from './Login';
import Register from './Register';
import Create from './container/Create';

function Routes({ appProps }) {
    return (
        <Switch>
            <AppliedRoutes path="/" exact component={Home} appProps={appProps} />
            <AppliedRoutes path="/login" exact component={Login} appProps={appProps} />
            <AppliedRoutes path="/register" exact component={Register} appProps={appProps} />
            <AppliedRoutes path="/create" exact component={Create} appProps={appProps} />
            <AppliedRoutes path="/create" exact component={CreateExercise} appProps={appProps} />
            <AppliedRoutes component={NotFound} appProps={appProps} />
        </Switch>
    )
}

export default Routes
