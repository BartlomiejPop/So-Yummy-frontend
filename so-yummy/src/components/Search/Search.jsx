import { useDispatch } from "react-redux";
import "./Search.css";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { searchRecipe } from "../../redux/recipes/slice.js";

export const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const name = searchParams.get("name");
	const [value, setValue] = useState(name);
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		const { value } = e.target;
		setSearchParams({ name: value });
		setValue(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(searchRecipe(name));
	};

	return (
		<div className="search">
			<form onSubmit={handleSubmit} className="searchField">
				<input
					required=""
					value={value}
					onChange={handleInputChange}
					name="search"
					placeholder="Search by name"
					className="searchFieldInput"
				/>
				<button className="searchFieldButton">Search</button>
			</form>
		</div>
	);
};

export default Search;
