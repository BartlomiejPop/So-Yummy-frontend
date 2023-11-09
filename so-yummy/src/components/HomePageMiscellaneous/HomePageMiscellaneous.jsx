import arrowRight from "../../icons/arrow-right.svg";
import { useSelector } from "react-redux";
import { selectMiscellaneous } from "../../redux/recipes/selectors.js";
import { useNavigate } from "react-router";

export const HomePageMiscellaneous = () => {
	const recipes = useSelector(selectMiscellaneous);
	const navigate = useNavigate();

	return (
		<div className="HomePageRecipes">
			<h2 className="HomePageRecipesTitle">Miscellaneous</h2>
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
					navigate("/categories?recipes=miscellaneous");
				}}>
				See more
				<img alt="arrowIcon" src={arrowRight} />
			</button>
		</div>
	);
};

export default HomePageMiscellaneous;
