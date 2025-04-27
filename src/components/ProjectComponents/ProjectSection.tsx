import { ProjectObject } from "@/types";
import { ProjectItem } from "@/components";
import { Group } from "@mantine/core";

export function ProjectSection() {
	const projects: ProjectObject[] = [
		{
			id: "project1",
			category: "Website",
			name: "PK Portfolio",
			links: [
				{
					id: "link1",
					href: "https://www.figma.com/design/OxfGTsB1G5Z7NrnnynMF9Z/Portfolio?node-id=1-2&t=eloAPb6ia64rpngJ-1",
					icon: "skill-icons:figma-dark",
					tooltip: "View in Figma",
				},
				{
					id: "link2",
					href: "https://github.com/PKboon/pk-portfolio",
					icon: "mdi:github",
					tooltip: "View the repo",
				},
				{
					id: "link3",
					href: "https://www.pkboonpeng.com/",
					icon: "iconamoon:link-external",
					tooltip: "Go to website",
				},
			],
			tags: [
				{ id: "tag1", label: "Figma" },
				{ id: "tag2", label: "Next.js" },
				{ id: "tag3", label: "Typescript" },
				{ id: "tag4", label: "Mantine" },
				{ id: "tag5", label: "Tailwind" },
				{ id: "tag6", label: "Bun" },
			],
		},
		// {
		// 	id: "project2",
		// 	category: "Website",
		// 	name: "Next Match",
		// 	links: [
		// 		{
		// 			id: "link1",
		// 			href: "https://github.com/PKboon/nextMatch",
		// 			icon: "mdi:github",
		// 			tooltip: "View the repo",
		// 		},
		// 	],
		// 	tags: [
		// 		{ id: "tag1", label: "Next.js" },
		// 		{ id: "tag2", label: "Typescript" },
		// 		{ id: "tag3", label: "MUI" },
		// 		{ id: "tag4", label: "Tailwind" },
		// 	],
		// },
		{
			id: "project3",
			category: "React Components",
			name: "Catapillow",
			links: [
				{
					id: "link1",
					href: "https://www.figma.com/design/WdRNOhY14l6SYTQ8TaqFPP/Catapillow?node-id=14-14&t=egEFxOa1VYWHhEcW-1",
					icon: "skill-icons:figma-dark",
					tooltip: "View in Figma",
				},
				{
					id: "link2",
					href: "https://github.com/PKboon/catapillow",
					icon: "mdi:github",
					tooltip: "View the repo",
				},
				{
					id: "link3",
					href: "https://catapillow.vercel.app/?path=%2Fdocs%2Fcomponents-alerts-alert--docs",
					icon: "iconamoon:link-external",
					tooltip: "Go to website",
				},
			],
			tags: [
				{ id: "tag1", label: "Figma" },
				{ id: "tag2", label: "React" },
				{ id: "tag3", label: "Typescript" },
				{ id: "tag4", label: "Tailwind" },
				{ id: "tag5", label: "Storybook" },
			],
		},
		/* {
			id: "project4",
			category: "Website",
			name: "Van Renting",
			links: [
				{
					id: "ink1",
					href: "https://github.com/PKboon/vanRentingWebApp",
					icon: "mdi:github",
					tooltip: "View the repo",
				},
			],
			tags: [
				{ id: "tag1", label: "React" },
				{ id: "tag2", label: "React Router" },
				{ id: "tag3", label: "Typescript" },
				{ id: "tag4", label: "Bootstrap" },
			],
		}, */
		/* {
			id: "project5",
			category: "iOS App",
			name: "Simple To-do App",
			links: [
				{
					id: "link1",
					href: "https://github.com/PKboon/swiftToDoApp",
					icon: "mdi:github",
					tooltip: "View the repo",
				},
			],
			tags: [{ id: "tag1", label: "SwiftUI" }],
		}, */
		/* {
			id: "project6",
			category: "Email Template",
			name: "Diversion Newsletter",
			links: [
				{
					id: "link1",
					href: "https://drive.google.com/drive/folders/1YqqqfmwbcSRF4yr8f-f9pB-iDDMCXvij?usp=sharing",
					icon: "logos:google-drive",
					tooltip: "View in Google Drive",
				},
			],
			tags: [
				{ id: "tag1", label: "HTML" },
				{ id: "tag2", label: "CSS" },
				{ id: "tag3", label: "Adobe Photoshop" },
			],
		}, */
	];
	return (
		<Group id="projects" className="flex flex-col gap-y-14">
			<div className="text-4xl text-primary-100 font-bold">Projects</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-16 h-fit">
				{projects.map((project) => (
					<ProjectItem project={project} key={project.id} />
				))}
			</div>
		</Group>
	);
}
