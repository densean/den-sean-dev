import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"; // Add any necessary social icons
import { motion } from "framer-motion";

export default function Footer() {
	const handleEmailClick = () => {
		window.location.href =
			"mailto:deadmeetshero@gmail.com?subject=Connect with a Developer";
	};

	return (
		<footer className="">
			<div className="flex px-8 md:px-16 py-6 justify-between items-center w-full gap-6">
				<div className="flex flex-col md:flex-row md:items-center gap-4">
					<h3 className="text-2xl font-bold font-h">Let's Connect</h3>

					<div className="flex gap-4">
						<a
							href="https://ph.linkedin.com/in/denis-sean-siclot-049852246"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-400"
						>
							<FaLinkedin size={24} />
						</a>
						<a
							href="https://www.facebook.com/Devulgie"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-400"
						>
							<FaFacebook size={24} />
						</a>
						<a
							href="https://www.instagram.com/den.sean"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-400"
						>
							<FaInstagram size={24} />
						</a>
					</div>
				</div>

				<motion.button
					onClick={handleEmailClick}
					className="bg-chocolate text-white py-2 px-6 rounded-full text-lg hover:bg-chocolate-dark"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<p className="font-bold font-h">Send an Email</p>
				</motion.button>
			</div>

			<div className="px-8 md:px-16 pt-12 flex flex-col bg-chocolate items-start text-white">
				<div className="flex flex-col items-start h-84 justify-center">
					<div className="text-5xl font-bold font-title">DS/</div>
					<p className="mt-2 text-lg">
						An Alchemist at the Intersection of Civil Engineering, Software, and
						Art.
					</p>
				</div>
			</div>
			<div className=" text-sm mx-auto bg-black w-full m-0 p-2 text-center text-white">
				&copy; 2025{" DS/ | "}
				<a
					href="https://github.com/densean/den-sean-dev"
					className="text-gray-200 hover:text-gray-400"
				>
					Portfolio Source Code
				</a>
			</div>
		</footer>
	);
}
