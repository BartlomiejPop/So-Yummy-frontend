import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "./operations.js";

const initialState = {
	user: { email: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			state.user = action.payload;
			state.isLoggedIn = true;
		},
		loginUserError: (state, action) => {
			state.user = null;
			state.isLoggedIn = false;
		},
		setUsername: (state, action) => {
			state.user = action.payload;
		},
	},
	extraReducers: {
		[register.fulfilled](state, action) {
			state.error = null;
		},
		[register.rejected](state, action) {
			state.error = action.payload;
		},
		[login.fulfilled](state, action) {
			state.user = action.payload.data.user;
			state.token = action.payload.data.token;
			state.isLoggedIn = true;
			state.error = null;
		},
		[login.rejected](state, action) {
			state.user = null;
			state.error = action.payload;
			state.token = null;
			state.isLoggedIn = false;
		},
	},
});

// export const { registerUser, setUsername } = authSlice.actions;
export const { loginUser, loginUserError, setUsername } = authSlice.actions;
// export default { loginUser };
export const authReducer = authSlice.reducer;
// export default userSlice.reducers;
