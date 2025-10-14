import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../data/csvDataLoader';
import './CategoryPage.css';

/**
 * EducationalPage Component
 * 
 * Displays all products in the Educational category.
 * Now loads product data from CSV file instead of hardcoded JavaScript objects.
 * 
 * Future enhancements:
 * - Add age-based filtering
 * - Add subject-based categorization (Science, Math, Language, etc.)
 * - Add learning level indicators
 * - Add curriculum alignment information
 */
const EducationalPage = () => {
  const [educational, setEducational] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEducational = async () => {
      try {
        setLoading(true);
        const educationalData = await getProductsByCategory('educational');
        setEducational(educationalData);
      } catch (err) {
        setError('Failed to load educational products data');
        console.error('Error loading educational products:', err);
      } finally {
        setLoading(false);
      }
    };

    loadEducational();
  }, []);

  if (loading) {
    return (
      <div className="category-page">
        <Header />
        <main className="main-content">
          <div className="loading-container">
            <h2>Loading Educational Products...</h2>
            <p>Please wait while we load the products.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="category-page">
        <Header />
        <main className="main-content">
          <div className="error-container">
            <h2>Error Loading Products</h2>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="category-page">
      {/* Header Component */}
      <Header />
      
      {/* Main Content */}
      <main className="main-content">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">Educational</span>
        </nav>
        
        {/* Page Header */}
        <section className="page-header">
          <div className="page-header-container">
            <h1 className="page-title">Educational Products</h1>
            <p className="page-description">
              Explore STEM kits, educational books, and learning tools designed to inspire curiosity 
              and foster academic growth in children of all ages.
            </p>
            <div className="product-count">
              {educational.length} products available
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="products-section">
          <div className="products-container">
            <div className="products-grid">
              {educational.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default EducationalPage;
