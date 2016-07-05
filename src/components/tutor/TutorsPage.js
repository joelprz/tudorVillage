import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tutorActions from '../../actions/tutorActions';
import TutorsList from './TutorsList';
import {browserHistory} from 'react-router';

class TutorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOnline: false,
      radiusSelected: false
    };

    this.redirectToAddTutorPage = this.redirectToAddTutorPage.bind(this);
    this.filterTutors = this.filterTutors.bind(this);
    this.filt = this.filt.bind(this);
    this.toggleRadius = this.toggleRadius.bind(this);
  }

  redirectToAddTutorPage() {
    browserHistory.push('/tutor');
  }

  filt(event) {
    let st = this.state.isOnline;
    this.setState({isOnline: !st});
  }

  toggleRadius(event) {
    let st = this.state.radiusSelected;
    this.setState({radiusSelected: !st});
  }

  filterTutors(tutors) {
    if (this.state.isOnline) {
      tutors = tutors.filter(tutor => tutor.isOnline === true);
    }

    if (this.state.radiusSelected) {
      tutors = tutors.filter(tutor => {
        return tutor.distance <= 5;
      });
    }

    return tutors;
  }

  render() {
    const tutors = this.filterTutors(this.props.tutors);
    return (
      <div>
        <div className="row tutors-title">
          <div className="col-xs-12 col-lg-12">
            <h1 className="pull-left">Tutors</h1>
            <input type="submit"
              value="Add Tutor"
              className="btn btn-primary"
              onClick={this.redirectToAddTutorPage}/>
          </div>
        </div>
        <div className="row filters-row">
          <div className="col-xs-3 col-lg-3">
            <input
              className="online-check"
              type="checkbox"
              name="online-tutor"
              onClick={this.filt}
              value={this.state.isOnline}/>
            <label htmlFor="online-tutor">Available for online tutoring</label>
          </div>
          <div className="col-xs-3 col-lg-3">
            <input
              className="online-check"
              type="checkbox"
              name="radius-selected"
              onClick={this.toggleRadius}
              value={this.state.radiusSelected}/>
            <label htmlFor="radius-selected">Within 5 miles</label>
          </div>
        </div>
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