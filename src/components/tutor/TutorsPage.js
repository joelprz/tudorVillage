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
      radiusSelected: false,
      sortApplied: 0
    };

    this.redirectToAddTutorPage = this.redirectToAddTutorPage.bind(this);
    this.filterTutors = this.filterTutors.bind(this);
    this.filt = this.filt.bind(this);
    this.toggleRadius = this.toggleRadius.bind(this);
    this.sortTutors = this.sortTutors.bind(this);
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

  sortTutors(event) {
    this.setState({sortApplied: event.target.value});
  }

  filterTutors(tutors) {
    if (this.state.isOnline) {
      tutors = tutors.filter(tutor => {
        // hacky evaluation of boolean saved as string
        return tutor.isOnline === true || tutor.isOnline === "true";
      });
    }

    if (this.state.radiusSelected) {
      tutors = tutors.filter(tutor => {
        return (parseInt(tutor.distance ,10)) <= 5;
      });
    }

    // Ugly and verbose
    if (this.state.sortApplied > 0) {
      switch(this.state.sortApplied) {
        case "1":
          tutors.sort(function (a, b) {
            if (a.rank < b.rank) {
              return 1;
            }
            if (a.rank > b.rank) {
              return -1;
            }
            return 0;
          });
          break;
        case "2":
          tutors.sort(function (a, b) {
            if (a.rank > b.rank) {
              return 1;
            }
            if (a.rank < b.rank) {
              return -1;
            }
            return 0;
          });
          break;
        case "3":
          tutors.sort(function (a, b) {
            if (a.rate < b.rate) {
              return 1;
            }
            if (a.rate > b.rate) {
              return -1;
            }
            return 0;
          });
          break;
        case "4":
          tutors.sort(function (a, b) {
            if (a.rate > b.rate) {
              return 1;
            }
            if (a.rate < b.rate) {
              return -1;
            }
            return 0;
          });
          break;
        default:
          break;
      }
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
          <div className="col-xs-3 col-lg-3">
            <label htmlFor="sort-tutors">Sort by</label>
            <select
              name="sort-tutors"
              value={this.state.sortApplied}
              onChange={this.sortTutors}
              className="form-control">
                <option value="0">None</option>
                <option value="1">Highest Rank</option>
                <option value="2">Lowest Rank</option>
                <option value="3">Highest Price</option>
                <option value="4">Lowest Price</option>    
            </select>
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