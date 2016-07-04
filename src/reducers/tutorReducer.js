import * as types from '../actions/actionTypes';

export default function tutorReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_TUTORS_SUCCESS:
      return action.tutors;
    
    case types.CREATE_TUTOR_SUCCESS:
      return [...state, Object.assign({}, action.tutor)];

    case types.UPDATE_TUTOR_SUCCESS:
      // Get subset of state that doesn't include updated course, and append new course
      // This updates value in array w/o mutating state
      return [
        ...state.filter(tutor => tutor.id !== action.tutor.id),
        Object.assign({}, action.tutor)
      ];
    default:
      return state;
  }
}