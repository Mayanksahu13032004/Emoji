import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useFavorites } from '../FavoritesContext/FavoritesContext';

function EmojiDetail() {
  const { name } = useParams();
  const location = useLocation();
  const { url } = location.state || {}; // Safely access the URL from state
  const { addToFavorites } = useFavorites();

  // Debugging to confirm data
  console.log('Received data:', { name, url });

  const handleFavoriteClick = () => {
    if (name && url) {
      addToFavorites({ name, url });
      alert('Added to favorites!');
    }
  };

  const handleCopyClick = () => {
    if (url) {
      navigator.clipboard
        .writeText(url)
        .then(() => alert('Emoji copied to clipboard!'))
        .catch((err) => console.error('Failed to copy text:', err));
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Emoji Detail</h2>
      {url ? (
        <div className="flex items-center space-x-5">
          {/* Render emoji as text since it's a character */}
          <p className="text-6xl">{url}</p>
          <div>
            <p className="text-xl font-bold">Name: {name}</p>
            <div className="mt-4 flex space-x-3">
              <button
                onClick={handleFavoriteClick}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add to Favorites
              </button>
              <button
                onClick={handleCopyClick}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No emoji data available</p>
      )}
    </div>
  );
}

export default EmojiDetail;
