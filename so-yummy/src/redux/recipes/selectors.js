export const selectBreakfast = (state) =>
	state.recipes.initialRecipes.breakfast;

export const selectMiscellaneous = (state) =>
	state.recipes.initialRecipes.miscellaneous;

export const selectChicken = (state) => state.recipes.initialRecipes.chicken;

export const selectDesserts = (state) => state.recipes.initialRecipes.desserts;

export const selectCategory = (state) => state.recipes.initialRecipes;

export const selectMyRecipes = (state) => state.recipes.myRecipes;

export const selectFavorites = (state) => state.recipes.favoriteRecipes;

export const selectSearchedRecipes = (state) => state.recipes.searchedRecipes;

export const selectIsLoading = (state) => state.recipes.isLoading;
