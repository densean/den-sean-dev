const Loader = () => {
	const pulse = {
		animation: "pulse 1.5s infinite cubic-bezier(0.4, 0, 0.6, 1)",
	};

	const pulseDelay1 = {
		animationDelay: "0.2s",
	};

	const pulseDelay2 = {
		animationDelay: "0.4s",
	};

	const keyframes = `@keyframes pulse {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.6;
        transform: scale(1.1);
      }
    }`;

	return (
		<div className="flex justify-center items-center h-screen w-full fixed top-0 left-0 bg-mocha z-50">
			<style>{keyframes}</style>
			<div className="flex space-x-4">
				<div className="w-8 h-8 rounded-full bg-chocolate" style={pulse}></div>
				<div
					className="w-8 h-8 rounded-full bg-chocolate"
					style={{ ...pulse, ...pulseDelay1 }}
				></div>
				<div
					className="w-8 h-8 rounded-full bg-chocolate"
					style={{ ...pulse, ...pulseDelay2 }}
				></div>
			</div>
		</div>
	);
};

export default Loader;
