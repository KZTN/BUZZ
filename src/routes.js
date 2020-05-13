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
                <Route path="/buzz" exact  component={Home} />
                <Route path="/buzz/dashboard"  component={Dashboard} />
                <Route path="/buzz/login"  component={Login} />
                <Route path="/buzz/register"  component={Register} />
            </Switch>
        </BrowserRouter>
    );
}
