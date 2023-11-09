import arrowRight from "../../icons/arrow-right.svg";
import { useSelector } from "react-redux";
import { selectDesserts } from "../../redux/recipes/selectors.js";
import { useNavigate } from "react-router";

export const HomePageDesserts = () => {
	const recipes = useSelector(selectDesserts);
	const navigate = useNavigate();

	return (
		<div className="HomePageRecipes">
			<h2 className="HomePageRecipesTitle">Desserts</h2>
			<ul className="HomeRecipesList">
				{recipes.slice(0, 4).map((el, index) => (
					<li className="HomeRecipesListItem" key={index}>
						<img
							src={el.img}
							alt={`Recipe ${index + 1}`}
							onClick={() => {
								navigate(`/recipe/${el.title}`);
							}}
						/>
					</li>
				))}
			</ul>
			<button
				className="HomePageRecipesButton"
				onClick={() => {
					navigate("/categories?recipes=desserts");
				}}>
				See more
				<img alt="arrowIcon" src={arrowRight} />
			</button>
		</div>
	);
};

export default HomePageDesserts;
