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
					id: "project1link1",
					href: "https://github.com/PKboon/pk-portfolio",
					icon: "github",
					tooltip: "View the repo",
				},
				{
					id: "project1link2",
					href: "https://www.figma.com/design/OxfGTsB1G5Z7NrnnynMF9Z/Portfolio?node-id=1-2&t=eloAPb6ia64rpngJ-1",
					icon: "figma",
					tooltip: "View in Figma",
				},
			],
			tags: [
				{ id: "project1tag1", label: "Figma" },
				{ id: "project1tag2", label: "Next.js" },
				{ id: "project1tag3", label: "Typescript" },
				{ id: "project1tag4", label: "Mantine" },
				{ id: "project1tag5", label: "Tailwind" },
				{ id: "project1tag6", label: "Bun" },
				{ id: "project1tag7", label: "Docker" },
			],
		},
		{
			id: "project2",
			category: "Website",
			name: "Next Match",
			links: [
				{
					id: "project2link1",
					href: "https://github.com/PKboon/nextMatch",
					icon: "github",
					tooltip: "View the repo",
				},
			],
			tags: [
				{ id: "project2tag1", label: "Next.js" },
				{ id: "project2tag2", label: "Typescript" },
				{ id: "project2tag3", label: "MUI" },
				{ id: "project2tag4", label: "Tailwind" },
			],
		},
		{
			id: "project3",
			category: "React Components",
			name: "Catapillow",
			links: [
				{
					id: "project3link1",
					href: "https://github.com/PKboon/catapillow",
					icon: "github",
					tooltip: "View the repo",
				},
				{
					id: "project3link2",
					href: "https://www.figma.com/design/WdRNOhY14l6SYTQ8TaqFPP/Catapillow?node-id=14-14&t=egEFxOa1VYWHhEcW-1",
					icon: "figma",
					tooltip: "View in Figma",
				},
			],
			tags: [
				{ id: "project3tag1", label: "Figma" },
				{ id: "project3tag2", label: "React" },
				{ id: "project3tag3", label: "Typescript" },
				{ id: "project3tag4", label: "Tailwind" },
				{ id: "project3tag5", label: "Storybook" },
			],
		},
		{
			id: "project4",
			category: "Website",
			name: "Van Renting",
			links: [
				{
					id: "project4link1",
					href: "https://github.com/PKboon/vanRentingWebApp",
					icon: "github",
					tooltip: "View the repo",
				},
			],
			tags: [
				{ id: "project4tag1", label: "React" },
				{ id: "project4tag2", label: "React Router" },
				{ id: "project4tag3", label: "Typescript" },
				{ id: "project4tag4", label: "Bootstrap" },
			],
		},
		{
			id: "project5",
			category: "iOS App",
			name: "Simple To-do App",
			links: [
				{
					id: "project5link1",
					href: "https://github.com/PKboon/swiftToDoApp",
					icon: "github",
					tooltip: "View the repo",
				},
			],
			tags: [{ id: "project5tag1", label: "SwiftUI" }],
		},
		{
			id: "project6",
			category: "Email Template",
			name: "Diversion Newsletter",
			links: [
				{
					id: "project6link1",
					href: "https://drive.google.com/drive/folders/1YqqqfmwbcSRF4yr8f-f9pB-iDDMCXvij?usp=sharing",
					icon: "drive",
					tooltip: "View in Google Drive",
				},
			],
			tags: [
				{ id: "project6tag1", label: "HTML" },
				{ id: "project6tag2", label: "CSS" },
				{ id: "project6tag3", label: "Adobe Photoshop" },
			],
		},
	];
	return (
		<Group className="flex flex-col gap-y-14" id="projects">
			<div className="text-4xl text-primary-100 font-bold">Projects</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-16 h-fit">
				{projects.map((project) => (
					<ProjectItem project={project} key={project.id} />
				))}
			</div>
		</Group>
	);
}
