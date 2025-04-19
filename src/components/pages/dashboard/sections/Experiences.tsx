import { useState, useRef, useLayoutEffect } from "react";
import { ExperiencesSectionProps } from "@/core/common/common.interface";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { motion } from "framer-motion";

interface ExperiencesProps {
	experiences: ExperiencesSectionProps[];
}

export default function ExperiencesSection({ experiences }: ExperiencesProps) {
	return (
		<section className="px-8 md:px-16 py-20">
			<h2 className="text-3xl font-bold text-gray-900 dark:text-white font-h">
				Professional Experience
			</h2>
			<p className="text-gray-500 font-p mb-28 ">[Paths of Proficiency]</p>

			{experiences.map((experience, idx) => (
				<ExperienceItem key={idx} experience={experience} />
			))}
		</section>
	);
}

function ExperienceItem({
	experience,
}: {
	experience: ExperiencesSectionProps;
}) {
	const [isExpanded, setIsExpanded] = useState(false);
	const leftRef = useRef<HTMLDivElement>(null);
	const rightRef = useRef<HTMLDivElement>(null);
	const [maxHeight, setMaxHeight] = useState<number>(0);
	const COLLAPSED_HEIGHT = 82;
	const isToggleDisabled = maxHeight <= COLLAPSED_HEIGHT;

	useLayoutEffect(() => {
		const leftHeight = leftRef.current?.scrollHeight || 0;
		const rightHeight = rightRef.current?.scrollHeight || 0;
		const finalHeight = Math.max(leftHeight, rightHeight);
		setMaxHeight(finalHeight);
	}, [isExpanded, experience]);

	return (
		<div className="mb-6">
			<div className="border-t border-black dark:border-neutral-700 mb-4" />

			<motion.div
				animate={{
					maxHeight: isExpanded ? maxHeight : COLLAPSED_HEIGHT,
				}}
				transition={{ duration: 0.6, ease: "easeInOut" }}
				className="flex justify-between items-start gap-8 overflow-hidden"
			>
				<div className="flex flex-col w-1/2 overflow-hidden" ref={leftRef}>
					<h3 className="text-xl font-semibold text-gray-900 dark:text-white font-h">
						{experience.projectName}
					</h3>
					<p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2 font-p">
						{experience.skills.join(", ")}
					</p>
				</div>

				<div className="relative flex flex-col w-1/3" ref={rightRef}>
					<p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 font-p">
						{experience.description}
					</p>
				</div>

				<motion.button
					onClick={() => setIsExpanded((prev) => !prev)}
					aria-label="Toggle Description"
					className={`text-[2.5rem] text-gray-600 dark:text-gray-300 hover:text-blue-500 ${
						isToggleDisabled ? "opacity-50 cursor-default" : ""
					}`}
					animate={{ rotate: isExpanded ? 180 : 0 }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					disabled={isToggleDisabled}
				>
					{isExpanded ? (
						<HiMinusSm className="text-xl" />
					) : (
						<HiPlusSm className="text-xl" />
					)}
				</motion.button>
			</motion.div>
		</div>
	);
}
