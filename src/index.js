import React from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './assets/theme';

import App from './containers/app';
import configureStore from './store';
import routes from './routes';
import rootSaga from './sagas';

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App store={store} routes={routes} />
  </ThemeProvider>,
  document.getElementById('root')
);
