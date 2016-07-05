import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TutorsList = ({tutors}) => {
  return (
    <div className="row">
    {tutors.map(tutor =>
      <div key={tutor.id} className="col-xs-12 col-lg-6">
        <div className="col-xs-12 col-lg-12 highlight">
          <div className="row">
            
            <div className="col-xs-12 col-lg-12">
              <Link className="btn btn-default btn-xs edit-tutor" to={'/tutor/' + tutor.id}>Edit Tutor Details</Link>
              <p><strong>Name:</strong> {tutor.name}</p>
              <p><strong>Title:</strong><br /> {tutor.title}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-12">
              <div className="col-xs-4 col-lg-4 no-padding">
                <strong>Location:</strong><br />
                {tutor.city + ', ' + tutor.state + ' ' + tutor.zip}
              </div>
              <div className="col-xs-4 col-lg-4">
                <strong>Rate:</strong><br />
                <p>{tutor.rate}</p>
              </div>
              <div className="col-xs-4 col-lg-4">
                <strong>Online:</strong><br />
                <p>{tutor.isOnline ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-12">
              <strong>Subjects:</strong><br />
              <p>
              {tutor.subjects.map((subject, index) => {
                if(index < tutor.subjects.length -1) {
                  return <span key={subject}>{subject + ', '}</span>;  
                } else {
                  return <span key={subject}>{subject}</span>;
                }
                })
              }
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-12">

              <div className="col-xs-3 col-lg-3 no-padding">
                <strong>Rating Count:</strong><br />
                <p>{tutor.ratingCount}</p>
              </div>

              <div className="col-xs-3 col-lg-3 no-padding">
                <strong>Star Rating:</strong><br />
                <p>{tutor.starRating}</p>
              </div>

              <div className="col-xs-3 col-lg-3 no-padding">
                <strong>Rank:</strong><br />
                <p>{tutor.rank}</p>
              </div>
              <div className="col-xs-3 col-lg-3 no-padding">
                <strong>Distance:</strong><br />
                <p>{tutor.distance}</p>
              </div>
            </div>
          </div>
          <p><strong>Description:</strong><br /> {tutor.description}</p>
        </div>
      </div>
    )}
    </div>
  );
};

TutorsList.propTypes = {
  tutors: PropTypes.array.isRequired
};

export default TutorsList;