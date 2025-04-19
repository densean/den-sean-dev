import { DashboardData } from "../common/common.interface";

export const mockDashboardData: DashboardData = {
	hero: {
		title: "Den Sean",
		subTitle: "Software Engineer",
		description:
			"A Trinity of Mastery: Building the Physical, Crafting the Digital, Shaping the Visual – Embracing diverse arts",
		imgPath: "/mov/hero.mov",
	},

	quote: {
		quote:
			"Become acquainted with every art. Be familiar with every way. Know a little about everything.",
		author: "Miyamoto Musashi",
	},

	experiences: [
		{
			projectName: "Project A",
			skills: ["Angular", "AEM Forms and Sites", "Azure DevOps"],
			description: `Built and maintained scalable Angular 16 features integrated with AEM Forms and Sites, translating complex business requirements into responsive UI components. Implemented API integrations, error handling, and transactional pages, while collaborating in an Agile team. Also authored deployment release notes and ensured high-quality, production-ready code.`,
		},
		{
			projectName: "Project B",
			skills: ["React", "Storybook", "Axios", "TanStack", "Azure DevOps"],
			description:
				"Migrated vanilla JavaScript AEM components to modern, reusable React components, integrating tools like Storybook for consistent UI documentation and testing. Focused on creating scalable architecture aligned with best practices.",
		},
		{
			projectName: "Project C",
			skills: ["Angular 19"],
			description:
				"Contributed to building a parallel Angular 19 application hosted on AWS to serve as a fallback in case of Azure DevOps outages. The project minimized reliance on the existing AEM-based app by modernizing key components with Angular best practices, improving performance, and ensuring operational continuity during potential system failures.",
		},
		{
			projectName: "Project D",
			skills: ["Node.js", "Gemini", "JSF", "Java", "React"],
			description:
				"Built an automation tool using Node.js to convert legacy JSF (XHTML) components into modern React and Spring Boot architecture. The process included parsing folders of XHTML files, generating React components, corresponding controllers, and updating routes. Integrated LLMs via Ollama to generate refactored code and documentation in markdown format, enforcing consistent React and Java standards across the converted codebase.",
		},
		{
			projectName: "Project E",
			skills: ["Java", "Spring Boot", "JWT", "Redis"],
			description:
				"Proof of concept for integrating audit trail logging, JWT-based authentication, and Redis caching.",
		},
		{
			projectName: "A Construction Company",
			description:
				"Oversaw construction projects by coordinating subcontractors and collaborating with licensed professionals to plan and execute work efficiently. Created detailed cost estimates and schedules, maintained consistent client communication regarding progress and billing, and contributed to developing streamlined office workflows that improved overall project execution and operations.",
			skills: ["Civil Engineering"],
		},
	],

	projects: [
		{
			name: "The Breakfast Club",
			imgPath: "/img/projects/BreakfastClub.png",
			skills: ["React"],
			description:
				"Created a movie-ticket-booker test-case project utilizing TanStack libraries, useContext, shadcn/ui, and Radix UI.",
			url: ["https://github.com/densean/the-breakfast-club"],
		},
		{
			name: "FinanceFx",
			imgPath: "/img/projects/FinanceFx.png",
			skills: ["Angular", "Java", "MySQL"],
			description:
				"Built a finance tracker app with JWT auth, RBAC, and features like daily expenses, bill tracking, and personal profile.",
			url: [
				"https://github.com/densean/finance-tracker-fe",
				"https://github.com/densean/finance-tracker",
			],
		},
		{
			name: "MSDAC Org. (WIP)",
			imgPath: "",
			skills: ["React", "Nest.js", "MySQL"],
			description:
				"Work-in-progress org page with RBAC, auth, dashboard for org details, and a management system for dues.",
			url: ["https://github.com/densean/iod-be"],
		},
	],

	certifications: [
		{
			name: "Software Developer Assessment",
			provider: "National University of Singapore",
			years: "2024 to 2026",
			description:
				"A hands-on evaluation covering full-stack development, including frontend and backend principles, software design patterns, DevOps workflows, and Agile methodologies. Demonstrated proficiency in algorithms, REST APIs, cloud concepts, and software testing through real-world case studies and scenario-based assessments.",
			imgPath: "",
		},
		{
			name: "Civil Engineer",
			provider: "Professional Regulation Commission",
			years: "2023 to 2026",
			description:
				"Licensed Civil Engineer in the Philippines, validated through a rigorous national board exam. Covered structural engineering, geotechnical analysis, surveying, transportation systems, fluid mechanics, and construction design—ensuring deep technical expertise and readiness for engineering practice in professional environments.",
			imgPath: "",
		},
		{
			name: "BSCE",
			provider: "University of San Carlos",
			years: "2014 to 2022",
			description:
				"Earned a comprehensive degree in Civil Engineering, with coursework spanning mathematics, structural design, geotechnical engineering, construction management, environmental systems, and advanced surveying. Foundation aligned with the licensure board's core topics and extended into broader applications across civil infrastructure projects.",
			imgPath: "",
		},
	],
};
