import React, { Suspense, lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import requireAuth from './containers/login/requireAuth';
const Login = lazy(() => import('./containers/login'));
const Search = lazy(() => import('./containers/search'));
const AuthButtonContainer = lazy(() => import('./containers/login/authButton'));

const routes = (
  <Suspense fallback={<div />}>
    <div>
      <AuthButtonContainer />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/search" component={requireAuth(Search)} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  </Suspense>
);

export default routes;
