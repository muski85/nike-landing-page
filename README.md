# Nike Landing Page

A modern, responsive Nike shoe store landing page built with React, featuring smooth animations, interactive product cards, and a mobile-first design.

## Features

### Smooth Scroll Animations
- Fade-in and slide-up animations as you scroll through sections
- Optimized viewport detection for performance
- Smooth transitions with easeOut timing

### Interactive Product Cards
- Hover effects with card lift animation
- Gentle image zoom on hover
- Enhanced shadows for depth
- White card backgrounds with rounded corners
- Displays product images, ratings, names, and prices

### Functional Mobile Menu
- Slide-in drawer animation from the right
- Semi-transparent backdrop overlay
- Staggered menu item animations
- Spring physics for natural motion
- Touch-friendly navigation links

### Sections
- Hero section with product showcase and statistics
- Popular products grid with 4 featured Nike shoes
- Super quality section highlighting craftsmanship
- Services section showcasing free shipping, secure payment, and customer support
- Special offers with promotional messaging
- Customer reviews with testimonials
- Newsletter subscription form
- Comprehensive footer with links and social media

## Tech Stack

### Core
- React 19.1.0
- Vite 7.0.4
- JavaScript (ES6+)

### Styling
- Tailwind CSS 3.4.17
- Custom CSS variables
- Google Fonts (Montserrat, Palanquin)

### Animation
- Framer Motion 12.23.26

### Development Tools
- ESLint 9.30.1
- PostCSS 8.5.6
- Autoprefixer

## Installation

Clone the repository:
```bash
git clone https://github.com/yourusername/nike-landing-page.git
cd nike-landing-page
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
nike/
├── public/
│   └── nike-logo.svg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Nav.jsx
│   │   ├── PopularProductCard.jsx
│   │   ├── ReviewCard.jsx
│   │   ├── ServiceCard.jsx
│   │   └── ShoeCard.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── PopularProducts.jsx
│   │   ├── SuperQuality.jsx
│   │   ├── Services.jsx
│   │   ├── SpecialOffers.jsx
│   │   ├── CustomerReviews.jsx
│   │   ├── Subscribe.jsx
│   │   └── Footer.jsx
│   ├── constants/
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- Primary: #ECEEFF
- Coral Red: #FF6452
- Slate Gray: #6D6D6D
- Pale Blue: #F5F6FF

### Products
Update product data in `src/constants/index.js`:
```javascript
export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan 4 J-Balvin",
    price: "$250.00",
  },
  // Add more products
];
```

### Animation Timing
Modify animation settings in `src/App.jsx`:
```javascript
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,  // Adjust duration
      ease: "easeOut"
    }
  }
};
```

## Performance Optimizations

- Images optimized in PNG and WebP formats
- Lazy loading with viewport detection
- Hardware-accelerated animations
- Component-based architecture for code splitting
- Tailwind CSS for minimal CSS bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Nike for brand inspiration
- Framer Motion for animation library
- Tailwind CSS for utility-first styling
- Vite for fast development experience
