import React from 'react';
import { render } from 'react-dom';
import App from './containers/app';
import configureStore from './store';
import routes from './routes';
import rootSaga from './sagas';

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);

render(<App store={store} routes={routes} />, document.getElementById('root'));
