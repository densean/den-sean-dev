export interface HeroSectionProps {
	title: string;
	subTitle: string;
	description: string;
	imgPath: string;
}
export interface QuoteSectionProps {
	quote: string;
	author: string;
}
export interface ExperiencesSectionProps {
	projectName: string;
	skills: string[];
	description: string;
}
export interface ProjectsSectionProps {
	name: string;
	imgPath: string;
	skills: string[];
	description: string;
	url: string[];
}
export interface CertificationsSectionProps {
	name: string;
	provider: string;
	years: string;
	description: string;
	imgPath: string;
}
export interface DashboardData {
	hero: HeroSectionProps;
	quote: QuoteSectionProps;
	projects: ProjectsSectionProps[];
	experiences: ExperiencesSectionProps[];
	certifications: CertificationsSectionProps[];
}
