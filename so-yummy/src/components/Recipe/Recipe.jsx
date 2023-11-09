import "./Recipe.css";
import { useParams } from "react-router-dom";
import clockIcon from "../../icons/clock.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/recipes/operations";
import { useState } from "react";
import { addToFavorites } from "../../redux/recipes/operations";
import Notiflix from "notiflix";
import Loader from "../Loader/Loader";
import { selectIsLoading } from "../../redux/recipes/selectors";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Recipe = () => {
	const isLoading = useSelector(selectIsLoading);
	const { title } = useParams();
	const dispatch = useDispatch();
	const [recipeEl, setRecipeEl] = useState(null);

	useEffect(() => {
		const fetchRecipe = async () => {
			try {
				const recipeData = await dispatch(getRecipe(title));
				setRecipeEl(recipeData);
			} catch (error) {
				Notiflix.Notify.failure(error);
			}
		};
		fetchRecipe();
	}, [dispatch, title]);

	if (!recipeEl) {
		return null;
	}

	const handleAddToFavorites = (recipe) => {
		dispatch(addToFavorites(recipe));
	};

	return (
		<div className="recipe">
			{isLoading && <Loader />}
			<h1 className="recipeTitle">{recipeEl.title}</h1>
			<div className="recipeContentBox">
				<div className="recipeBox">
					<span className="recipeBoxName">About</span>
					<p className="recipeAbout">{recipeEl.about}</p>
				</div>
				<div className="recipeBox">
					<span className="recipeBoxName">Ingredients</span>
					<p className="recipeIngredients">{recipeEl.ingredients}</p>
				</div>
				<div className="recipeBox">
					<span className="recipeBoxName">Recipe</span>
					<p className="recipeRecipe">{recipeEl.recipe}</p>
				</div>
			</div>
			<button
				className="recipeFavButton"
				onClick={() => {
					handleAddToFavorites(recipeEl);
				}}>
				Add to favorites
			</button>
			<div className="recipeTimeBox">
				<img alt="timeIcon" src={clockIcon} />
				<span className="recipeTime">{recipeEl.time}</span>
			</div>
		</div>
	);
};

export default Recipe;
