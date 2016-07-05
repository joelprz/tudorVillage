import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import logoImg from '../../styles/img/tutorville-logo.png';

const Header = () => {
  return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><img className="logo-img" src={logoImg} /></li>
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              <li><Link to="/search" activeClassName="active">Search</Link></li>
              <li><Link to="/subjects" activeClassName="active">Subjects</Link></li>
              <li><Link to="/tutors" activeClassName="active">Tutors</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;