# Ebis Treasure - Static React.js Toy Store Website

A clean, informative static website for Ebis Treasure toy store built with React.js. This website showcases three main product categories without any e-commerce functionality.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modular Components**: Easy to maintain and update
- **Three Main Categories**:
  - Toys & Games: Fun and interactive toys, puzzles, board games
  - Educational: STEM kits, books, learning tools
  - Sharpening: Brain teasers, memory games, skill-building toys
- **Clean Layout**: Professional design with gradient backgrounds and card-based layout
- **Accessibility**: Proper focus states and semantic HTML

## Project Structure

```
ebis-treasure/
├── public/
│   ├── assets/
│   │   ├── toys.jpg          # Placeholder for Toys & Games category
│   │   ├── educational.jpg   # Placeholder for Educational category
│   │   └── sharpening.jpg    # Placeholder for Sharpening category
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js         # Navigation and branding
│   │   ├── Header.css
│   │   ├── Footer.js         # Company info and links
│   │   ├── Footer.css
│   │   ├── CategoryCard.js   # Reusable category display
│   │   ├── CategoryCard.css
│   │   ├── HomePage.js       # Main page component
│   │   └── HomePage.css
│   ├── App.js               # Main app component
│   ├── App.css              # Global styles
│   ├── index.js             # Entry point
│   └── index.css            # CSS reset and global styles
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

The website will open in your browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Customization Guide

### Adding New Categories

To add new product categories, edit the `categories` array in `src/components/HomePage.js`:

```javascript
const categories = [
  // ... existing categories
  {
    id: 'new-category',
    title: 'New Category Name',
    description: 'Description of the new category',
    imageSrc: '/assets/new-category.jpg',
    imageAlt: 'Alt text for the new category image'
  }
];
```

### Updating Images

1. Replace the placeholder files in `public/assets/` with actual images
2. Recommended image dimensions: 400x300px or similar aspect ratio
3. Supported formats: JPG, PNG, WebP
4. Update the `imageSrc` paths in the categories array if needed

### Styling Updates

- **Global styles**: Edit `src/App.css` and `src/index.css`
- **Component styles**: Each component has its own CSS file
- **Color scheme**: Update CSS custom properties in the respective files
- **Responsive breakpoints**: Modify media queries in component CSS files

### Adding New Sections

1. Create new components in `src/components/`
2. Import and use them in `HomePage.js`
3. Add corresponding CSS files for styling

## Future Enhancements

The codebase is designed to be easily extensible. Consider these future improvements:

- **Product Pages**: Add individual product detail pages
- **Search Functionality**: Implement product search
- **Shopping Cart**: Add e-commerce functionality
- **User Accounts**: Implement user registration and login
- **Content Management**: Connect to a CMS for dynamic content
- **Blog Section**: Add educational content and toy reviews
- **Newsletter**: Implement email subscription
- **Social Media**: Add social media integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact info@ebistreasure.com
