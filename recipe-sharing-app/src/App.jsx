import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Wrap your app with Router */}
      <div>
        <h1>Recipe App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Route for RecipeList */}
          <Route path="/add" element={<AddRecipeForm />} /> {/* Route for AddRecipeForm */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;