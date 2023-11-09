import "./CategoriesResults.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategory } from "../../redux/recipes/selectors";

export const CategoriesResults = () => {
	const navigate = useNavigate();
	const categories = useSelector(selectCategory);
	const [searchParams] = useSearchParams();

	const recipesCategory = searchParams.get("recipes") || "breakfast";

	const recipes = categories && categories[recipesCategory];
	return (
		<div className="CategoriesResults">
			<span className="CategoriesResultTitle">{recipesCategory}</span>
			<ul className="CategoriesResultList">
				{recipes &&
					recipes.map((el, index) => (
						<li className="CategoriesResultItem" key={index}>
							<img
								src={el.img}
								alt={el.name}
								onClick={() => {
									navigate(`/recipe/${el.title}`);
								}}
							/>
						</li>
					))}
			</ul>
		</div>
	);
};

export default CategoriesResults;
