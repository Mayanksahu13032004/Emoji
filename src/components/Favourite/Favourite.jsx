import React from 'react';
import { useFavorites } from '../FavoritesContext/FavoritesContext';
import { useNavigate } from 'react-router-dom';
function FavoriteComponent() {
  const { favorites, removeFromFavorites } = useFavorites();
const navigate=useNavigate();
  // Filter out duplicate emojis by name
  const uniqueFavorites = favorites.filter(
    (emoji, index, self) =>
      index === self.findIndex((e) => e.name === emoji.name)
  );

 
  return (
    <div>
      <h2 className="text-2xl font-bold">Favorites</h2>
      {uniqueFavorites.length > 0 ? (
        <ul>
          {uniqueFavorites.map((emoji, index) => (
            <li key={index} className="flex py-2 items-center">
              <img src={emoji.url} alt={emoji.name} width="32" height="32" />
              <p className="ml-4">{emoji.name}</p>
              <button
                onClick={() => removeFromFavorites(emoji.name)}
                className="ml-6 bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
             
              
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-xl font-semibold'>No favorite emojis</p>
      )}
    </div>
  );
}



export default FavoriteComponent;
