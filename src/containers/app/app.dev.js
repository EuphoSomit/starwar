import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from '../../services';
import DevTools from './devTools';

const App = ({ store, routes }) => (
  <Provider store={store}>
    <Router children={routes} />
    <DevTools />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
