import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectFavorites } from "../../redux/recipes/selectors";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/recipes/operations.js";
import "./FavoriteRecipes.css";
import trashIcon from "../../icons/trash.svg";
import { deleteFromFavorites } from "../../redux/recipes/operations.js";
import { getMyRecipes } from "../../redux/recipes/operations.js";
import img from "../../images/ownRecipeImg.jpg";
import { selectIsLoading } from "../../redux/recipes/selectors";
import Loader from "../Loader/Loader.jsx";

export const MyRecipes = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const recipes = useSelector(selectFavorites);
	const isLoading = useSelector(selectIsLoading);
	useEffect(() => {
		dispatch(getFavorites());
	}, [dispatch]);

	const handleDelete = (id) => {
		dispatch(deleteFromFavorites(id));
		dispatch(getMyRecipes());
	};

	return (
		<div>
			{isLoading && <Loader />}
			<h1 className="myRecipesTitle">Favorites</h1>
			<ul className="myRecipesList">
				{recipes.map((el, index) => (
					<li className="myRecipesItem" key={index}>
						<img
							className="myRecipesImage"
							src={el.img || el.picture || img}
							alt={`Recipe ${index + 1}`}
						/>
						<div className="myRecipesContent">
							<span className="myRecipesItemTitle">{el.title}</span>
							<p>{el.about}</p>
							<span>{el.time}</span>
						</div>
						<div className="myRecipesButtonBox">
							<button
								className="myRecipesButton"
								onClick={() => {
									handleDelete(el._id);
								}}>
								<img alt="trashIcon" src={trashIcon} />
							</button>
							<button
								className="myRecipesButton"
								onClick={() => {
									navigate(`/recipe/${el.title}`);
								}}>
								See recipe
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MyRecipes;
