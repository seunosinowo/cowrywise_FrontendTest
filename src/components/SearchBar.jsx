import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for photos"
        className="py-2 pl-10 text-sm text-gray-700"
      />
      <button type="submit" className="ml-4 text-gray-700">
        Search
      </button>
    </form>
  );
};

export default SearchBar;