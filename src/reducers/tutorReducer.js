import * as types from '../actions/actionTypes';

export default function tutorReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_TUTORS_SUCCESS:
      return action.tutors;
    case types.LOAD_TUTOR_SUCCESS:
      return action.tutor;
    default:
      return state;
  }
}