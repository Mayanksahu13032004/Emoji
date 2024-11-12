import React from 'react';
import { useFavorites } from '../FavoritesContext/FavoritesContext';
import { useNavigate } from 'react-router-dom';

function FavoriteComponent() {
  const { favorites, removeFromFavorites } = useFavorites();
  const navigate = useNavigate();

  // Filter out duplicate emojis by name
  const uniqueFavorites = favorites.filter(
    (emoji, index, self) =>
      index === self.findIndex((e) => e.name === emoji.name)
  );

  // Debugging to check the data structure
  console.log('Favorites:', favorites);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      {uniqueFavorites.length > 0 ? (
        <ul className="space-y-4">
          {uniqueFavorites.map((emoji, index) => (
            <li key={index} className="flex items-center space-x-4">
              {/* Render emoji as text instead of image */}
              <p className="text-4xl">{emoji.url}</p>
              <p className="text-lg font-medium">{emoji.name}</p>
              <button
                onClick={() => removeFromFavorites(emoji.name)}
                className="ml-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl font-semibold">No favorite emojis</p>
      )}
    </div>
  );
}

export default FavoriteComponent;
