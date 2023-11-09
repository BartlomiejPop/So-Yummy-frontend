import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter basename="So-Yummy-frontend">
			<App />
		</BrowserRouter>
	</Provider>
);
