import Notiflix from "notiflix";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://sleepy-chamber-39700-694ff1ad8c4b.herokuapp.com";

// const baseURL = "http://localhost:3000";

export const register = createAsyncThunk(
	"register",
	async (userData, thunkAPI) => {
		try {
			const response = await axios.post(`${baseURL}/register`, userData);
			return response.data;
		} catch (error) {
			if (error.response && error.response.status === 409) {
				Notiflix.Notify.failure(
					"Email already exists. Please use a different email."
				);
			} else {
				console.error(error);
				Notiflix.Notify.failure("Registration failed. Please try again.");
			}
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const login = createAsyncThunk("login", async (userData, thunkAPI) => {
	try {
		const response = await axios.post(`${baseURL}/login`, userData);
		return response.data;
	} catch (error) {
		if (error.response && error.response.status === 401) {
			Notiflix.Notify.failure(" Email or password is incorrect");
		} else {
			console.log(error);
			Notiflix.Notify.failure("Login error. Try again.");
		}
		return thunkAPI.rejectWithValue(error.message);
	}
});
