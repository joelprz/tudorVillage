import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tutorActions from '../../actions/tutorActions';
import TutorsList from './TutorsList';
import {browserHistory} from 'react-router';

class TutorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddTutorPage = this.redirectToAddTutorPage.bind(this);
  }

  redirectToAddTutorPage() {
    browserHistory.push('/tutor');
  }

  render() {
    const {tutors} = this.props;
    return (
      <div>
        <div className="row tutors-title">
          <div className="col-xs-12 col-lg-12">
            <h1 className="pull-left">Tutors</h1>
            <input className="pull-right" type="submit"
              value="Add Tutor"
              className="btn btn-primary"
              onClick={this.redirectToAddTutorPage}/>
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