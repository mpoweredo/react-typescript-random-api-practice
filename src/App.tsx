import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<div className="App">
			<MainNavigation />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/react-typescript-random-person-practice" element={<Home/>} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
