import "./CategoriesNavigation.css";
import { useSearchParams } from "react-router-dom";

export const CategoriesNavigation = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const category = searchParams.get("recipes") || "breakfast";

	return (
		<div className="categoriesNavigation">
			<ul className="categoriesNavigationlist">
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "breakfast" })}
					style={
						category === "breakfast"
							? { color: "#8baa36", borderBottom: "2px solid #8baa36" }
							: {}
					}>
					Breakfast
				</li>

				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "miscellaneous" })}
					style={
						category === "miscellaneous"
							? { color: "#8baa36", borderBottom: "3px solid #8baa36" }
							: {}
					}>
					Miscellaneous
				</li>
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "chicken" })}
					style={
						category === "chicken"
							? { color: "#8baa36", borderBottom: "3px solid #8baa36" }
							: {}
					}>
					Chicken
				</li>
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "desserts" })}
					style={
						category === "desserts"
							? { color: "#8baa36", borderBottom: "3px solid #8baa36" }
							: {}
					}>
					Desserts
				</li>
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "pasta" })}
					style={
						category === "pasta"
							? { color: "#8baa36", borderBottom: "3px solid #8baa36" }
							: {}
					}>
					Pasta
				</li>
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "seafood" })}
					style={
						category === "seafood"
							? { color: "#8baa36", borderBottom: "3px solid #8baa36" }
							: {}
					}>
					Seafood
				</li>
				<li
					className="categoriesNavigationItem"
					onClick={() => setSearchParams({ recipes: "beef" })}
					style={
						category === "beef"
							? { color: "#8baa36", borderBottom: "3px solid #8baa36" }
							: {}
					}>
					Beef
				</li>
			</ul>
		</div>
	);
};

export default CategoriesNavigation;
