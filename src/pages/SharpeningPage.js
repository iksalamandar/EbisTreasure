import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../data/csvDataLoader';
import './CategoryPage.css';

/**
 * SharpeningPage Component
 * 
 * Displays all products in the Sharpening category.
 * Now loads product data from CSV file instead of hardcoded JavaScript objects.
 * 
 * Future enhancements:
 * - Add difficulty level filtering
 * - Add skill type categorization (Memory, Logic, Math, etc.)
 * - Add age-appropriate recommendations
 * - Add progress tracking features
 */
const SharpeningPage = () => {
  const [sharpening, setSharpening] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSharpening = async () => {
      try {
        setLoading(true);
        const sharpeningData = await getProductsByCategory('sharpening');
        setSharpening(sharpeningData);
      } catch (err) {
        setError('Failed to load brain sharpening products data');
        console.error('Error loading sharpening products:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSharpening();
  }, []);

  if (loading) {
    return (
      <div className="category-page">
        <Header />
        <main className="main-content">
          <div className="loading-container">
            <h2>Loading Brain Sharpening Products...</h2>
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
          <span className="breadcrumb-current">Sharpening</span>
        </nav>
        
        {/* Page Header */}
        <section className="page-header">
          <div className="page-header-container">
            <h1 className="page-title">Brain Sharpening</h1>
            <p className="page-description">
              Challenge your mind with brain teasers, memory games, and skill-building toys 
              that enhance cognitive abilities and critical thinking.
            </p>
            <div className="product-count">
              {sharpening.length} products available
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="products-section">
          <div className="products-container">
            <div className="products-grid">
              {sharpening.map((product) => (
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

export default SharpeningPage;
