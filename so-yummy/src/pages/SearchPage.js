import { Helmet } from "react-helmet";
import "./Categories.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Search from "../components/Search/Search.jsx";
import SearchedRecipes from "../components/SearchedRecipes/SearchedRecipes.jsx";
import { searchRecipe } from "../redux/recipes/slice.js";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function SearchPage() {
	window.scrollTo(0, 0);
	const [searchParams] = useSearchParams();
	const dispatch = useDispatch();
	useEffect(() => {
		const name = searchParams.get("name");
		dispatch(searchRecipe(name));
	}, [dispatch, searchParams]);
	return (
		<div className="categoriesBackground">
			<Helmet>
				<title>Search</title>
			</Helmet>
			<Header />
			<Search />
			<SearchedRecipes />
			<Footer />
		</div>
	);
}
