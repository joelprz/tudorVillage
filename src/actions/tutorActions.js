import * as types from './actionTypes';
import tutorApi from '../api/mockTutorAPI';

export function loadTutorsSuccess(tutors) {
  return {type: types.LOAD_TUTORS_SUCCESS, tutors};
}

export function updateTutorSuccess(tutor) {
  return {type: types.UPDATE_TUTOR_SUCCESS, tutor};
}

export function createTutorSuccess(tutor) {
  return {type: types.CREATE_TUTOR_SUCCESS, tutor};
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

export function saveTutor(tutor) {
  return function(dispatch, getState) {
    return tutorApi.saveTutor(tutor).then(savedTutor => {
      tutor.id ? dispatch(updateTutorSuccess(savedTutor)):
        dispatch(createTutorSuccess(savedTutor));
    }).catch(error => {
      throw(error);
    });
  };
}