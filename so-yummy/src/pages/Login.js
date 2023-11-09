import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";
import image from "../images/registerImage.png";
import bg from "../images/registerBg.png";
import "./loginRegister.css";
import emailIcon from "../icons/email.svg";
import passwordIcon from "../icons/password.svg";
import { NavLink } from "react-router-dom";
import { login } from "../redux/auth/operations.js";

export default function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const password = form.elements.password.value;
		const email = form.elements.email.value;
		const response = await dispatch(
			login({
				password,
				email,
			})
		);
		const shouldRedirect = response.payload.status === "success";
		if (shouldRedirect) {
			navigate("/home");
			Notiflix.Notify.success("Logged in");
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<div>
			<Helmet>
				<title>Sign in</title>
			</Helmet>
			<img alt="bg" className="bg" src={bg} />
			<div className="wrapper">
				<img alt="logo" className="image" src={image} />
				<div className="contentWrapper">
					<form className="formWrapper" onSubmit={handleSubmit}>
						<p className="formText">Sign in</p>
						<div className="form">
							<div className="field">
								<img alt="emailIcon" src={emailIcon} className="icon" />
								<input
									className="input"
									placeholder="Email"
									type="text"
									name="email"
									required=""
									value={formData.email}
									onChange={handleInputChange}
								/>
							</div>
							<div className="field">
								<img alt="passwordIcon" src={passwordIcon} className="icon" />
								<input
									className="input"
									placeholder="Password"
									type="text"
									name="password"
									required=""
									value={formData.password}
									onChange={handleInputChange}
								/>
							</div>
							<button className="button">Sign in</button>
						</div>
					</form>
					<NavLink className="navLink" to="/register">
						Registration
					</NavLink>
				</div>
			</div>
		</div>
	);
}
