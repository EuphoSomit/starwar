import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from '../../services';

const App = ({ store, routes }) => (
  <Provider store={store}>
    <Router children={routes} />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
