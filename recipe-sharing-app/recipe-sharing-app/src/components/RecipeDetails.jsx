// src/components/RecipeDetails.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore.jsx';
import EditRecipeForm from './EditRecipeForm.jsx';
import DeleteRecipeButton from './DeleteRecipeButton.jsx/index.js';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
};

export default RecipeDetails;
