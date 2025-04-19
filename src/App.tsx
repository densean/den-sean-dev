import { useEffect, useRef } from "react";
import "./App.css";
import Dashboard from "./components/pages/dashboard/DashboardMain";
import Footer from "./components/common/Footer";
import Lenis from "@studio-freight/lenis";

function App() {
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 0.4,
			easing: (t) => 1 - Math.pow(1 - t, 2),
			smoothWheel: true,
			touchMultiplier: 0.6,
		});

		lenisRef.current = lenis;

		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return (
		<>
			<Dashboard />
			<Footer />
		</>
	);
}

export default App;
