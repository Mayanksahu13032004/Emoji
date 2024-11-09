import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate } from 'react-router-dom';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Layout from './Layout.jsx';
import About from './components/About/About.jsx';
import Flag from './components/Flag/Flag.jsx';
import Activities from './components/Activities/Activities.jsx';
import AnimalNature from './components/AnimalNature/AnimalNature.jsx';
import FavoriteComponent from './components/Favourite/Favourite.jsx';
import FoodDrink from './components/FoodDrink/FoodDrink.jsx';
import Objects from './components/Objects/Objects.jsx';
import People from './components/People/People.jsx';
import Smiley from './components/Smiley/Smiley.jsx';
import Symbols from './components/Symbols/Symbols.jsx';
import TravelPlace from './components/TravelPlace/TravelPlace.jsx';
import EmojiDetail from './components/EmojiDetail/EmojiDetail.jsx';
import { FavoritesProvider } from './components/FavoritesContext/FavoritesContext.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/smiley" />} />
      <Route path="flag" element={<Flag />} />
      <Route path="about" element={<About />} />
      <Route path="activities" element={<Activities />} />
      <Route path="animal" element={<AnimalNature />} />
      <Route path="favourite" element={<FavoriteComponent />} />
      <Route path="food" element={<FoodDrink />} />
      <Route path="objects" element={<Objects />} />
      <Route path="people" element={<People />} />
      <Route path="smiley" element={<Smiley />} />
      <Route path="emoji/:name" element={<EmojiDetail />} />
      <Route path="favorites" element={<FavoriteComponent />} />
      <Route path="symbols" element={<Symbols />} />
      <Route path="travel" element={<TravelPlace />} />
      {/* Catch-all route */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </React.StrictMode>
);
