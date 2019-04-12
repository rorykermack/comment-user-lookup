/* Libs */
import * as React from 'react';
import {connect} from 'react-redux';
/* --- Libs */

/* Props & Actions */
import mapDispatchToProps from './comment-box.actions';
import mapStateToProps from './comment-box.props';
/* --- Props & Actions */

/* Child Components */
import UserLookupWidget from '../user-lookup-widget/user-lookup-widget';
/* --- Child Components */

/* Styles */
import './comment-box.scss';
/* --- Styles */

class CommentBox extends React.Component<any, any> {
  ta;
  constructor(props) {
    super(props);
    this.ta = React.createRef();
  }

  handleKeyDown = e => {
    const {
      userLookupSearch,
      userLookupSetWatching,
      userLookupSetTempStartPosition,
      userLookupIsWatching,
      userLookupTempStartPosition,
      commentSetTempComment,
      userLookupResetSearch
    } = this.props;

    if (e.key === '@') {
      userLookupSetWatching(true);
      userLookupSetTempStartPosition(e.target.textContent.length);
    }

    if (e.keyCode == 46 || e.keyCode == 8) {
      const prev = e.target.textContent.slice(-1);
      if (prev === '@') userLookupResetSearch();

    }
    if (e.keyCode === 13) e.preventDefault();

    if (userLookupIsWatching) {
      const val = e.target.textContent.slice(userLookupTempStartPosition, e.target.textContent.length);
      userLookupSearch({
        searchTerm: val
      });
    }

    commentSetTempComment(this.ta.innerHTML);
}

onSelectUserRef = (val) => {
    const {tempComment, commentSetTempComment, userLookupSearchString, userLookupResetSearch} = this.props;
    const newStr = tempComment.replace(userLookupSearchString, '');
    const formattedString = `${newStr}\u200B<a data-user='${val.username}' class='user-ref'>${val.name}</a>\u200B`;
    commentSetTempComment(formattedString);
    this.ta.innerHTML = formattedString;
    userLookupResetSearch();
  };

  render() {
    const {userSearchResults} = this.props;
    
    return (
      <div className="comment-box">
        <div className="comment-input-container">
          <div
            className="comment-input"
            ref={ el => this.ta = el }
            contentEditable
            onKeyDown={this.handleKeyDown}
          />
          <UserLookupWidget 
            userSearchResults={userSearchResults}
            onSelectUserRef={this.onSelectUserRef}
          />
        </div>
        <button
         className="btn main-cta"
        >Submit Comment</button>
    </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBox);