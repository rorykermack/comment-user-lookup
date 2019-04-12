/* Libs */
import * as React from 'react';
import {connect} from 'react-redux';
/* --- Libs */

/* Props & Actions */
import mapDispatchToProps from './home.actions';
import mapStateToProps from './home.props';
import CommentBox from '../../modules/user-lookup/components/comment-box/comment-box';
/* --- Props & Actions */

class Home extends React.Component<any, any> {
  render() {
    return (
      <div className="page home-page">
        <CommentBox />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);