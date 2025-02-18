// ImageCard.jsx
import React, { useState, useEffect } from 'react';
import { getPhoto } from '../../api';

const ImageCard = ({ photo }) => {
  const [image, setImage] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const image = await getPhoto(photo.id);
        setImage(image);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchImage();
  }, [photo.id]);

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <img src={image.urls?.regular} alt={image.alt_description} />
      <div>
        {image.user?.name ? (
          <p>Photo by {image.user.name}</p>
        ) : (
          <p>Unknown author</p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;