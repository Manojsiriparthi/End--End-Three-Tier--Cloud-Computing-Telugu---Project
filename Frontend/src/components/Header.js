import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#2c3e50', padding: '20px', color: 'white', textAlign: 'center' }}>
      <h1 style={{ margin: '0', fontSize: '2.5rem' }}>CLOUD COMPUTING IN TELUGU</h1>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '0 15px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link to="/courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link to="/materials" style={{ color: 'white', textDecoration: 'none' }}>Materials</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link to="/registration" style={{ color: 'white', textDecoration: 'none' }}>Registration</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link to="/job-portal" style={{ color: 'white', textDecoration: 'none' }}>Job Portal</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link to="/community-chat" style={{ color: 'white', textDecoration: 'none' }}>Community Chat</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

