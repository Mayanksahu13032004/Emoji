// FavoritesContext.js
import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}


export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (emoji) => {
    setFavorites((prevFavorites) => [...prevFavorites, emoji]);
  };

const removeFromFavorites =(emojiname)=>{
  setFavorites((prevFavorites)=>
  prevFavorites.filter((emoji)=>emoji.name!==emojiname)
  )
}


  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites ,removeFromFavorites}}>
      {children}
    </FavoritesContext.Provider>
  );
}
