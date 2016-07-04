import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import SearchPage from './components/search/SearchPage';
import SubjectsPage from './components/subject/SubjectsPage';
import SubjectPage from './components/subject/SubjectPage';
import TutorsPage from './components/tutor/TutorsPage';
import TutorDetailsPage from './components/tutor/TutorDetailsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="search" component={SearchPage} />
    <Route path="subjects" component={SubjectsPage} />
    <Route path="subject" component={SubjectPage} />
    <Route path="subject/:id" component={SubjectPage} />
    <Route path="tutors" component={TutorsPage} />
    <Route path="tutor" component={TutorDetailsPage} />
    <Route path="tutor/:id" component={TutorDetailsPage} />
  </Route>
);