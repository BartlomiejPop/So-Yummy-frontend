import { useSelector } from "react-redux";
import {
	selectName,
	selectIsLoggedIn,
	selectIsRefreshing,
} from "../redux/auth/selectors.js";

export const useAuth = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const isRefreshing = useSelector(selectIsRefreshing);
	const name = useSelector(selectName);

	return {
		isLoggedIn,
		isRefreshing,
		name,
	};
};
