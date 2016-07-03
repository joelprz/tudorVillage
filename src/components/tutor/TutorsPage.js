import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tutorActions from '../../actions/tutorActions';
import TutorsList from './TutorsList';

class TutorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {tutors} = this.props;
    return (
      <div>
        <h1>Tutors</h1>
        <TutorsList tutors={tutors} />
      </div>
    );
  }
}

TutorsPage.propTypes = {
  tutors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    tutors: state.tutors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tutorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorsPage);