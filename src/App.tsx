import "./App.css";
import { Section1 } from "./sections/Section1.tsx";
import { Section2 } from "./sections/Section2.tsx";

// import "./assets/reset.css"

function App() {
	return (
		<>
			<section id="#section-1" className="section">
				<div className="container">
					<Section1 />
				</div>
			</section>
			<section id="#section-1" className="section">
				<div className="container">
					<Section2 />
				</div>
			</section>
		</>
	);
}

export default App;
