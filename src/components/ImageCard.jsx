import React from 'react';

const ImageCard = ({ photo }) => {
  return (
    <div className="relative flex-shrink-0 w-full md:w-1/2 xl:w-1/3 p-2">
      <img
        src={photo.urls.regular}
        alt={photo.alt_description}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50">
        {photo.user?.name ? (
          <p>Photo by {photo.user.name}</p>
        ) : (
          <p>Unknown author</p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;