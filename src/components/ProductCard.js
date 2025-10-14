import React from 'react';
import './ProductCard.css';

/**
 * ProductCard Component
 * 
 * Displays individual products in a card format.
 * This component is reusable and can be easily updated with new product information.
 * 
 * Props:
 * - product: Object containing product information
 *   - id: Unique product identifier
 *   - name: Product name
 *   - description: Product description
 *   - price: Product price
 *   - imageSrc: Path to product image
 *   - imageAlt: Alt text for accessibility
 *   - category: Product category
 * 
 * Future enhancements:
 * - Add "Add to Cart" button (when cart functionality is implemented)
 * - Add product rating/reviews
 * - Add wishlist functionality
 * - Add product comparison feature
 */
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        <img 
          src={product.imageSrc} 
          alt={product.imageAlt}
          className="product-image"
          loading="lazy"
        />
      </div>
      
      {/* Product Content */}
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">₹{product.price}</div>
        
        {/* Future: Add "Add to Cart" button when cart functionality is implemented */}
        {/* 
        <button className="add-to-cart-button">
          Add to Cart
        </button>
        */}
      </div>
    </div>
  );
};

export default ProductCard;
