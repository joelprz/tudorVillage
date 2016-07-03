import {combineReducers} from 'redux';
import subjects from './subjectReducer';

const rootReducer = combineReducers({
  subjects
});

export default rootReducer;