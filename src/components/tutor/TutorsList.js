import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TutorsList = ({tutors}) => {
  return (
    <div>
    {tutors.map(tutor =>
      <div key={tutor.id}>
        <p><Link to={'/tutor/' + tutor.id}>Edit Tutor Details</Link></p>
        <p>{tutor.name}</p>
        <p>{tutor.Title}</p>
        <p>{tutor.description}</p>
        <p>{tutor.city + ', ' + tutor.state + ', ' + tutor.zip}</p>
        <p>{tutor.rate}</p>
        <p>{tutor.isOnline}</p>
        <div>{tutor.subjects.map(subject => <p key={subject}>{subject}</p>)}</div>
        <p>{tutor.ratingCount}</p>
        <p>{tutor.starRating}</p>
        <p>{tutor.rank}</p>
      </div>
    )}
    </div>
  );
};

TutorsList.propTypes = {
  tutors: PropTypes.array.isRequired
};

export default TutorsList;