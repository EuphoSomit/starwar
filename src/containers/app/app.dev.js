import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../assets/theme';
import { Router } from '../../services';
import DevTools from './devTools';

const App = ({ store, routes }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router children={routes} />
    </ThemeProvider>
    <DevTools />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
