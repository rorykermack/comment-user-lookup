/* Libs */
import * as React from 'react';
import { connect } from 'react-redux';
/* --- Libs */

import './app.scss';

import mapDispatchToProps from '../../ars/map-dispatch-to-props';
import mapStateToProps from '../../ars/map-state-to-props';

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState( { hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          Oh no! An error :(
        </div>
      )
    }
    const pageLoaderActive = false;
    try {
      return (
        <div className={"app-main-container"}>
          <div className="page-container">
            {!pageLoaderActive && this.props.children}
          </div>
        </div>
      )
    } catch (e) {
      console.log('Runtime Error', e);
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
