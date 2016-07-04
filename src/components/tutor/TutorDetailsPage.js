import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tutorActions from '../../actions/tutorActions';
import * as subjectActions from '../../actions/subjectActions';

import TutorForm from './TutorForm';

class TutorDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      tutor: Object.assign({}, props.tutor),
      errors: {}
    };

    this.updateTutorState = this.updateTutorState.bind(this);
    this.saveTutor = this.saveTutor.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tutor.id != nextProps.tutor.id) {
      this.setState({tutor: Object.assign({}, nextProps.tutor)});
    }
  }

  updateTutorState(event) {
    const field = event.target.name;
    let tutor = this.state.tutor;
    tutor[field] = event.target.value;
    return this.setState({tutor: tutor});
  }

  saveTutor(event) {
    event.preventDefault();
    this.props.actions.saveTutor(this.state.tutor);
    this.context.router.push('/tutors');
  }

  render() {
    return (
      <TutorForm 
        onChange={this.updateTutorState}
        onSave={this.saveTutor}
        tutor={this.state.tutor}
        errors={this.state.errors} />
    );
  }
}

TutorDetailsPage.propTypes = {
  tutor: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

// Make react router context available throughout component
TutorDetailsPage.contextTypes = {
  router: PropTypes.object
};

function getTutorById(tutors, tutorId) {
  console.log("getTutorById ", tutors);
  console.log("IDEE ", tutorId);
  const tutor = tutors.filter(tutor => tutor.id === tutorId);
  if (tutor.length) {
    console.log("LEN ", tutor[0]);
    return tutor[0];
  }
  return null;
}

// ownProps = reference to our component's props
// access props declared in route
function mapStateToProps(state, ownProps) {
  const tutorId = ownProps.params.id; // from the path /tutor/:id
  
  let tutor = {id: '', name: '', title: '', description: '', distance: '', city: '', state: '', zip: '', rate: '', isOnline: '', subjects: [], ratingCount: '', starRating: '', rank: ''};
    
  if (tutorId && state.tutors.length > 0) {
    tutor = getTutorById(state.tutors, tutorId);
  }

  return {
    tutor: tutor
  };
}

function mapDispatchToProps(dispatch) {
  // make tutorActions available as this.props.actions
  return {
    actions: bindActionCreators(tutorActions, dispatch),
    subjectActions: bindActionCreators(subjectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorDetailsPage);


















