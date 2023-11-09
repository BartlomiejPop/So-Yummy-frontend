import "./OtherCategories.css";
import { useNavigate } from "react-router-dom";

export const OtherCategories = () => {
	const navigate = useNavigate();

	return (
		<div className="otherCategories">
			<button
				className="otherCategoriesButton"
				onClick={() => {
					navigate("/categories");
				}}>
				Other Categories
			</button>
		</div>
	);
};

export default OtherCategories;
