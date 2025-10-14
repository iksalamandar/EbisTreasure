/**
 * CSV Data Loader
 * 
 * This file loads product data from the actual CSV file.
 * The CSV data is fetched and parsed using PapaParse library.
 * 
 * Benefits of this approach:
 * - Easy to edit product data by modifying the CSV file
 * - Can be updated by non-technical users
 * - Better for bulk data management
 * - Real-time updates when CSV file changes
 */

import Papa from 'papaparse';

// Cache for parsed products to avoid re-parsing
let productsCache = null;

/**
 * Loads and parses the CSV data from the actual CSV file
 * @returns {Promise<Array>} Promise that resolves to array of product objects
 */
const loadProductsFromCSV = async () => {
  if (productsCache) {
    return productsCache;
  }

  try {
    // Fetch CSV data from the file
    const response = await fetch('/products.csv');
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.status}`);
    }
    
    const csvText = await response.text();
    
    // Parse CSV data
    const parseResult = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim(),
      transform: (value, field) => {
        // Convert price to number
        if (field === 'price') {
          return parseFloat(value);
        }
        return value.trim();
      }
    });

    if (parseResult.errors.length > 0) {
      console.error('CSV parsing errors:', parseResult.errors);
    }

    productsCache = parseResult.data;
    return productsCache;
  } catch (error) {
    console.error('Error loading CSV data:', error);
    // Fallback to empty array if CSV loading fails
    return [];
  }
};

/**
 * Helper function to get products by category
 * @param {string} category - The category name ('toys', 'educational', 'sharpening')
 * @returns {Promise<Array>} Promise that resolves to array of products for the specified category
 */
export const getProductsByCategory = async (category) => {
  const products = await loadProductsFromCSV();
  return products.filter(product => product.category === category);
};

/**
 * Helper function to get all products
 * @returns {Promise<Array>} Promise that resolves to array of all products across all categories
 */
export const getAllProducts = async () => {
  return await loadProductsFromCSV();
};

/**
 * Helper function to get a specific product by ID
 * @param {string} id - The product ID
 * @returns {Promise<Object|null>} Promise that resolves to the product object or null if not found
 */
export const getProductById = async (id) => {
  const products = await loadProductsFromCSV();
  return products.find(product => product.id === id) || null;
};

/**
 * Helper function to get products by price range
 * @param {number} minPrice - Minimum price
 * @param {number} maxPrice - Maximum price
 * @returns {Promise<Array>} Promise that resolves to array of products within the price range
 */
export const getProductsByPriceRange = async (minPrice, maxPrice) => {
  const products = await loadProductsFromCSV();
  return products.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
};

/**
 * Helper function to search products by name or description
 * @param {string} searchTerm - The search term
 * @returns {Promise<Array>} Promise that resolves to array of matching products
 */
export const searchProducts = async (searchTerm) => {
  const products = await loadProductsFromCSV();
  const term = searchTerm.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term)
  );
};

/**
 * Helper function to clear the cache (useful for development/testing)
 */
export const clearCache = () => {
  productsCache = null;
};
