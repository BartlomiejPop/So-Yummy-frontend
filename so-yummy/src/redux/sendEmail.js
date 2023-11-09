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

export const sendEmail = createAsyncThunk(
	"sendEmail",
	async (email, thunkAPI) => {
		const state = thunkAPI.getState();

		try {
			setAuthToken(state.auth.token);
			const response = await axios.post(`http://localhost:3000/sendEmail`, {
				email: email,
			});
			Notiflix.Notify.success("Email sent");

			return response.data;
		} catch (e) {
			Notiflix.Notify.failure("Error: ", e);
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
