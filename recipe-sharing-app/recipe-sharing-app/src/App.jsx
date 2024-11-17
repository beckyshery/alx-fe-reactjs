// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from '../../RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
