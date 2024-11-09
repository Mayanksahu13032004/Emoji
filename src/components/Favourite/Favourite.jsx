// FavoriteComponent.js
import React from 'react';
// import { useFavorites } from './FavoritesContext';
import { useFavorites } from '../FavoritesContext/FavoritesContext';

function FavoriteComponent() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h2 className="text-2xl font-bold">Favorites</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((emoji, index) => (
            <li key={index} className="flex py-2">
              <img src={emoji.url} alt={emoji.name} width="32" height="32" />
              <p className="ml-4">{emoji.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite emojis</p>
      )}
    </div>
  );
}

export default FavoriteComponent;
