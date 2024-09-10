"use client";

import { ExperienceObject } from "@/types";
import { Group, Space, Timeline, Title } from "@mantine/core";
import { ExperienceItem } from "@/components";

export function ExperienceSection() {
	const experience: ExperienceObject[] = [
		{
			id: "experience1",
			logo: "/images/chim.png",
			company: "Chim Media (Startup)",
			location: "New York, NY - Remote (Part-time)",
			position: "Frontend Team Lead",
			period: "Aug 2020 - Jan 2021",
		},
		{
			id: "experience2",
			logo: "/images/plum.png",
			company: "Plum Voice",
			location: "Boston, MA - Hybrid",
			position: "Junior Front End Web Developer",
			period: "Jan 2022 - Sep 2023",
		},
		{
			id: "experience3",
			logo: "/images/sharpen.png",
			company: "Sharpen",
			location: "Indianapolis, IN - Remote",
			position: "Software Engineer II",
			period: "Oct 2023 - Mar 2024",
		},
		{
			id: "experience4",
			logo: "/images/interpro.png",
			company: "InterPro Solutions",
			location: "Stoneham, MA - Hybrid",
			position: "Front-end Software Engineer",
			period: "Apr 2024 - Present",
		},
	];

	const renderedHighLightedKey = (key: string) => {
		return (
			<Title order={6} className="text-accent-5 text-sm inline">
				{key}
			</Title>
		);
	};
	return (
		<Group className="flex flex-col gap-y-14">
			<div className="text-4xl text-primary-100 font-bold">
				Experience
			</div>
			<Timeline bulletSize={64} active={1} color="var(--primary-100)">
				<ExperienceItem experience={experience[3]}>
					<span className="text-sm text-primary-200 opacity-80">
						<span>
							- Build and update web apps using{" "}
							{renderedHighLightedKey("Typescript")},{" "}
							{renderedHighLightedKey("Angular")}, along with{" "}
							{renderedHighLightedKey("SCSS")},{" "}
							{renderedHighLightedKey("Angular Material")} and{" "}
							{renderedHighLightedKey("Mobiscroll")}, to improve
							the user interface
						</span>
						<Space />
						<span>
							- Integrate interactive maps to applications with{" "}
							{renderedHighLightedKey("ESRI")} and{" "}
							{renderedHighLightedKey("ArcGIS APIs")}, making
							geographic data more accessible and easy to export
							map data
						</span>
						<Space />
						<span>
							- Connect user interface with clients' IBM Maximo
							accounts, enabling data integration from their
							database
						</span>
						<Space />
						<span>
							- Work with the team to address and fix UI and UX
							issues, helping ensure smooth application
							performance
						</span>
					</span>
				</ExperienceItem>
				<ExperienceItem experience={experience[2]}>
					<span className="text-sm text-primary-200 opacity-80">
						<span>
							-{" "}
							{renderedHighLightedKey(
								"Transferred Plum Voice knowledge"
							)}{" "}
							by showing product {renderedHighLightedKey("demos")}{" "}
							and sharing{" "}
							{renderedHighLightedKey("documentation")}, after the
							acquisition
						</span>
						<Space />
						<span>
							- Led the front-end team in developing a{" "}
							{renderedHighLightedKey(
								"front-end component node package"
							)}{" "}
							using {renderedHighLightedKey("Figma")},{" "}
							{renderedHighLightedKey("React")},{" "}
							{renderedHighLightedKey("Typescript")},{" "}
							{renderedHighLightedKey("Storybook")}
							and {renderedHighLightedKey("Bootstrap")}
						</span>
						<Space />
						<span>
							- Introduced Figma to the company and created a
							{renderedHighLightedKey("Design System")} to unify
							the UI/UX
						</span>
						<Space />
						<span>
							- Provided {renderedHighLightedKey("training")}{" "}
							sessions for the front-end team on utilizing Figma
							for{" "}
							{renderedHighLightedKey(
								"building mock-ups and prototypes"
							)}
						</span>
						<Space />
						<span>
							- Enhanced existing front-end code for easier
							maintenance and refining React components
						</span>
						<Space />
						<span>
							-{" "}
							{renderedHighLightedKey(
								"Designed intuitive UI/UX experiences"
							)}{" "}
							for both new and existing products to optimize user
							interaction
						</span>
						<Space />
						<span>
							- Developed {renderedHighLightedKey("Playwright")}{" "}
							tests to validate component behavior
						</span>
						<Space />
						<span>
							- Reviewed 80+ code repositories to ensure accuracy,
							structure, and security, enhancing code quality and
							product efficiency
						</span>
						<Space />
					</span>
				</ExperienceItem>
				<ExperienceItem experience={experience[1]}>
					<span className="text-sm text-primary-200 opacity-80">
						<span>
							- Sustained and enhanced core products and internal
							tool web apps using{" "}
							{renderedHighLightedKey("Figma")},{" "}
							{renderedHighLightedKey("Vue.js")},{" "}
							{renderedHighLightedKey("AngularJS")},{" "}
							{renderedHighLightedKey("Laravel")},{" "}
							{renderedHighLightedKey("Axios")}, and
							{renderedHighLightedKey("Node.js")}
						</span>
						<Space />
						<span>
							- {renderedHighLightedKey("Introduced Figma")} and
							produced a{" "}
							{renderedHighLightedKey("front-end documentation")}{" "}
							with Vue.js, {renderedHighLightedKey("VitePress")}{" "}
							and Figma for internal company utilization
						</span>
						<Space />
						<span>
							- Built the internal tool web app by utilizing
							{renderedHighLightedKey("Axios")},{" "}
							{renderedHighLightedKey("MySQL")} and{" "}
							{renderedHighLightedKey("Laravel")} for permission
							control and APIs for the customer support team
						</span>
						<Space />
						<span>
							- Initiated a Node.js app that connects CPaaS
							{renderedHighLightedKey("Jambonz")} and{" "}
							{renderedHighLightedKey("Dialogflow")}
							to create an{" "}
							{renderedHighLightedKey(
								"AI voice application demo"
							)}
						</span>
						<Space />
						<span>
							- Created an{" "}
							{renderedHighLightedKey("SMS Bot demo")} using
							Dialogflow and Plum's APIs
						</span>
						<Space />
						<span>
							- Integrated Node.js and{" "}
							{renderedHighLightedKey("DynamoDB")} to create
							outbound APIs for a core product and used{" "}
							{renderedHighLightedKey("Jest")} for testing
						</span>
						<Space />
						<span>
							- Developed a data analysis Vue.js web app that
							displays statistical charts using{" "}
							{renderedHighLightedKey("ApexCharts")},{" "}
							{renderedHighLightedKey("D3.js")}
							and {renderedHighLightedKey("Mermaid.js")}
						</span>
						<Space />
						<span>
							-{" "}
							{renderedHighLightedKey(
								"Maintained and reviewed code"
							)}{" "}
							in 10+ repositories and resolved 170+ issues
						</span>
						<Space />
						<span>
							- Engaged in {renderedHighLightedKey("Agile")} work
							environment and sprint activities, which included
							participation in daily stand-up meetings and weekly
							code review sessions
						</span>
						<Space />
					</span>
				</ExperienceItem>
				<ExperienceItem experience={experience[0]}>
					<span className="text-sm text-primary-200 opacity-80">
						<span>
							- Led a group of{" "}
							{renderedHighLightedKey(
								"5 developers and 2 UX/UI designers"
							)}{" "}
							using {renderedHighLightedKey("Agile")}
						</span>
						<Space />
						<span>
							- Built{" "}
							{renderedHighLightedKey(
								"7 responsive static websites"
							)}{" "}
							using {renderedHighLightedKey("React")} with the
							team
						</span>
						<Space />
						<span>
							- Collaborated with other departments to deliver the
							websites
						</span>
						<Space />
					</span>
				</ExperienceItem>
			</Timeline>
		</Group>
	);
}
