import React from 'react';
import { Route } from "react-router-dom";

function AppliedRoutes({ component: C, appProps, ...rest }) {
    return (
        <Route  {...rest} render={props => <C {...appProps} {...props} />} />
    );
}

export default AppliedRoutes
