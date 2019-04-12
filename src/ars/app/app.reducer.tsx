/* Initial State */
import InitialState from './initial-state';
/* --- Initial State */

/* Actions */
import * as actions from './app.actions';
/* Actions */

export default (state = InitialState, action: { type?: any, payload?: any }) : object => {
 switch(action.type) {
   case actions.APP_SET_PROCESS: {
     return state.setIn(['process', action.payload.key], action.payload.value);
   }
   default: {
     return state;
   }
 }
}