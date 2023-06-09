import { Suspense, useRef } from "react";
import { DisplaySection } from "./components/DisplaySection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { SoundSection } from "./components/SoundSection";
import { WebGiViewer } from "./components/WebGiViewer";
import { Loader } from "./components/Loader";

function App() {
	const webgiViewerRef = useRef<any>();
	const contentRef = useRef<HTMLDivElement>(null);
	const handlePreview = () => {
		webgiViewerRef.current.triggerPreview();
	};
	return (
		<main className="App">
			<Loader />

			<div id="content" ref={contentRef}>
				<Navbar />
				<Hero />
				<SoundSection />
				<DisplaySection triggerPreview={handlePreview} />
			</div>
			<WebGiViewer contentRef={contentRef} ref={webgiViewerRef} />
		</main>
	);
}

export default App;
