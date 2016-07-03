import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SubjectListRow = ({subject}) => {
  return (
    <tr>      
      <td>{subject.id}</td>
      <td>{subject.title}</td>
    </tr>
  );
};

SubjectListRow.propTypes = {
  subject: PropTypes.object.isRequired
};

export default SubjectListRow;