import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/BUZZ" exact  component={Home} />
                <Route path="/BUZZ/dashboard"  component={Dashboard} />
                <Route path="/BUZZ/login"  component={Login} />
                <Route path="/BUZZ/register"  component={Register} />
            </Switch>
        </BrowserRouter>
    );
}
