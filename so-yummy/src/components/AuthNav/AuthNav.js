import { NavLink } from "react-router-dom";
import "./AuthNav.css";
import background from "../../images/welcomePageBg.jpg";
import culteryIcon from "../../icons/cultery.svg";

export const AuthNav = () => {
	return (
		<div className="authNavWrapper">
			<img alt="bg" className="background" src={background} />
			<div className="contentWrapper">
				<img alt="culteryIcon" src={culteryIcon} />
				<h2>Welcome to the app!</h2>
				<p className="appDescription">
					This app offers more than just a collection of recipes - it is
					designed to be your very own digital cookbook. You can easily save and
					retrieve your own recipes at any time.
				</p>
				<div className="buttonsWrapper">
					<NavLink to="/register">
						<button className="buttonGreen">Register</button>
					</NavLink>
					<NavLink to="/login">
						<button className="buttonTransparent">Sign In</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};
