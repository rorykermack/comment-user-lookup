/* Libs */
import { Map } from 'immutable';
import { bindActionCreators } from 'redux';
/* --- Libs */

/* App Actions */
import * as app from './app/app.actions';
/* --- App Actions */

/* Module Actions */
import userLookup from '../modules/user-lookup/ars/user-lookup.actions';
/* --- Module Actions */

const actions = [
  app,
  userLookup
];

export default function mapDispatchToProps (dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter((value) => { return typeof value === 'function' })
    .toObject();
  
    return {
      actions: bindActionCreators(creators, dispatch),
      dispatch
    }
};
