import React, {PropTypes} from 'react';
import SubjectListRow from './SubjectListRow';

const SubjectList = ({subjects}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
      {subjects.map(subject =>
        <SubjectListRow key={subject.id} subject={subject} />
      )}
      </tbody>
    </table>
  );
};

SubjectList.propTypes = {
  subjects: PropTypes.array.isRequired
};

export default SubjectList;