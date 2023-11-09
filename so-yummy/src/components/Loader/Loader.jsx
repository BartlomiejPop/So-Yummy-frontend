import styles from "./Loader.module.css";
import { Audio } from "react-loader-spinner";

export const Loader = () => {
	return (
		<div className={styles.loaderBg}>
			<div className={styles.loader}>
				<Audio
					height="80"
					width="80"
					radius="9"
					color="green"
					ariaLabel="loading"
					wrapperStyle
					wrapperClass
				/>
			</div>
		</div>
	);
};

export default Loader;
