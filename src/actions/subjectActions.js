import * as types from './actionTypes';
import subjectApi from '../api/mockSubjectAPI';

export function loadSubjectsSuccess(subjects) {
  return {type: types.LOAD_SUBJECTS_SUCCESS, subjects};
}

export function loadSubjects() {
  return function(dispatch) {
    return subjectApi.getAllSubjects().then(subjects => {
      dispatch(loadSubjectsSuccess(subjects));
    }).catch(error => {
      throw(error);
    });
  };
}