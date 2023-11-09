import { useSelector } from "react-redux";
import { selectSearchedRecipes } from "../../redux/recipes/selectors.js";
import { useNavigate } from "react-router";
import "./SearchedRecipes.css";
import placeholder from "../../images/ownRecipeImg.jpg";

export const SearchedRecipes = () => {
	const recipes = useSelector(selectSearchedRecipes);
	const navigate = useNavigate();

	return (
		<div className="HomePageRecipes">
			<ul className="HomeRecipesList">
				{recipes.map((el, index) => (
					<li className="HomeRecipesListItem" key={index}>
						<img
							src={el.picture || el.img || placeholder}
							alt={`Recipe ${index + 1}`}
							onClick={() => {
								navigate(`/recipe/${el.title}`);
							}}
							className="searchedRecipeImg"
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SearchedRecipes;
