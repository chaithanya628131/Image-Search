import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const searchImages = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setSearchTerm(query);
    
    try {
      // Using the provided Unsplash API key
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=XWvecVfnB1tFiVTd976KemtZyYmr7YGSHB1_fLCxGA0`
      );
      
      if (response.ok) {
        const data = await response.json();
        setImages(data.results);
      } else {
        // Fallback to mock data if API fails
        const mockImages = generateMockImages(query);
        setImages(mockImages);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      // Fallback to mock data
      const mockImages = generateMockImages(query);
      setImages(mockImages);
    } finally {
      setLoading(false);
    }
  };

  const generateMockImages = (query) => {
    return Array.from({ length: 12 }, (_, index) => ({
      id: `${query}-${index}`,
      urls: {
        regular: `https://picsum.photos/400/300?random=${index + 1}`,
        small: `https://picsum.photos/200/150?random=${index + 1}`
      },
      alt_description: `${query} image ${index + 1}`,
      user: {
        name: `Photographer ${index + 1}`,
        username: `user${index + 1}`
      },
      likes: Math.floor(Math.random() * 1000) + 100
    }));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">
          <span className="gradient-text">Image</span>
          <span className="gradient-text2">Search</span>
        </h1>
        <p className="app-subtitle">
          Discover amazing images 
        </p>
      </header>
      
      <SearchBar onSearch={searchImages} />
      
      {loading && <LoadingSpinner />}
      
      {images.length > 0 && (
        <ImageGrid 
          images={images} 
          searchTerm={searchTerm}
        />
      )}
      
      {searchTerm && images.length === 0 && !loading && (
        <div className="no-results">
          <h2>No images found for "{searchTerm}"</h2>
          <p>Try searching with different keywords</p>
        </div>
      )}
    </div>
  );
};

export default App;

