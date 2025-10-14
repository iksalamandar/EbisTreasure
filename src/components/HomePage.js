import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CategoryCard from './CategoryCard';
import './HomePage.css';

/**
 * HomePage Component
 * 
 * Main landing page for Ebis Treasure website.
 * Displays the header, store description, and three main product categories.
 * 
 * Category Data:
 * This data can be easily updated by modifying the categories array below.
 * To add new categories, simply add new objects to the array with the required properties.
 * 
 * Future enhancements:
 * - Add featured products section
 * - Add customer testimonials
 * - Add newsletter signup
 * - Add promotional banners
 * - Connect to a CMS for dynamic content management
 */
const HomePage = () => {
  // Category data - easily updatable for future changes
  const categories = [
    {
      id: 'toys-games',
      title: 'Toys & Games',
      description: 'Discover our collection of fun and interactive toys, challenging puzzles, and exciting board games. Perfect for family game nights and endless entertainment.',
      imageSrc: '/assets/toys.jpg',
      imageAlt: 'Colorful collection of toys, puzzles, and board games',
      linkTo: '/toys'
    },
    {
      id: 'educational',
      title: 'Educational',
      description: 'Explore STEM kits, educational books, and learning tools designed to inspire curiosity and foster academic growth in children of all ages.',
      imageSrc: '/assets/educational.jpg',
      imageAlt: 'STEM kits, books, and educational learning tools',
      linkTo: '/educational'
    },
    {
      id: 'sharpening',
      title: 'Sharpening',
      description: 'Challenge your mind with brain teasers, memory games, and skill-building toys that enhance cognitive abilities and critical thinking.',
      imageSrc: '/assets/sharpening.jpg',
      imageAlt: 'Brain teasers, memory games, and skill-building puzzles',
      linkTo: '/sharpening'
    }
  ];

  return (
    <div className="homepage">
      {/* Header Component */}
      <Header />
      
      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-container">
            <h2 className="hero-title">Welcome to Ebis Treasure</h2>
            <p className="hero-description">
              Your premier destination for quality toys, educational products, and brain-stimulating games. 
              We believe in the power of play to inspire learning, creativity, and joy in children and families.
            </p>
            <p className="hero-subdescription">
              Browse our carefully curated collection of products designed to entertain, educate, and challenge minds of all ages.
            </p>
          </div>
        </section>
        
        {/* Categories Section */}
        <section id="about" className="categories-section">
          <div className="categories-container">
            <h2 className="section-title">Our Product Categories</h2>
            <p className="section-subtitle">
              Discover our three main categories, each designed to meet different needs and interests.
            </p>
            
            {/* Category Cards Grid */}
            <div className="categories-grid">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  imageSrc={category.imageSrc}
                  imageAlt={category.imageAlt}
                  linkTo={category.linkTo}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Additional Information Section */}
        <section id="contact" className="info-section">
          <div className="info-container">
            <h2 className="section-title">Why Choose Ebis Treasure?</h2>
            <div className="info-grid">
              <div className="info-item">
                <h3 className="info-title">Quality Products</h3>
                <p className="info-description">
                  We carefully select only the highest quality toys and educational products 
                  from trusted manufacturers.
                </p>
              </div>
              <div className="info-item">
                <h3 className="info-title">Educational Focus</h3>
                <p className="info-description">
                  Every product in our store is chosen to promote learning, creativity, 
                  and skill development.
                </p>
              </div>
              <div className="info-item">
                <h3 className="info-title">Family Fun</h3>
                <p className="info-description">
                  Our products are designed to bring families together through 
                  shared experiences and quality time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;
