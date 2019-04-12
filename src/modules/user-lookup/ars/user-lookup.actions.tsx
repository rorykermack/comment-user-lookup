/* Libs */
/* --- Libs */

/* Helpers */
import lookupUser from '../helpers/lookup-user/lookup-user';
/* --- Helpers */

/* CONSTS */
export const USER_LOOKUP_SEARCH = 'USER_LOOKUP_SEARCH';
export const USER_LOOKUP_SET_LOADING = 'USER_LOOKUP_SET_LOADING';
export const USER_LOOKUP_SET_RESULTS = 'USER_LOOKUP_SET_RESULTS';
export const USER_LOOKUP_SET_WATCHING = 'USER_LOOKUP_SET_WATCHING';
export const USER_LOOKUP_SET_TEMP_START_POSITION = 'USER_LOOKUP_SET_TEMP_START_POSITION';
export const USER_LOOKUP_SET_SEARCH_STRING = 'USER_LOOKUP_SET_SEARCH_STRING';
export const USER_LOOKUP_RESET_SEARCH = 'USER_LOOKUP_RESET_SEARCH';
export const COMMENTS_SET_TEMP_COMMENT = 'COMMENTS_SET_TEMP_COMMENT';
/* CONSTS */

/* Setters */
export const userLookupSetLoading = (payload: boolean) => {
  return {
    payload,
    type: USER_LOOKUP_SET_LOADING
  }
};

export const userLookupSetResults = (payload?: any[]) => {
  return {
    payload,
    type: USER_LOOKUP_SET_RESULTS
  }
};

export const userLookupSetWatching = (payload: boolean) => {
  return {
    payload,
    type: USER_LOOKUP_SET_WATCHING
  }
};

export const userLookupSetTempStartPosition = (payload: number) => {
  return {
    payload,
    type: USER_LOOKUP_SET_TEMP_START_POSITION
  }
};

export const userLookupSetSearchString = (payload: string) => {
  return {
    payload,
    type: USER_LOOKUP_SET_SEARCH_STRING
  }
};

// @note: would be part of a 'comments' module IRL
export const commentsSetTempCommentValue = (payload: string) => {
  return {
    payload,
    type: COMMENTS_SET_TEMP_COMMENT
  }
};

export const userLookupResetSearch = () => {
  return {
    type: USER_LOOKUP_RESET_SEARCH
  }
};
/* --- Setters */

/* Actions */
interface userLookupSearchProps {searchTerm: string};
export const userLookupSearch = (props : userLookupSearchProps) => (dispatch, getState) => {
  const { userLookup: {userList} } = getState();
  dispatch(userLookupSetLoading(true));
  dispatch(userLookupSetSearchString(props.searchTerm));
  const results = lookupUser(props.searchTerm.replace('@', ''), userList);
  dispatch(userLookupSetResults(results || []));
  dispatch(userLookupSetLoading(false));
}
/* --- Actions */