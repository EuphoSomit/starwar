import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Login = lazy(() => import('./containers/login'));

const routes = (
  <Suspense fallback={<div />}>
    <div className="member-page">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  </Suspense>
);

export default routes;
