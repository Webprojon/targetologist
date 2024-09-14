import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header/Parent-Header";
import Networks from "./components/Networks";
import { GlobalContextProvider } from "./context/global-context";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Profile from "./pages/Profile/Profile";
import Recommendations from "./pages/Recommend/Recommendations";
import Reviews from "./pages/Reviews/Reviews";
import Services from "./pages/Services/Services";
import { store } from "./redux/store";

function App() {
	return (
		<section className="max-w-[1540px] mx-auto overflow-x-hidden">
			<Provider store={store}>
				<GlobalContextProvider>
					<Header />
					<Home />
					<Portfolio />
					<Profile />
					<Recommendations />
					<Reviews />
					<Contact />
					<Services />
					<Footer />
					<Networks />
				</GlobalContextProvider>
			</Provider>
		</section>
	);
}

export default App;
