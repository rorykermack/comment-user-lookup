/* Libs */
import { combineReducers, routerReducer as routing } from 'redux-seamless-immutable';
/* --- Libs */

/* App Reducer */
import app from './app/app.reducer';
/* App Reducer */

/* Module Reducers */
import  userLookup from '../modules/user-lookup/ars/user-lookup.reducer';
/* --- Module Reducers */

const rootReducer = combineReducers({
  app,
  userLookup,
  routing
});

export default rootReducer;
