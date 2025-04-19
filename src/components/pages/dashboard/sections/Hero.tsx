import { HeroSectionProps } from "@/core/common/common.interface";

export default function HeroSection({
	title,
	subTitle,
	description,
	imgPath,
}: HeroSectionProps) {
	return (
		<section className="relative h-screen md:px-16 flex flex-col justify-center px-8 overflow-hidden">
			{/* Background Video */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-0"
			>
				<source
					src={`${import.meta.env.BASE_URL}${imgPath}`}
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>

			{/* Overlay to darken video (optional) */}
			<div className="absolute top-0 left-0 w-full h-full bg-chocolate/70 z-10" />

			{/* Content */}
			<div className="relative z-20 text-white">
				<p
					className="hidden md:block font-extrabold mb-0 px-0 mx-0 font-title"
					style={{ fontSize: 124, lineHeight: 0.9 }}
				>
					{title.toUpperCase()}
				</p>
				<p
					className="block md:hidden font-extrabold mb-0 font-title"
					style={{ fontSize: 80, lineHeight: 0.9 }}
				>
					{title.toUpperCase()}
				</p>
				<h2 className="text-3xl mt-2 font-semibold font-h pl-2">{subTitle}</h2>
				<p className="text-lg mt-2 max-w-xl text-white/90 pl-2">
					{description}
				</p>
			</div>
		</section>
	);
}
