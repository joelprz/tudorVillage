import {combineReducers} from 'redux';
import subjects from './subjectReducer';
import tutors from './tutorReducer';

const rootReducer = combineReducers({
  subjects,
  tutors
});

export default rootReducer;