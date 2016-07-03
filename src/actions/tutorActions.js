import * as types from './actionTypes';
import tutorApi from '../api/mockTutorAPI';

export function loadTutorsSuccess(tutors) {
  return {type: types.LOAD_TUTORS_SUCCESS, tutors};
}

export function loadTutorSuccess(tutor) {
  return {type: types.LOAD_TUTOR_SUCCESS, tutor};
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

export function loadTutor(tutorId) {
  return function(dispatch) {
    return tutorApi.getTutorById(tutorId).then(tutor => {
      dispatch(loadTutorSuccess(tutor));
    }).catch(error => {
      throw(error);
    });
  };
}