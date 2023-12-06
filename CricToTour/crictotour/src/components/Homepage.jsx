import React from 'react';
import { Link } from 'react-router-dom';
import crictotour from './crictotour.jpg'
const Homepage = () => {
    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        width: '3000px',
        height: '840px',
      };
      

  const navbarStyle = {
    backgroundColor: '#3498db',
  };

  const footerStyle = {
    backgroundColor: '#3498db', 
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
  };

  const navLinkStyle = {
    color: 'white', 
    margin: '0 10px',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
        <div className="container">
          <Link to="/" className="navbar-brand">CricToTour</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={navLinkStyle}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" style={navLinkStyle}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/livescore" className="nav-link" style={navLinkStyle}>Live Score</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link" style={navLinkStyle}>Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" style={navLinkStyle}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container" style={containerStyle}>
      
        <img
            src={crictotour} 
            alt="Cricket Image"
            style={{ width: '100%', height: 'auto' }}
        />
       
    </div>

      <footer style={footerStyle}>
        &copy; {new Date().getFullYear()} CricToTour. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Homepage;
