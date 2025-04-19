import { useDashboardQuery } from "@/core/query/useDashboardQuery";
import HeroSection from "./sections/Hero";
import QuoteSection from "./sections/Quote";
import ProjectsSection from "./sections/Projects";
import ExperiencesSection from "./sections/Experiences";
import CertificationsSection from "./sections/Certifications";
import Loader from "@/components/common/Loader";

export default function Dashboard() {
	const { data, isLoading, error } = useDashboardQuery();

	if (isLoading)
		return (
			<>
				<Loader />
			</>
		);
	if (error || !data)
		return (
			<div className="text-center mt-10 text-red-500">
				Error loading dashboard.
			</div>
		);

	return (
		<div>
			<HeroSection {...data.hero} />
			<QuoteSection {...data.quote} />
			<ProjectsSection projects={data.projects} />
			<ExperiencesSection experiences={data.experiences} />
			<CertificationsSection certifications={data.certifications} />
		</div>
	);
}
