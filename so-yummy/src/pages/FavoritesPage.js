import { Helmet } from "react-helmet";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./MyRecipesPage.css";
import FavoriteRecipes from "../components/FavoriteRecipes/FavoriteRecipes.jsx";

export default function FavoritesPage() {
	window.scrollTo(0, 0);
	return (
		<div className="myRecipesPageBg">
			<Helmet>
				<title>Favorites</title>
			</Helmet>
			<Header />

			<FavoriteRecipes />
			<Footer />
		</div>
	);
}
