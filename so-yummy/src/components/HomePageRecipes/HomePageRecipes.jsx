import "./HomePageRecipes.css";
import HomePageBreakfast from "../HomePageBreakfast/HomePageBreakfast";
import HomePageMiscellaneous from "../HomePageMiscellaneous/HomePageMiscellaneous.jsx";
import HomePageChicken from "../HomePageChicken/HomePageChicken.jsx";
import HomePageDesserts from "../HomePageDesserts/HomePageDesserts.jsx";

export const HomePageRecipes = () => {
	return (
		<div className="HomePageRecipesBg">
			<HomePageBreakfast />
			<HomePageMiscellaneous />
			<HomePageChicken />
			<HomePageDesserts />
		</div>
	);
};

export default HomePageRecipes;
