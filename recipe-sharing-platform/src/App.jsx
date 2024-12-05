import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        {/* Tailwind CSS Test Message */}
        <div className="text-blue-500 text-center mt-10">
          Tailwind CSS is working!
        </div>
        <div>
      <AddRecipeForm />
    </div>

        {/* Routes for HomePage and RecipeDetail */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
