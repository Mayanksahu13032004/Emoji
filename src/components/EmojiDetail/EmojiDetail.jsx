import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useFavorites } from '../FavoritesContext/FavoritesContext';

function EmojiDetail() {
  const { name } = useParams();
  const location = useLocation();
  const { url } = location.state || {};
  const { addToFavorites } = useFavorites();

  const handleFavoriteClick = () => {
    if (name && url) {
      addToFavorites({ name, url });
    }
  };

  // Function to copy emoji to clipboard
  const handleCopyClick = () => {
    if (url) {
      navigator.clipboard.writeText(url).then(() => {
        alert('Emoji copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Emoji Detail</h2>
      {url ? (
        <div className="flex py-5 px-5">
          <img src={url} alt={name} width="64" height="64" />
          <p className="text-2xl ml-20 font-bold">Name: {name}</p>
          <div className="mt-10 -ml-32">
            <button onClick={handleFavoriteClick} className="bg-slate-200 px-4 py-2 mr-2">
              Favorite
            </button>
            <button onClick={handleCopyClick} className="bg-slate-200 px-4 py-2">
              Copy to Clipboard
            </button>
          </div>
        </div>
      ) : (
        <p>No emoji data available</p>
      )}
    </div>
  );
}

export default EmojiDetail;
