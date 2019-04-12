/* Libs */
import { supportsHistory } from 'history/lib/DOMUtils';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory, hashHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxAsyncQueue from 'redux-async-queue';
import SeamlessImmutable from 'seamless-immutable';
import rootReducer from './app-reducer';
/* --- Libs */

const historyStrategy = supportsHistory() ? browserHistory : hashHistory;
const routerMW = routerMiddleware(historyStrategy);

export default function configureStore() {
  if (module.hot) {
    console.log('=== DEV ENVIRONMENT ===');
    return createStore(SeamlessImmutable(rootReducer), composeWithDevTools(
      applyMiddleware(thunk, routerMW, ReduxAsyncQueue)
    ));
  }
  return createStore(rootReducer, SeamlessImmutable({}), applyMiddleware(thunk, routerMW, ReduxAsyncQueue));
};