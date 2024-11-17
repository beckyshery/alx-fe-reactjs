import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    onDelete(); // Call onDelete to navigate back or update the UI