import { CertificationsSectionProps } from "@/core/common/common.interface";

interface CertificationsProps {
	certifications: CertificationsSectionProps[];
}

export default function CertificationsSection({
	certifications,
}: CertificationsProps) {
	return (
		<section className="px-8 md:px-16 bg-mocha py-20">
			<h2 className="text-3xl font-bold text-gray-900 dark:text-white font-h">
				Certifications
			</h2>
			<p className="text-gray-500 font-p mb-28 ">[Marks of Mastery]</p>

			{certifications.map((cert, idx) => (
				<CertificationItem key={idx} cert={cert} />
			))}
		</section>
	);
}

function CertificationItem({ cert }: { cert: CertificationsSectionProps }) {
	return (
		<div className="mb-12">
			<div className="border-t border-black dark:border-neutral-700 mb-4" />

			<div className="flex justify-between items-start gap-8">
				<div className="flex w-1/2">
					<div className="flex flex-col w-5/6">
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-0 font-h">
							{cert.name}
						</h3>
						<p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-p">
							{cert.provider}
						</p>
					</div>
				</div>

				<div className="flex flex-col w-1/3">
					<p className="text-sm text-gray-500 font-p">{`[${cert.years}]`}</p>
					<p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 mt-2 font-p">
						{cert.description}
					</p>
				</div>
				<div></div>
			</div>
		</div>
	);
}
