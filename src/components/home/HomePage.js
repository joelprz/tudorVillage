import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h1>Tutorville Demo</h1>
        <p>I wanted to use my time on this project to not only complete the requested tasks, but to explore some new technologies and strengthen my understanding of ES6 features.</p> 
        <p>This application utilizes npm and Webpack to transpile ES6, launch an Express server, lint JavaScript, run tests, watch files, hot reload views, and build the app for both development and production. Although overkill for a project of this scope, I built it using Redux, a React approach which features a single source of truth (store) and pure reducer functions to enforce immutable data. The code leverages the ES6 class syntax and module loading, arrow functions, spread operators, destructuring, and a host of other modern JavaScript features.</p>
        <p>Please allow me to answer any questions you might have once you've had a chance to look around.</p> 
        <h3>Joel</h3>
      </div>
    );
  }
}

export default HomePage;