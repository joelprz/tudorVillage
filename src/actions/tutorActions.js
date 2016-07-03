import * as types from './actionTypes';
import tutorApi from '../api/mockTutorAPI';

export function loadTutorsSuccess(tutors) {
  return {type: types.LOAD_TUTORS_SUCCESS, tutors};
}

export function loadTutors() {
  return function(dispatch) {
    return tutorApi.getAllTutors().then(tutors => {
      dispatch(loadTutorsSuccess(tutors));
    }).catch(error => {
      throw(error);
    });
  };
}