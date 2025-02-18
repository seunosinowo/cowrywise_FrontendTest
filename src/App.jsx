import React, { useState, useEffect } from 'react';
import { getPhotos } from '../api';
import ImageCard from './components/ImageCard';
import SearchBar from './components/SearchBar';
import ImageModal from './components/ImageModal';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const handleSearch = async (query) => {
    setQuery(query);
    const photos = await getPhotos(query);
    setPhotos(photos);
  };
  
  const handleImageClick = (photo) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  
  useEffect(() => {
    const fetchPhotos = async () => {
      const photos = await getPhotos('african');
      setPhotos(photos);
    };
    fetchPhotos();
  }, []);
  
  return (
    <div className="max-w-5xl mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      {query === '' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {photos.map((photo) => (
            <ImageCard key={photo.id} photo={photo} onClick={handleImageClick} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {photos.map((photo) => (
            <ImageCard key={photo.id} photo={photo} onClick={handleImageClick} />
          ))}
        </div>
      )}
      {isOpen && (
        <ImageModal isOpen={isOpen} photo={selectedPhoto} onClose={handleCloseModal} />
      )}
    </div>
  );
  };
  
  export default App;