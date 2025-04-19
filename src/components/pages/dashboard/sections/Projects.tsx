import { ProjectsSectionProps } from "@/core/common/common.interface";
import { useState } from "react";
import ProjectModal from "./modals/ProjectModal";

interface ProjectsProps {
	projects: ProjectsSectionProps[];
}

export default function ProjectsSection({ projects }: ProjectsProps) {
	const [selectedProject, setSelectedProject] =
		useState<ProjectsSectionProps | null>(null);

	return (
		<section className="w-full bg-mocha dark:bg-neutral-900 py-20">
			<div className="md:px-16 px-8">
				<h2 className="text-3xl font-bold  text-gray-900 dark:text-white font-h">
					Featured Personal Projects
				</h2>
				<p className="text-gray-500 font-p mb-40">[Experiments in Artistry]</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-0 mb-20">
				{projects.map((project, idx) => (
					<div
						key={idx}
						className="relative group cursor-pointer overflow-hidden h-[460px] mb-14"
						onClick={() => setSelectedProject(project)}
					>
						<div className="md:hidden absolute inset-0 z-10 bg-black/60 text-white px-4 py-6 flex flex-col justify-center">
							<h1 className="text-xl font-bold">{project.name}</h1>
							<p className="text-sm mt-2">{project.skills.join(", ")}</p>
						</div>

						<img
							src={
								project.imgPath
									? `${import.meta.env.BASE_URL}${project.imgPath}`
									: `${import.meta.env.BASE_URL}/img/projects/fallback.png`
							}
							alt={project.description}
							className="block w-full h-full scale-125 object-cover transition-transform duration-500 group-hover:scale-150"
						/>

						<div className="hidden md:flex absolute inset-0 z-20 bg-black bg-opacity-30 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex-col justify-center items-center text-white text-center px-4">
							<h1 className="text-xl font-bold mb-2 font-h">{project.name}</h1>
							<p className="text-sm pt-12 font-p">
								{project.skills.join(", ")}
							</p>
						</div>
					</div>
				))}
			</div>

			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			)}
		</section>
	);
}
