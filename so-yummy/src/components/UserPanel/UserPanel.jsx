import "./UserPanel.css";
import arrowRight from "../../icons/arrow-right.svg";
import { useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors.js";

export const UserPanel = () => {
	const name = useSelector(selectName);

	const logout = () => {
		window.location.reload();
	};

	return (
		<div className="userPanel">
			<span className="userPanelName">{name}</span>
			<button className="userPanelButton" onClick={logout}>
				Log out
				<img alt="arrowIcon" src={arrowRight} />
			</button>
		</div>
	);
};

export default UserPanel;
