import React from 'react';

const ImageModal = ({ isOpen, photo, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="max-w-2xl w-full">
        <img src={photo.urls.full} alt={photo.alt_description} />
      </div>
      <button
        type="button"
        className="absolute top-4 right-4 text-white"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default ImageModal;