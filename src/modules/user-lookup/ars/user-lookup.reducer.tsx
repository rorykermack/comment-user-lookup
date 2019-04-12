/* Initial State */
import InitialState from './user-lookup.initial-state';
/* --- Initial State */

/* Actions */
import * as actions from './user-lookup.actions';
/* Actions */

export default (state = InitialState, action: { type?: any, payload?: any }) : object => {
 switch(action.type) {
   case actions.USER_LOOKUP_SET_RESULTS: {
     return state.set('searchResults', action.payload);
   }
   case actions.USER_LOOKUP_SET_WATCHING: {
     return state.set('watching', action.payload);
   }
   case actions.USER_LOOKUP_SET_TEMP_START_POSITION: {
     return state.set('tempStartPosition', action.payload);
   }
   case actions.USER_LOOKUP_SET_SEARCH_STRING: {
    return state.set('searchString', action.payload);
   }
   case actions.USER_LOOKUP_RESET_SEARCH: {
    return state.set('searchString', '').set('searchResults', []).set('watching', false).set('tempStartPosition', 0);
   }
   case actions.COMMENTS_SET_TEMP_COMMENT: {
     return state.set('tempComment', action.payload);
   }
   default: {
     return state;
   }
 }
}