import React, {PropTypes} from 'react';

const TutorList = ({tutors}) => {
  return (
    <div>
    {tutors.map(tutor =>
      <p key={tutor.id}>{tutor.name}</p>
    )}
    </div>
  );
};

TutorList.propTypes = {
  tutors: PropTypes.array.isRequired
};

export default TutorList;