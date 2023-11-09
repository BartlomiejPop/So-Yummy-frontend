import { Helmet } from "react-helmet";
import Recipe from "../components/Recipe/Recipe.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./Recipes.css";

export default function Register() {
	window.scrollTo(0, 0);
	return (
		<div>
			<Helmet>
				<title>Recipe</title>
			</Helmet>
			<div className="recipeBg">
				<Header />
				<Recipe />
			</div>
			<Footer />
		</div>
	);
}
