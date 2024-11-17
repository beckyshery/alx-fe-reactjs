import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',  // Initialize searchTerm
  filteredRecipes: [],  // Initialize filteredRecipes
  addRecipe: (recipe) => set(state => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  setSearchTerm: (term) => {
    set(state => {
      const filtered = state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    });
  },
}));

export { useRecipeStore };