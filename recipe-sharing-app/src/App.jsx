import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import SearchBar from './SearchBar';
import AddRecipeForm from './AddRecipeForm';
import FavoritesList from './FavoritesList'; // Import FavoritesList
import RecommendationsList from './RecommendationsList'; // Import RecommendationsList

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} /> {/* Route for favorites */}
          <Route path="/recommendations" element={<RecommendationsList />} /> {/* Route for recommendations */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;