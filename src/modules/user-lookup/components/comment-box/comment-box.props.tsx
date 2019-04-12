import {sGetUserSearchResults, sGetUserLookupIsWatching, sGetUserLookupTempStartPosition, sGetTempComment, sGetUserLookupSearchString} from '../../../user-lookup/ars/selectors/index';

const mapStateToProps = (state) => {
  return {
    userSearchResults: sGetUserSearchResults(state),
    userLookupIsWatching: sGetUserLookupIsWatching(state),
    userLookupTempStartPosition: sGetUserLookupTempStartPosition(state),
    userLookupSearchString: sGetUserLookupSearchString(state),
    tempComment: sGetTempComment(state)
  }
};

export default mapStateToProps;