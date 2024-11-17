// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipe-sharing-app/src/components/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
