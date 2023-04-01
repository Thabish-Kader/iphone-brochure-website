import { DisplaySection } from "./components/DisplaySection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { SoundSection } from "./components/SoundSection";
import { WebGiViewer } from "./components/WebGiViewer";

function App() {
	return (
		<main className="App">
			<Navbar />
			<Hero />
			<SoundSection />
			<DisplaySection />
			<WebGiViewer />
		</main>
	);
}

export default App;
