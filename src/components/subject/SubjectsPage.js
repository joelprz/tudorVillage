import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as subjectActions from '../../actions/subjectActions';
import SubjectList from './SubjectList';

class SubjectsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  subjectRow(subject, index) {
    return <div key={index}>{subject.title}</div>;
  }

  render() {
    const {subjects} = this.props;
    return (
      <div>
        <h1>Subjects</h1>
        <SubjectList subjects={subjects} />
      </div>
    );
  }
}

SubjectsPage.propTypes = {
  subjects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    subjects: state.subjects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(subjectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsPage);




