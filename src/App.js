import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ToysPage from './pages/ToysPage';
import EducationalPage from './pages/EducationalPage';
import SharpeningPage from './pages/SharpeningPage';

/**
 * Main App Component
 * 
 * This is the root component of the Ebis Treasure website.
 * Now includes React Router for navigation between different pages.
 * 
 * Routes:
 * - / : Homepage with category overview
 * - /toys : Toys & Games category page
 * - /educational : Educational products page
 * - /sharpening : Brain sharpening products page
 * 
 * Future enhancements:
 * - Add individual product detail pages
 * - Add user account pages
 * - Add shopping cart page
 * - Add checkout process
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/toys" element={<ToysPage />} />
          <Route path="/educational" element={<EducationalPage />} />
          <Route path="/sharpening" element={<SharpeningPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
