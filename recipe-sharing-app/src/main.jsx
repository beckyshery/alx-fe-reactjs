import React from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import { useRecipeStore } from './recipeStore';

const App = () => {
  const recipes = useRecipeStore(state => state.recipes);

  // Load recipes into the store if not already loaded
  React.useEffect(() => {
    if (recipes.length === 0) {
      // Fetch or initialize recipes here
      // Example: setRecipes(initialRecipes);
    }
  }, [recipes]);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;