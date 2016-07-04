import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as subjectActions from '../../actions/subjectActions';

class SubjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <h1>Subject Page</h1>
    );
  }
}

SubjectPage.propTypes = {
  // myProp: PropTypes.string.isRequired;
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(subjectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectPage);