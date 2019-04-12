/* Libs */
import { supportsHistory } from 'history/lib/DOMUtils';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
/* --- Libs */

/* Redux Config */
import configureStore from './ars/configure-store';
import createRoutes from './router/create-routes';

const store = configureStore();
const routes = createRoutes(store.getState);
/* --- Redux Config */

/* Enhanced History that syncs with store */
const historyStrategy = supportsHistory() ? browserHistory : hashHistory;
const history = syncHistoryWithStore(historyStrategy, store);
const appContainer = document.getElementById('appRoot');
const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
if (isIE11) document.body.className = 'ie11';
/* --- Enhanced History that syncs with store */

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  appContainer
);