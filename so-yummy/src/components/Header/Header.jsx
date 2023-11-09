import { useNavigate } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import logo from "../../icons/cultery.svg";
import UserPanel from "../UserPanel/UserPanel.jsx";

export const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="header">
			<img
				src={logo}
				className="logo"
				alt="logo"
				onClick={() => {
					navigate("/home");
				}}
			/>
			<Navigation />
			<UserPanel />
		</div>
	);
};

export default Header;
