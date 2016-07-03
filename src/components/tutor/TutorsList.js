import React, {PropTypes} from 'react';

const TutorsList = ({tutors}) => {
  return (
    <div>
    {tutors.map(tutor =>
      <p key={tutor.id}>{tutor.name}</p>
    )}
    </div>
  );
};

TutorsList.propTypes = {
  tutors: PropTypes.array.isRequired
};

export default TutorsList;