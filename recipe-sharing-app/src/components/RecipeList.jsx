import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link> {/* Link to recipe details */}
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;