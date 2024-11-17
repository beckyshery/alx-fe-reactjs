import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail'; // Import your RecipeDetail component
import SearchBar from './SearchBar';
import AddRecipeForm from './AddRecipeForm'; // Import your AddRecipeForm component

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route path="/recipes/:id" element={<RecipeDetail />} /> {/* Route for recipe details */}
          <Route path="/" element={<RecipeList />} /> {/* Default route for recipe list */}
          <Route path="/add" element={<AddRecipeForm />} /> {/* Route for adding a new recipe */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;