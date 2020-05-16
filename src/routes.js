import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Vouchers from './pages/Vouchers';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/BUZZ" exact component={Home} />
                <Route path="/BUZZ/vouchers" component={Vouchers} />
                <Route path="/BUZZ/login" component={Login} />
                <Route path="/BUZZ/register" component={Register} />
                <Route path="/BUZZ/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}
