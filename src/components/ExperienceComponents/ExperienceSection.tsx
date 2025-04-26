"use client";

import { ExperienceObject } from "@/types";
import { Group, Timeline } from "@mantine/core";
import { ExperienceItem } from "@/components";

export function ExperienceSection() {
	const experiences: ExperienceObject[] = [
		{
			id: "experience1",
			logo: "/chim.png",
			company: "Chim Media",
			companyNote: "(startup)",
			location: "New York, NY - Remote (Part-time)",
			position: "Front-end Team Lead",
			skills: [
				"Leadership",
				"Agile",
				"React",
				"Responsive Design",
				"Cross-Functional Teams",
			],
			period: "Aug 2020 - Jan 2021",
			website: "https://www.chimmedia.com/",
			details: [
				"Led a front-end team of 5 developers and 2 UX/UI designers in an Agile environment by organizing weekly team meetings and bi-weekly one-on-ones to drive alignment and deliver high-quality web solutions",
				"Developed 7 responsive static responsive websites using React as part of a team, ensuring mobile-first performance and consistent design",
				"Collaborated with Marketing and Product teams to gather requirements and ensure timely delivery of websites that met business goals",
			],
		},
		{
			id: "experience2",
			logo: "/plum.png",
			company: "Plum Voice",
			location: "Boston, MA - Hybrid",
			position: "Junior Front End Web Developer",
			period: "Jan 2022 - Sep 2023",
			skills: [
				"Full-Stack Development",
				"Vue.js",
				"RESTful API Integration",
				"Database Design",
				"Data Visualization",
				"Design Systems",
				"Figma",
				"Developer Documentation",
			],
			website: "https://www.plumvoice.com/",
			details: [
				"Led the frontend team to re-design and build a modern UI from scratch within 1 month for an AI-powered voice assistant demo using Figma, Vue.js, JavaScript, Axios, and Laravel, integrating with a FastAPI backend to deliver a polished prototype for enterprise client demos",
				"Re-designed and shipped a data visualization app in 2 months using Figma, Vue.js, ApexCharts, D3.js, and Mermaid.js to display data table, pie charts, flowcharts, and Sankey diagrams, helping clients gain clearer insights into platform usage and enabling users to easily identify key nodes",
				"Built the Template Center feature, allowing users to create custom IVR call flows with prebuilt templates tailored to various industries, reducing development time and accelerating deployment",
				"Developed 6 VXML app templates in 2 weeks using Stripe APIs and PHP, accelerating client onboarding and reducing support requests by providing ready-to-use examples",
				"Spearheaded the adoption of Figma and created a Design System, using Vue.js, Bootstrap and VitePress, which unified UI/UX across products, streamlined cross-team collaboration, and reduced design and development time by 50%",
				"Initiated and designed an internal tool with Figma, Vue.js, Laravel, MySQL, and Axios, including a custom database structure with multiple user permissions, enabling support and sales engineer teams to access data without relying on backend developers or directly accessing the database, streamlining workflows and enabling faster customer response times",
				"Built a responsive login and signup page for Plum Voice using HTML, CSS, Bootstrap, JavaScript, and jQuery, improving usability and aligning with modern UI standards",
				"Created the first company’s SMS bot demo using Plum SMS APIs, Google Dialogflow, and PHP to showcase functionality to a prospective client, helping initiate conversations for future SMS integration",
			],
		},
		{
			id: "experience3",
			logo: "/sharpen.png",
			company: "Sharpen",
			companyNote: "(formerly Plum Voice)",
			location: "Indianapolis, IN - Remote",
			position: "Software Engineer",
			period: "Oct 2023 - Mar 2024",
			skills: [
				"React",
				"Redux Toolkit",
				"TypeScript",
				"E2E Testing",
				"CI/CD",
				"UI Components (npm)",
			],
			website: "https://sharpencx.com/",
			details: [
				"Led the design of a Design System and developed it into a reusable front-end UI component library, published as a private npm package using React, TypeScript, Storybook, Bootstrap, and Figma, improving development time across teams by 40%",
				"Onboarded the front-end team to Figma by delivering training sessions and creating documentation, ensuring ongoing team ownership and better maintenance of design processes",
				"Developed front-end features for new and existing products using React, Redux Toolkit, React Router, TypeScript, Axios, and the components from the Design System",
				"Developed automated E2E front-end tests using Playwright, reducing manual regression testing time by 70% and catching bugs before they reached production",
				"Contributed to feature development and bug fixes in a CI/CD pipeline environment, collaborating with QA and DevOps to ensure stable and efficient deployments",
			],
		},
		{
			id: "experience4",
			logo: "/naviam.png",
			company: "Naviam",
			companyNote: "(formerly InterPro Solutions)",
			location: "Stoneham, MA - Hybrid",
			position: "Software Engineer",
			period: "Apr 2024 - Present",
			skills: [
				"Angular",
				"SCSS",
				"ESRI/ArcGIS APIs",
				"UI Regression Testing",
				"SQL",
			],
			website: "https://interprosoft.com/",
			details: [
				"Implemented features and resolved bugs in Angular web apps using TypeScript, SCSS, Angular Material, and Mobiscroll to deliver consistent and user-friendly interfaces",
				"Customize main web application codebase to meet client-specific IBM Maximo configurations by modifying SQL queries and UI elements, enabling integration with their asset management workflows",
				"Integrate interactive maps with ESRI and ArcGIS APIs using TypeScript and Java, creating a map export tool that enabled users to visualize geographic data from XML data format",
				"Collaborate with team members to write UI regression test plans, preventing release-blocking bugs and increasing deployment confidence",
			],
		},
	];

	return (
		<Group id="experience" className="flex flex-col gap-y-14 px-4">
			<div className="text-4xl text-primary-100 font-bold">
				Experience
			</div>
			<Timeline bulletSize={56}>
				{experiences.reverse().map((experience) => (
					<ExperienceItem
						key={experience.id}
						experience={experience}
					/>
				))}
			</Timeline>
		</Group>
	);
}
