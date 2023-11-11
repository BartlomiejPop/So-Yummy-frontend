import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import image from "../images/registerImage.png";
import bg from "../images/registerBg.png";
import "./loginRegister.css";
import userIcon from "../icons/user.svg";
import emailIcon from "../icons/email.svg";
import passwordIcon from "../icons/password.svg";
import { NavLink } from "react-router-dom";
import { register } from "../redux/auth/operations.js";
import Notiflix from "notiflix";

export default function Register() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const validateEmail = (email) => {
		const regex = /\S+@\S+\.\S+/;
		return regex.test(email);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const email = form.elements.email.value;
		const password = form.elements.password.value;
		const name = form.elements.name.value;

		if (!validateEmail(email)) {
			Notiflix.Notify.failure("Invalid email format!");
			return;
		}
		const response = await dispatch(register({ email, password, name }));
		const shouldRedirect = response.payload.status === "success";
		if (shouldRedirect) {
			navigate("/login");
			Notiflix.Notify.success("User registered. Log in");
		}
	};

	return (
		<div>
			<Helmet>
				<title>Registration</title>
			</Helmet>
			<img alt="bg" className="bg" src={bg} />
			<div className="wrapper">
				<img alt="logo" className="image" src={image} />
				<div className="contentWrapper">
					<div className="formWrapper">
						<p className="formText">Registration</p>
						<form onSubmit={handleSubmit} className="form">
							<div className="field">
								<img alt="userIcon" src={userIcon} className="icon" />
								<input
									className="input"
									placeholder="Name"
									type="text"
									name="name"
									required=""
								/>
							</div>
							<div className="field">
								<img alt="emailIcon" src={emailIcon} className="icon" />
								<input
									className="input"
									placeholder="Email"
									type="text"
									name="email"
									required=""
								/>
							</div>
							<div className="field">
								<img alt="passwordIcon" src={passwordIcon} className="icon" />
								<input
									className="input"
									placeholder="Password"
									type="password"
									name="password"
									required=""
								/>
							</div>
							<button className="button">Sign up</button>
						</form>
					</div>
					<NavLink className="navLink" to="/login">
						Sign in
					</NavLink>
				</div>
			</div>
		</div>
	);
}
