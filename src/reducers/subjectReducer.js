import * as types from '../actions/actionTypes';

export default function subjectReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_SUBJECTS_SUCCESS:
      return action.subjects;
    default:
      return state;
  }
}