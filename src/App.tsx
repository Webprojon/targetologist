import Header from "./components/Header/Parent-Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";

function App() {
	return (
		<section className="max-w-[1540px] mx-auto overflow-x-hidden">
			<Header />
			<Home />
			<Portfolio />
			<Reviews />
			<Contact />
		</section>
	);
}

export default App;
