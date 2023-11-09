import emailIcon from "../../icons/email.svg";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import logo from "../../icons/cultery.svg";
import { sendEmail } from "../../redux/sendEmail.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Notiflix from "notiflix";

export const Footer = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");

	const validateEmail = (email) => {
		const regex = /\S+@\S+\.\S+/;
		return regex.test(email);
	};

	const handleInputChange = (e) => {
		const { value } = e.target;
		setEmail(value);
	};

	const handleClick = async (e) => {
		e.preventDefault();
		validateEmail(email)
			? dispatch(sendEmail(email))
			: Notiflix.Notify.failure("incorrect email address");
		setEmail("");
	};

	return (
		<div className="footer">
			<div className="footerBoxesWrapper">
				<div className="footerDescriptionBox">
					<div className="footerLogoField">
						<img
							alt="logo"
							className="footerLogo"
							src={logo}
							onClick={() => {
								navigate("/home");
							}}
						/>
						<p className="footerTitle">So Yummy</p>
					</div>
					<ul className="footerDescriptionList">
						<li key="footerList1">
							Database of recipes that can be saved in favorites
						</li>
						<li key="footerList2">Flexible search for desired recipes</li>
						<li key="footerList3">
							Ability to add your own recipes with photos
						</li>
						<li key="footerList4">Convenient and easy to use</li>
					</ul>
				</div>
				<div className="footerNewsletterBox">
					<span className="newsletterText">Subscribe to the Newsletter</span>
					<p>
						This is just an education project. No emails will be sent except
						one!
					</p>
					<div className="footerInputBox">
						<img className="emailIcon" alt="emailIcon" src={emailIcon} />
						<input
							value={email}
							onChange={handleInputChange}
							className="footerInput"
							placeholder="Enter your email address"
						/>
					</div>
					<button className="footerButton" onClick={handleClick}>
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
