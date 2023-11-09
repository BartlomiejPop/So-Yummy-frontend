import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loader from "./Loader/Loader.jsx";

export const Layout = () => {
	return (
		<div>
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
			<Toaster position="top-right" reverseOrder={false} />
		</div>
	);
};
