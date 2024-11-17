import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === parseInt(id)));

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} onDelete={() => history.push('/')} />
    </div>
  );
};

export default RecipeDetails;