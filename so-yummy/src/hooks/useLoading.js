import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/recipes/selectors.js";

export const useLoading = () => {
	const isLoading = useSelector(selectIsLoading);

	return {
		isLoading,
	};
};
