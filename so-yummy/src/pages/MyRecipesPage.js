import { Helmet } from "react-helmet";
import MyRecipes from "../components/MyRecipes/MyRecipes.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./MyRecipesPage.css";

export default function Register() {
	return (
		<div className="myRecipesPageBg">
			<Helmet>
				<title>My recipes</title>
			</Helmet>
			<Header />
			<MyRecipes />
			<Footer />
		</div>
	);
}
