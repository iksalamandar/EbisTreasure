/**
 * Product Data
 * 
 * This file contains all product information for the Ebis Treasure store.
 * Products are organized by category for easy management and updates.
 * 
 * To add new products:
 * 1. Add a new product object to the appropriate category array
 * 2. Include all required properties: id, name, description, price, imageSrc, imageAlt, category
 * 3. Add the corresponding product image to the public/assets/products/ folder
 * 
 * To update existing products:
 * 1. Modify the properties in the product object
 * 2. Update the corresponding image if needed
 */

export const productsData = {
  toys: [
    {
      id: 'toy-001',
      name: 'Magic Building Blocks Set',
      description: 'Colorful interlocking blocks that spark creativity and improve fine motor skills. Perfect for imaginative play.',
      price: 29.99,
      imageSrc: '/assets/products/magic-blocks.jpg',
      imageAlt: 'Colorful interlocking building blocks',
      category: 'toys'
    },
    {
      id: 'toy-002',
      name: 'Family Board Game Collection',
      description: 'A collection of classic board games including Monopoly, Scrabble, and Chess. Hours of family fun guaranteed.',
      price: 49.99,
      imageSrc: '/assets/products/board-games.jpg',
      imageAlt: 'Collection of classic board games',
      category: 'toys'
    },
    {
      id: 'toy-003',
      name: '3D Puzzle Adventure',
      description: 'Challenge your spatial thinking with these intricate 3D puzzles. Multiple difficulty levels available.',
      price: 19.99,
      imageSrc: '/assets/products/3d-puzzle.jpg',
      imageAlt: '3D puzzle pieces and completed puzzle',
      category: 'toys'
    },
    {
      id: 'toy-004',
      name: 'Remote Control Car',
      description: 'High-speed remote control car with LED lights and realistic sound effects. Perfect for outdoor adventures.',
      price: 39.99,
      imageSrc: '/assets/products/rc-car.jpg',
      imageAlt: 'Remote control car with LED lights',
      category: 'toys'
    },
    {
      id: 'toy-005',
      name: 'Art & Craft Kit',
      description: 'Complete art supplies kit with paints, brushes, paper, and stickers. Unleash your child\'s artistic potential.',
      price: 24.99,
      imageSrc: '/assets/products/art-kit.jpg',
      imageAlt: 'Art supplies including paints and brushes',
      category: 'toys'
    },
    {
      id: 'toy-006',
      name: 'Musical Instruments Set',
      description: 'Mini orchestra set with xylophone, tambourine, maracas, and more. Introduce children to the joy of music.',
      price: 34.99,
      imageSrc: '/assets/products/musical-set.jpg',
      imageAlt: 'Collection of child-friendly musical instruments',
      category: 'toys'
    }
  ],
  
  educational: [
    {
      id: 'edu-001',
      name: 'Robot Coding Kit',
      description: 'Learn programming basics with this interactive robot. Includes visual coding interface and step-by-step tutorials.',
      price: 79.99,
      imageSrc: '/assets/products/robot-kit.jpg',
      imageAlt: 'Educational robot coding kit',
      category: 'educational'
    },
    {
      id: 'edu-002',
      name: 'Science Experiment Lab',
      description: 'Complete chemistry set with safe experiments. Learn about reactions, molecules, and scientific principles.',
      price: 59.99,
      imageSrc: '/assets/products/science-lab.jpg',
      imageAlt: 'Science experiment laboratory kit',
      category: 'educational'
    },
    {
      id: 'edu-003',
      name: 'Interactive World Map',
      description: 'Electronic world map with facts about countries, capitals, and cultures. Touch-activated learning experience.',
      price: 44.99,
      imageSrc: '/assets/products/world-map.jpg',
      imageAlt: 'Interactive electronic world map',
      category: 'educational'
    },
    {
      id: 'edu-004',
      name: 'Math Learning Tablet',
      description: 'Digital tablet with math games and exercises. Adaptive learning system adjusts to your child\'s level.',
      price: 69.99,
      imageSrc: '/assets/products/math-tablet.jpg',
      imageAlt: 'Educational math learning tablet',
      category: 'educational'
    },
    {
      id: 'edu-005',
      name: 'Language Learning Books',
      description: 'Set of illustrated books for learning Spanish, French, and Mandarin. Includes audio pronunciation guides.',
      price: 29.99,
      imageSrc: '/assets/products/language-books.jpg',
      imageAlt: 'Language learning book collection',
      category: 'educational'
    },
    {
      id: 'edu-006',
      name: 'Microscope Discovery Kit',
      description: 'Real working microscope with prepared slides and specimen collection tools. Explore the microscopic world.',
      price: 54.99,
      imageSrc: '/assets/products/microscope.jpg',
      imageAlt: 'Educational microscope with slides',
      category: 'educational'
    }
  ],
  
  sharpening: [
    {
      id: 'sharp-001',
      name: 'Memory Master Game',
      description: 'Advanced memory training game with multiple difficulty levels. Improve concentration and recall abilities.',
      price: 19.99,
      imageSrc: '/assets/products/memory-game.jpg',
      imageAlt: 'Memory training card game',
      category: 'sharpening'
    },
    {
      id: 'sharp-002',
      name: 'Logic Puzzle Collection',
      description: 'Set of challenging logic puzzles including Sudoku, crosswords, and brain teasers. Sharpen your thinking skills.',
      price: 24.99,
      imageSrc: '/assets/products/logic-puzzles.jpg',
      imageAlt: 'Collection of logic puzzle books',
      category: 'sharpening'
    },
    {
      id: 'sharp-003',
      name: 'Speed Math Trainer',
      description: 'Electronic device for practicing mental math. Timed challenges to improve calculation speed and accuracy.',
      price: 34.99,
      imageSrc: '/assets/products/math-trainer.jpg',
      imageAlt: 'Electronic speed math training device',
      category: 'sharpening'
    },
    {
      id: 'sharp-004',
      name: 'Word Association Game',
      description: 'Creative word game that enhances vocabulary and lateral thinking. Perfect for family game nights.',
      price: 16.99,
      imageSrc: '/assets/products/word-game.jpg',
      imageAlt: 'Word association card game',
      category: 'sharpening'
    },
    {
      id: 'sharp-005',
      name: 'Pattern Recognition Kit',
      description: 'Visual pattern recognition exercises with increasing complexity. Develop analytical thinking skills.',
      price: 22.99,
      imageSrc: '/assets/products/pattern-kit.jpg',
      imageAlt: 'Pattern recognition puzzle pieces',
      category: 'sharpening'
    },
    {
      id: 'sharp-006',
      name: 'Concentration Meditation Set',
      description: 'Guided meditation cards and mindfulness exercises. Improve focus and mental clarity through practice.',
      price: 18.99,
      imageSrc: '/assets/products/meditation-set.jpg',
      imageAlt: 'Meditation cards and mindfulness tools',
      category: 'sharpening'
    }
  ]
};

/**
 * Helper function to get products by category
 * @param {string} category - The category name ('toys', 'educational', 'sharpening')
 * @returns {Array} Array of products for the specified category
 */
export const getProductsByCategory = (category) => {
  return productsData[category] || [];
};

/**
 * Helper function to get all products
 * @returns {Array} Array of all products across all categories
 */
export const getAllProducts = () => {
  return Object.values(productsData).flat();
};

/**
 * Helper function to get a specific product by ID
 * @param {string} id - The product ID
 * @returns {Object|null} The product object or null if not found
 */
export const getProductById = (id) => {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === id) || null;
};
