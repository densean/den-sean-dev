import { ProjectsSectionProps } from "@/core/common/common.interface";

interface ProjectModalProps {
	project: ProjectsSectionProps;
	onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
	return (
		<div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center md:p-12 p-6">
			<div className="bg-white dark:bg-neutral-900 py-16 text-black dark:text-white w-full max-w-xl relative p-8 shadow-xl">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 font-p hover:text-red-500 text-2xl"
				>
					×
				</button>

				<h2 className="text-3xl font-bold mb-4 font-h">{project.name}</h2>

				<p className="mb-6 text-base text-gray-700 dark:text-gray-300 font-p">
					{project.description}
				</p>

				<div className="mb-6">
					<h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
						Skills
					</h4>
					<p className="text-sm text-gray-700 dark:text-gray-300 font-p">
						{project.skills.join(", ")}
					</p>
				</div>

				{project.url.length > 0 && (
					<div>
						<h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
							Repositories / Links
						</h4>
						<ul className="space-y-1 font-p">
							{project.url.map((link, index) => (
								<li key={index}>
									<a
										href={link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 dark:text-blue-400 hover:underline break-all text-sm"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
