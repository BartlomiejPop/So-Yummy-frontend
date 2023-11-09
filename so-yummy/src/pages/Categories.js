import { Helmet } from "react-helmet";
import "./Categories.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CategoriesNavigation from "../components/CategoriesNavigation/CategoriesNavigation.jsx";
import CategoriesResults from "../components/CategoriesResults/CategoriesResults.jsx";

export default function Register() {
	window.scrollTo(0, 0);
	return (
		<div className="categoriesBackground">
			<Helmet>
				<title>Categories</title>
			</Helmet>
			<Header />
			<h1 className="CategoriesTitle">Categories</h1>
			<CategoriesNavigation />
			<CategoriesResults />
			<Footer />
		</div>
	);
}
