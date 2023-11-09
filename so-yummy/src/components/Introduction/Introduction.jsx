import "./Introduction.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import Notiflix from "notiflix";

export const Introduction = () => {
	const navigate = useNavigate();
	const [value, setValue] = useState("");

	const handleSearch = async (e) => {
		e.preventDefault();
		navigate(`/searchRecipes?name=${value}`);
		Notiflix.Notify.success("Logged in");
	};

	const handleInputChange = (e) => {
		const { value } = e.target;
		setValue(value);
	};

	return (
		<div className="introduction">
			<h1 className="title">
				<span className="titleGreen">So</span>Yummy
			</h1>
			<form onSubmit={handleSearch}>
				<p className="description">
					"What to cook?" is not only a recipe app, it is, in fact, your
					cookbook. You can add your own recipes to save them for the future.
				</p>
				<div className="searchField">
					<input
						required=""
						value={value.searchValue}
						onChange={handleInputChange}
						name="search"
						placeholder="Search by name"
						className="searchFieldInput"
					/>
					<button className="searchFieldButton">Search</button>
				</div>
			</form>
		</div>
	);
};

export default Introduction;
