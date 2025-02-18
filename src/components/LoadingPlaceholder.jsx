import React from 'react';

const LoadingPlaceholder = () => {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-300 rounded"></div>
      <div className="h-6 bg-gray-300 rounded mt-4"></div>
      <div className="h-6 bg-gray-300 rounded mt-2"></div>
    </div>
  );
};

export default LoadingPlaceholder;