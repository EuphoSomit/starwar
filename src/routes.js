import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// const Login = lazy(() => import('./containers/login'));
const HeaderContainer = lazy(() => import('./containers/header'));
const MemberSearchContainer = lazy(() => import('./containers/memberSearch'));
const ReferralManagementContainer = lazy(() =>
  import('./containers/referralManagement')
);

const routes = (
  <Suspense fallback={<div />}>
    <div className="member-page">
      <HeaderContainer />
      <Switch>
        <Route exact path="/member-search" component={MemberSearchContainer} />
        <Route
          exact
          path="/referral-management"
          component={ReferralManagementContainer}
        />
        <Redirect from="/" to="/member-search" />
      </Switch>
    </div>
  </Suspense>
);

export default routes;
