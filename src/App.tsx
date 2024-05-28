import { useState } from "react";
import "./App.css";
import { Section1 } from "./sections/Section1.tsx";

// import "./assets/reset.css"

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<section id="#section-1" className="section">
				<div className="container">
					<Section1 />
				</div>
			</section>
		</>
	);
}

export default App;
