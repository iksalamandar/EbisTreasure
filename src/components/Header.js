import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

/**
 * Header Component
 * 
 * Displays the main navigation and branding for Ebis Treasure.
 * Now uses React Router for proper navigation between pages.
 * 
 * Future enhancements:
 * - Add search functionality
 * - Add user account links
 * - Add shopping cart icon (when cart functionality is implemented)
 */
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Main Logo/Brand */}
        <div className="brand">
          <Link to="/" className="brand-link">
            <h1 className="brand-title">Ebis Treasure</h1>
            <p className="brand-tagline">Where Imagination Meets Learning</p>
          </Link>
        </div>
        
        {/* Navigation Menu */}
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/toys" className="nav-link">Toys & Games</Link>
            </li>
            <li className="nav-item">
              <Link to="/educational" className="nav-link">Educational</Link>
            </li>
            <li className="nav-item">
              <Link to="/sharpening" className="nav-link">Sharpening</Link>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
