import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Vouchers from './pages/Vouchers';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Confirmation from './pages/Confirmation';
import Credentials from './pages/Credentials';
import Favorites from './pages/Favorites';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/BUZZ" exact component={Home} />
                <Route path="/BUZZ/vouchers" component={Vouchers} />
                <Route path="/BUZZ/login" component={Login} />
                <Route path="/BUZZ/register/confirmation" component={Confirmation} />
                <Route path="/BUZZ/register" exact component={Register} />
                <Route path="/BUZZ/profile" exact component={Profile} />
                <Route path="/BUZZ/profile/favorites" component={Favorites} />
                <Route path="/BUZZ/profile/credentials" component={Credentials} />
            </Switch>
        </BrowserRouter>
    );
}
