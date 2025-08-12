# Image Search - Modern React Image Discovery Platform

A sleek, modern web application for searching and discovering high-quality images from Unsplash. Built with React and featuring beautiful animations, gradients, and a responsive design.

![Image Search Preview](Preview1)
![Image Search Preview](Preview2)

## ✨ Features

- **🔍 Smart Search**: Search through millions of high-quality images
- **🎨 Modern UI**: Beautiful gradient designs and smooth animations
- **📱 Responsive**: Works perfectly on desktop, tablet, and mobile
- **⚡ Fast Loading**: Optimized image loading with lazy loading
- **🎯 Real-time Results**: Instant search results as you type
- **📊 Image Details**: View photographer info, likes, and descriptions
- **🔄 Fallback Support**: Mock data fallback when API is unavailable

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chaithanya628131/image-search.git
cd image-search
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Tech Stack

- **Frontend**: React 18
- **Styling**: CSS3 with modern features (Grid, Flexbox, Animations)
- **API**: Unsplash API
- **HTTP Client**: Axios
- **Build Tool**: Create React App


## 🎨 Components Overview

### SearchBar Component
- Clean, modern search input with icon
- Real-time search functionality
- Enter key support for quick searching
- Responsive design

### ImageGrid Component
- Responsive grid layout (adjusts columns based on screen size)
- Hover effects on images
- Displays image metadata (photographer, likes)
- Smooth loading animations

### LoadingSpinner Component
- Animated loading indicator
- Centered display during API calls
- Smooth fade-in/out transitions

## 🔧 API Configuration

The app uses the Unsplash API for image search. The API key is included in the source code for demo purposes. For production use:

1. Get your API key from [Unsplash Developers](https://unsplash.com/developers)
2. Replace the client_id in `src/App.js`:
```javascript
const response = await fetch(
  `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=YOUR_API_KEY`
);
```

## 🎯 Usage

1. **Search Images**: Type any keyword in the search bar (e.g., "nature", "technology", "portrait")
2. **View Results**: Browse through the grid of matching images
3. **Image Details**: Hover over images to see photographer information
4. **New Search**: Simply type a new search term to refresh results

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🎨 Styling Features

- **Gradient Text Effects**: Beautiful gradient text animations
- **Hover Animations**: Smooth transitions on interactive elements
- **Responsive Grid**: Dynamic column layout based on screen size
- **Loading States**: Animated loading indicators
- **Mobile-First**: Optimized for mobile devices

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



