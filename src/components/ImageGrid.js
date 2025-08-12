import React from 'react';
import './ImageGrid.css';

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <a
          key={image.id}
          href={image.urls.regular}
          target="_blank"
          rel="noopener noreferrer"
          className="image-item"
          title={image.alt_description || 'Image'}
        >
          <img
            src={image.urls.small}
            alt={image.alt_description || 'Image'}
            loading="lazy"
            className="image"
          />
          <div className="image-overlay">
            <div className="image-info">
              <p className="image-desc">{image.alt_description || 'Untitled'}</p>
              <p className="image-author">By {image.user?.name || 'Unknown'}</p>
              <p className="image-likes">❤️ {image.likes || 0}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ImageGrid;
