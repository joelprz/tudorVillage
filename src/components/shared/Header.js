import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import logoImg from '../../styles/img/tutorville-logo.png';

const Header = () => {
  return (
      <header>
        <img src={logoImg} />
        <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          {" | "}
          <Link to="/search" activeClassName="active">Search</Link> 
          {" | "}
          <Link to="/subjects" activeClassName="active">Subjects</Link>
          {" | "}
          <Link to="/tutors" activeClassName="active">Tutors</Link> 
        </nav>
      </header>
  );
};

export default Header;