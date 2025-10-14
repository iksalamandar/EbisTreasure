import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../data/csvDataLoader';
import './CategoryPage.css';

/**
 * ToysPage Component
 * 
 * Displays all products in the Toys & Games category.
 * Now loads product data from CSV file instead of hardcoded JavaScript objects.
 * 
 * Future enhancements:
 * - Add product filtering and sorting
 * - Add product search functionality
 * - Add product comparison feature
 * - Add customer reviews and ratings
 */
const ToysPage = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadToys = async () => {
      try {
        setLoading(true);
        const toysData = await getProductsByCategory('toys');
        setToys(toysData);
      } catch (err) {
        setError('Failed to load toys data');
        console.error('Error loading toys:', err);
      } finally {
        setLoading(false);
      }
    };

    loadToys();
  }, []);

  if (loading) {
    return (
      <div className="category-page">
        <Header />
        <main className="main-content">
          <div className="loading-container">
            <h2>Loading Toys & Games...</h2>
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
          <span className="breadcrumb-current">Toys & Games</span>
        </nav>
        
        {/* Page Header */}
        <section className="page-header">
          <div className="page-header-container">
            <h1 className="page-title">Toys & Games</h1>
            <p className="page-description">
              Discover our collection of fun and interactive toys, challenging puzzles, and exciting board games. 
              Perfect for family game nights and endless entertainment.
            </p>
            <div className="product-count">
              {toys.length} products available
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="products-section">
          <div className="products-container">
            <div className="products-grid">
              {toys.map((product) => (
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

export default ToysPage;
