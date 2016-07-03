import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import SearchPage from './components/search/SearchPage';
import SubjectsPage from './components/subject/SubjectsPage';
import TutorPage from './components/tutor/TutorPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="search" component={SearchPage} />
    <Route path="subjects" component={SubjectsPage} />
    <Route path="tutors" component={TutorPage} />
  </Route>
);