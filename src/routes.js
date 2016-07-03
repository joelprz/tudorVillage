import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import SearchPage from './components/search/SearchPage';
import SubjectPage from './components/subject/SubjectPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="search" component={SearchPage} />
    <Route path="subjects" component={SubjectPage} />
  </Route>
);