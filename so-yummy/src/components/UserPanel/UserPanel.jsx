import "./UserPanel.css";
import arrowRight from "../../icons/arrow-right.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors.js";
import { useNavigate } from "react-router";

export const UserPanel = () => {
	const name = useSelector(selectName);
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/");
	};

	return (
		<div className="userPanel">
			<span className="userPanelName">{name}</span>
			<button className="userPanelButton" onClick={handleClick}>
				Log out
				<img alt="arrowIcon" src={arrowRight} />
			</button>
		</div>
	);
};

export default UserPanel;
