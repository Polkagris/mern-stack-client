import React from 'react';
import {
    Switch,
} from "react-router-dom";
import AppliedRoutes from './components/AppliedRoutes';
import CreateExercise from './container/CreateExercise';
import NotFound from './container/NotFound';
import Home from './container/Home';

function Routes({ appProps }) {
    return (
        <Switch>
            <AppliedRoutes path="/" exact component={Home} appProps={appProps} />
            <AppliedRoutes path="/create" exact component={CreateExercise} appProps={appProps} />
            <AppliedRoutes component={NotFound} appProps={appProps} />
        </Switch>
    )
}

export default Routes
