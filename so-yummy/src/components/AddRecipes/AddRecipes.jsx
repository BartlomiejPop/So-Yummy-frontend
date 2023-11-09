import "./AddRecipes.css";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addRecipe, addImage } from "../../redux/recipes/operations.js";
import placeholder from "../../icons/picturePlaceholder.svg";
import Loader from "../Loader/Loader.jsx";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/recipes/selectors.js";

export default function AddRecipes() {
	window.scrollTo(0, 0);
	const dispatch = useDispatch();
	const fileInputRef = useRef(null);
	const imageRef = useRef(null);
	const isLoading = useSelector(selectIsLoading);

	const [img, setImg] = useState("");
	const [formData, setFormData] = useState({
		img: "",
		title: "",
		about: "",
		category: "",
		time: "",
		ingredients: "",
		recipe: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const title = form.elements.title.value;
		const about = form.elements.about.value;
		const category = form.elements.category.value;
		const time = form.elements.time.value;
		const ingredients = form.elements.ingredients.value;
		const recipe = form.elements.recipe.value;

		dispatch(
			addRecipe({
				img: img,
				title: title,
				about: about,
				category: category,
				time: time,
				ingredients: ingredients,
				recipe: recipe,
			})
		);
		form.reset();
	};

	const handleImageClick = () => {
		fileInputRef.current.click();
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleFileChange = async (e) => {
		const isImageFile = (file) => {
			const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
			const fileExtension = file.name.split(".").pop().toLowerCase();
			return allowedExtensions.includes(fileExtension);
		};

		const selectedFile = e.target.files[0];
		if (selectedFile && isImageFile(selectedFile)) {
			const formData = new FormData();
			formData.append("file", selectedFile);

			const response = await dispatch(addImage(formData));
			if (response) {
				setImg(response.payload.data.avatarURL);
			}

			const reader = new FileReader();
			reader.onloadend = () => {
				const imageSrc = reader.result;
				imageRef.current.src = imageSrc;
			};
			reader.readAsDataURL(selectedFile);
		} else {
			alert("Please select a valid image file (jpg, jpeg, png, gif).");
			e.target.value = null;
		}
	};

	return (
		<div>
			{isLoading && <Loader />}
			<div className="addRecipes">
				<h1 className="addRecipesTitle"> ADD RECIPE</h1>
				<div className="addRecipesWrapper">
					<div className="addRecipesDescription">
						<form className="addRecipesForm" onSubmit={handleSubmit}>
							<div className="addRecipesImage" onClick={handleImageClick}>
								<img
									alt="imagePlaceholder"
									src={placeholder}
									className="addRecipesIcon"
									ref={imageRef}
								/>
								<input
									type="file"
									name="image"
									ref={fileInputRef}
									style={{ display: "none" }}
									onChange={handleFileChange}
								/>
							</div>
							<div className="addRecipesInputBox">
								<input
									required
									name="title"
									className="formItem"
									placeholder="Entern recipe title"
									value={formData.name}
									onChange={handleInputChange}
								/>
								<input
									required
									name="about"
									className="formItem"
									placeholder="Enter about recipe"
									value={formData.about}
									onChange={handleInputChange}
								/>
								<input
									required
									name="category"
									className="formItem"
									placeholder="Enter category"
									value={formData.category}
									onChange={handleInputChange}
								/>
								<input
									name="time"
									className="formItem"
									placeholder="Preparation time"
									value={formData.time}
									onChange={handleInputChange}
								/>
							</div>
							<div className="addRecipesTextareaBox">
								<div className="addRecipesTextareaWrapper">
									<textarea
										name="ingredients"
										placeholder="Enter ingredients"
										className="addRecipesTextarea"
										value={formData.ingredients}
										onChange={handleInputChange}></textarea>
									<textarea
										name="recipe"
										placeholder="Enter recipe"
										className="addRecipesTextarea"
										value={formData.recipe}
										onChange={handleInputChange}></textarea>
								</div>
								<div className="addRecipesButtonBox">
									<button className="addRecipesButton">Add</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
