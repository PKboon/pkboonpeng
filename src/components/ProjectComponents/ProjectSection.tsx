import { ProjectObject } from "@/types";
import ProjectItem from "./ProjectItem";

export default function ProjectSection() {
	const projects: ProjectObject[] = [
		{
			id: "project1",
			category: "Website",
			name: "PK Portfolio",
			links: [
				{
					href: "https://github.com/PKboon/pk-portfolio",
					icon: "github",
					tooltip: "View the repo",
				},
				{
					href: "https://www.figma.com/design/OxfGTsB1G5Z7NrnnynMF9Z/Portfolio?node-id=1-2&t=eloAPb6ia64rpngJ-1",
					icon: "figma",
					tooltip: "View in Figma",
				},
			],
			tags: [
				"Figma",
				"Next.js",
				"Typescript",
				"Mantine",
				"Tailwind",
				"Bun",
				"Docker",
			],
		},
		{
			id: "project2",
			category: "Website",
			name: "Next Match",
			links: [
				{
					href: "https://github.com/PKboon/nextMatch",
					icon: "github",
					tooltip: "View the repo",
				},
			],
			tags: ["Next.js", "Typescript", "MUI", "Tailwind"],
		},
		{
			id: "project3",
			category: "React Components",
			name: "Catapillow",
			links: [
				{
					href: "https://github.com/PKboon/catapillow",
					icon: "github",
					tooltip: "View the repo",
				},
				{
					href: "https://www.figma.com/design/WdRNOhY14l6SYTQ8TaqFPP/Catapillow?node-id=14-14&t=egEFxOa1VYWHhEcW-1",
					icon: "figma",
					tooltip: "View in Figma",
				},
			],
			tags: ["Figma", "React", "Typescript", "Tailwind", "Storybook"],
		},
		{
			id: "project4",
			category: "Website",
			name: "Van Renting",
			links: [
				{
					href: "https://github.com/PKboon/vanRentingWebApp",
					icon: "github",
					tooltip: "View the repo",
				},
			],
			tags: ["React", "React Router", "Typescript", "Bootstrap"],
		},
		{
			id: "project5",
			category: "iOS App",
			name: "Simple To-do App",
			links: [
				{
					href: "https://github.com/PKboon/swiftToDoApp",
					icon: "github",
					tooltip: "View the repo",
				},
			],
			tags: ["SwiftUI"],
		},
		{
			id: "project6",
			category: "Email Template",
			name: "Diversion Newsletter",
			links: [
				{
					href: "https://drive.google.com/drive/folders/1YqqqfmwbcSRF4yr8f-f9pB-iDDMCXvij?usp=sharing",
					icon: "drive",
					tooltip: "View in Google Drive",
				},
			],
			tags: ["HTML", "CSS", "Adobe Photoshop"],
		},
	];
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-16 h-fit">
			{projects.map((project) => (
				<ProjectItem project={project} key={project.id} />
			))}
		</div>
	);
}
