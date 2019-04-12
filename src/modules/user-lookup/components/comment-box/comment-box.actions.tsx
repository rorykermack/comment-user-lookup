/* Imported Actions */
import {userLookupSearch, userLookupSetWatching, userLookupSetTempStartPosition, userLookupResetSearch, commentsSetTempCommentValue} from '../../../user-lookup/ars/user-lookup.actions';
/* --- Imported Actions */

const mapDispatchToProps = dispatch => {
  return {
    userLookupSearch: value => dispatch(userLookupSearch(value)),
    userLookupSetWatching: value => dispatch(userLookupSetWatching(value)),
    userLookupSetTempStartPosition: value => dispatch(userLookupSetTempStartPosition(value)),
    commentSetTempComment: value => dispatch(commentsSetTempCommentValue(value)),
    userLookupResetSearch: () => dispatch(userLookupResetSearch())
  };
};

export default mapDispatchToProps;