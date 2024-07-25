import Header from "./components/Header/Parent-Header";
import Networks from "./components/Networks";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Profile from "./pages/Profile/Profile";
import Reviews from "./pages/Reviews";

function App() {
	return (
		<section className="max-w-[1540px] mx-auto overflow-x-hidden">
			<Header />
			<Home />
			<Portfolio />
			<Profile />
			<Reviews />
			<Contact />
			<Networks />
		</section>
	);
}

export default App;
