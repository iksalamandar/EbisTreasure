import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * Footer Component
 * 
 * Displays company information, links, and contact details.
 * Now uses React Router for proper navigation between pages.
 * 
 * Future enhancements:
 * - Add social media links
 * - Add newsletter subscription
 * - Add store location information
 * - Add customer service links
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Information */}
        <div className="footer-section">
          <h3 className="footer-title">Ebis Treasure</h3>
          <p className="footer-description">
            Your premier destination for quality toys, educational products, 
            and brain-stimulating games. We believe in the power of play to 
            inspire learning and creativity.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/toys" className="footer-link">Toys & Games</Link></li>
            <li><Link to="/educational" className="footer-link">Educational Products</Link></li>
            <li><Link to="/sharpening" className="footer-link">Brain Teasers</Link></li>
            <li><Link to="/" className="footer-link">About Us</Link></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Contact Us</h4>
          <div className="contact-info">
            <p className="contact-item">
              <span className="contact-label">Email:</span> 
              Ebistreasure@gmail.com
            </p>
            <p className="contact-item">
              <span className="contact-label">Phone:</span> 
              9962839396
            </p>
            <p className="contact-item">
              <span className="contact-label">Hours:</span> 
              Mon-Fri 9AM-6PM
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2024 Ebis Treasure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
