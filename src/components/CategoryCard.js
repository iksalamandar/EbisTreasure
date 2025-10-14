import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

/**
 * CategoryCard Component
 * 
 * Displays individual product categories as cards.
 * This component is reusable and can be easily updated with new categories.
 * 
 * Props:
 * - title: The category name
 * - description: Brief description of the category
 * - imageSrc: Path to the category image
 * - imageAlt: Alt text for accessibility
 * - linkTo: The route path to navigate to when clicked
 * 
 * Future enhancements:
 * - Add hover effects
 * - Add category-specific icons
 * - Add product count display
 */
const CategoryCard = ({ title, description, imageSrc, imageAlt, linkTo }) => {
  return (
    <Link to={linkTo} className="category-card-link">
      <div className="category-card">
        {/* Category Image */}
        <div className="category-image-container">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="category-image"
            loading="lazy"
          />
        </div>
        
        {/* Category Content */}
        <div className="category-content">
          <h3 className="category-title">{title}</h3>
          <p className="category-description">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
