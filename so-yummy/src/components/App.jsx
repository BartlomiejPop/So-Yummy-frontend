import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";
import { useAuth } from "../hooks/useAuth.js";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute.js";
import { RestrictedRoute } from "./RestrictedRoute.js";
import Login from "../pages/Login";

const WelcomePage = lazy(() => import("../pages/WelcomePage"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const HomePage = lazy(() => import("../pages/HomePage"));
const CategoriesPage = lazy(() => import("../pages/Categories.js"));
const AddRecipesPage = lazy(() => import("../pages/AddRecipesPage.js"));
const MyRecipesPage = lazy(() => import("../pages/MyRecipesPage.js"));
const RecipePage = lazy(() => import("../pages/RecipePage.js"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage.js"));
const SearchPage = lazy(() => import("../pages/SearchPage.js"));

export const App = () => {
	const { isRefreshing } = useAuth();

	return isRefreshing ? (
		<b>Refreshing user...</b>
	) : (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<WelcomePage />} />

				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element=<LoginPage /> />
				<Route
					path="/home"
					element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
				/>
				<Route
					path="/categories"
					element={
						<PrivateRoute redirectTo="/" component={<CategoriesPage />} />
					}
				/>
				<Route
					path="/addRecipes"
					element={
						<PrivateRoute redirectTo="/" component={<AddRecipesPage />} />
					}
				/>
				<Route
					path="/myRecipes"
					element={
						<PrivateRoute redirectTo="/" component={<MyRecipesPage />} />
					}
				/>
				<Route
					path="/recipe/:title"
					element={<PrivateRoute redirectTo="/" component={<RecipePage />} />}
				/>
				<Route
					path="/favorites"
					element={
						<PrivateRoute redirectTo="/" component={<FavoritesPage />} />
					}
				/>
				<Route
					path="/searchRecipes"
					element={<PrivateRoute redirectTo="/" component={<SearchPage />} />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
