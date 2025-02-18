import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import { getPhotos } from '../api';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchPhotos = async () => {
      const photos = await getPhotos('african');
      setPhotos(photos);
    };
    fetchPhotos();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const photos = await getPhotos(query);
    setPhotos(photos);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <header className="bg-gray-200 p-4 md:p-6 lg:p-8 flex justify-center mb-4 md:mb-6 lg:mb-8">
        <form onSubmit={handleSearch} className="flex w-full max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for photos"
            className="py-2 pl-10 text-sm text-gray-700 w-full"
          />
          <button type="submit" className="ml-4 text-gray-700">
            Search
          </button>
        </form>
      </header>
      <div className="flex flex-wrap -mx-2">
        {photos.map((photo) => (
          <ImageCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default App;