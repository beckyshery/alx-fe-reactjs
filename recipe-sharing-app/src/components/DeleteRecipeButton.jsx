import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDelete = () => {
    deleteRecipe(recipeId);
    onDelete(); // Call onDelete to navigate back or update the UI
    navigate(-1); // Navigate back to the previous page (or you can specify a route)
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;