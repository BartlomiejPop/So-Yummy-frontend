import Header from "../components/Header/Header.jsx";
import Introduction from "../components/Introduction/Introduction.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./HomePage.css";
import greenBg from "../images/greenBg.png";
import leaves from "../images/leaves.png";
import leaves2 from "../images/leaves2.png";
import leavesBottomSide from "../images/leavesBottomSide.png";
import salad from "../images/salad.png";
import HomePageRecipes from "../components/HomePageRecipes/HomePageRecipes.jsx";
import OtherCategories from "../components/OtherCategories/OtherCategories.jsx";

export default function Home() {
	window.scrollTo(0, 0);
	return (
		<div>
			<div className="overlay"></div>
			<img alt="salad" src={salad} className="salad" />
			<img alt="leaves" src={leaves} className="leaves" />
			<img alt="leaves2" src={leaves2} className="leaves2" />
			<img alt="leaves3" src={leavesBottomSide} className="leavesBottomSide" />
			<img alt="greenBg" src={greenBg} className="greenBg" />

			<Header />
			<Introduction />
			<HomePageRecipes />
			<OtherCategories />
			<Footer />
		</div>
	);
}
