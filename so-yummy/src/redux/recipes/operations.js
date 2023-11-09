import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
};

export const addRecipe = createAsyncThunk(
	"addRecipe",
	async (recipe, thunkAPI) => {
		const state = thunkAPI.getState();
		const recipes = state.recipes.myRecipes;
		const existingRecipe = recipes.find(
			(existingRecipe) => existingRecipe.title === recipe.title
		);

		if (existingRecipe) {
			alert(`${existingRecipe.title} is already in your recipes`);
			return thunkAPI.rejectWithValue("This recipe already exists");
		}
		try {
			setAuthToken(state.auth.token);
			const response = await axios.post(
				"http://localhost:3000/addRecipe",
				recipe
			);
			Notiflix.Notify.success("Recipe added");
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const addToFavorites = createAsyncThunk(
	"addToFavorites",
	async (recipe, thunkAPI) => {
		const state = thunkAPI.getState();
		const favRecipes = state.recipes.favoriteRecipes;
		const existingRecipe = favRecipes.find(
			(existingRecipe) => existingRecipe.title === recipe.title
		);

		if (existingRecipe) {
			alert(`${existingRecipe.title} is already in your favorites`);
			return thunkAPI.rejectWithValue("This recipe is already in favorites");
		}
		try {
			setAuthToken(state.auth.token);
			const response = await axios.post(
				`http://localhost:3000/addToFavorites`,
				recipe
			);
			Notiflix.Notify.success("Recipe added to favorites");
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const getMyRecipes = createAsyncThunk(
	"getMyRecipes",
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		try {
			setAuthToken(state.auth.token);
			const response = await axios.get("http://localhost:3000/myRecipes");
			const myRecipes = response.data.data;
			return myRecipes;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const deleteRecipe = createAsyncThunk(
	"deleteRecipe",
	async (recipeId, thunkAPI) => {
		const state = thunkAPI.getState();
		try {
			setAuthToken(state.auth.token);
			const response = await axios.delete(
				`http://localhost:3000/remove/${recipeId}`
			);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const addImage = createAsyncThunk("addImage", async (file, thunkAPI) => {
	const state = thunkAPI.getState();
	try {
		setAuthToken(state.auth.token);
		const response = await axios.post(`http://localhost:3000/addImage`, file);
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});

export const getRecipe = (title) => (dispatch, getState) => {
	const state = getState();
	const recipes = state.recipes.myRecipes;
	const initialRecipes = state.recipes.initialRecipes;
	recipes.find((el) => el.title === title);
	const breakfast = initialRecipes.breakfast.find((el) => el.title === title);
	const miscellaneous = initialRecipes.miscellaneous.find(
		(el) => el.title === title
	);
	const chicken = initialRecipes.chicken.find((el) => el.title === title);
	const desserts = initialRecipes.desserts.find((el) => el.title === title);
	const pasta = initialRecipes.pasta.find((el) => el.title === title);
	const seafood = initialRecipes.seafood.find((el) => el.title === title);
	const beef = initialRecipes.beef.find((el) => el.title === title);
	const recipe =
		breakfast ||
		miscellaneous ||
		desserts ||
		pasta ||
		seafood ||
		beef ||
		chicken ||
		recipes.find((el) => el.title === title);
	return recipe;
};

export const getFavorites = createAsyncThunk(
	"getFavorites",
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		try {
			setAuthToken(state.auth.token);
			const response = await axios.get("http://localhost:3000/favorites");
			const myRecipes = response.data.data;

			return myRecipes;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const deleteFromFavorites = createAsyncThunk(
	"deleteFromFavorites",
	async (recipeId, thunkAPI) => {
		const state = thunkAPI.getState();
		try {
			setAuthToken(state.auth.token);
			const response = await axios.patch(
				`http://localhost:3000/deleteFromFavorites/${recipeId}`
			);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
