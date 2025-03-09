"use client";

import { ExperienceObject } from "@/types";
import { Group, Space, Timeline, Title } from "@mantine/core";
import { ExperienceItem } from "@/components";

export function ExperienceSection() {
	const experience: ExperienceObject[] = [
		{
			id: "experience1",
			logo: "/chim.png",
			company: "Chim Media",
			companyNote: "(startup)",
			location: "New York, NY - Remote (Part-time)",
			position: "Front-end Team Lead",
			period: "Aug 2020 - Jan 2021",
			website: "https://www.chimmedia.com/",
		},
		{
			id: "experience2",
			logo: "/plum.png",
			company: "Plum Voice",
			location: "Boston, MA - Hybrid",
			position: "Junior Front End Web Developer",
			period: "Jan 2022 - Sep 2023",
			website: "https://www.plumvoice.com/",
		},
		{
			id: "experience3",
			logo: "/sharpen.png",
			company: "Sharpen",
			companyNote: "(formerly Plum Voice)",
			location: "Indianapolis, IN - Remote",
			position: "Software Engineer",
			period: "Oct 2023 - Mar 2024",
			website: "https://sharpencx.com/",
		},
		{
			id: "experience4",
			logo: "/interpro.png",
			company: "InterPro Solutions",
			location: "Stoneham, MA - Hybrid",
			position: "Software Engineer",
			period: "Apr 2024 - Present",
			website: "https://interprosoft.com/",
		},
	];

	const renderedHighLightedKey = (key: string) => {
		return (
			<Title order={6} className="text-accent-5 text-base inline">
				{key}
			</Title>
		);
	};

	return (
		<Group id="experience" className="flex flex-col gap-y-14 px-4">
			<div className="text-4xl text-primary-100 font-bold">
				Experience
			</div>
			<Timeline bulletSize={56}>
				<ExperienceItem experience={experience[3]}>
					<span>
						- Build and update web apps using{" "}
						{renderedHighLightedKey("Typescript")},{" "}
						{renderedHighLightedKey("Angular")}, along with{" "}
						{renderedHighLightedKey("SCSS")},{" "}
						{renderedHighLightedKey("Angular Material")} and{" "}
						{renderedHighLightedKey("Mobiscroll")}
					</span>
					<Space />
					<span>
						- Integrate interactive maps to applications with{" "}
						{renderedHighLightedKey("ESRI")} and{" "}
						{renderedHighLightedKey("ArcGIS APIs")} in{" "}
						{renderedHighLightedKey("Typescript")} and{" "}
						{renderedHighLightedKey("Java")} to build a map export{" "}
						tool and export data in {renderedHighLightedKey("XML")}{" "}
						format
					</span>
					<Space />
					<span>
						- Connect Angular apps with clients&apos; IBM Maximo
						accounts, enabling data integration from their database
					</span>
					<Space />
					<span>
						- Collaborate with team members to{" "}
						{renderedHighLightedKey("write regression")} testing
						plans to ensure UI stability in new releases
					</span>
					<Space />
					<span>
						- Work in an {renderedHighLightedKey("Agile")}{" "}
						environment, participating in sprints, stand-ups, and
						code reviews
					</span>
				</ExperienceItem>
				<ExperienceItem experience={experience[2]}>
					<span>
						- Led the front-end team in developing a{" "}
						{renderedHighLightedKey(
							"front-end component node package"
						)}{" "}
						using {renderedHighLightedKey("Figma")},{" "}
						{renderedHighLightedKey("React")},{" "}
						{renderedHighLightedKey("Typescript")},{" "}
						{renderedHighLightedKey("Storybook")} and{" "}
						{renderedHighLightedKey("Bootstrap")}
					</span>
					<Space />
					<span>
						- Introduced Figma to the company and created a{" "}
						{renderedHighLightedKey("Design System")} to unify the
						UI/UX, which{" "}
						{renderedHighLightedKey("reduce design time by 40%")}
					</span>
					<Space />
					<span>
						- Provided {renderedHighLightedKey("training")} sessions
						for the front-end team on utilizing Figma for{" "}
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
						- Developed {renderedHighLightedKey("Playwright")} tests
						to automate front-end testing,{" "}
						{renderedHighLightedKey(
							"reducing regression test time by 70%"
						)}
					</span>
					<Space />
					<span>
						- Participated in {renderedHighLightedKey("Agile")}{" "}
						sprints, stand-ups, and retrospectives to improve team
						collaboration
					</span>
				</ExperienceItem>
				<ExperienceItem experience={experience[1]}>
					<span>
						- Sustained and enhanced core products and internal tool
						web apps using {renderedHighLightedKey("Figma")},{" "}
						{renderedHighLightedKey("Vue.js")},{" "}
						{renderedHighLightedKey("AngularJS")},{" "}
						{renderedHighLightedKey("Laravel")},{" "}
						{renderedHighLightedKey("Axios")}, and{" "}
						{renderedHighLightedKey("Node.js")}
					</span>
					<Space />
					<span>
						- {renderedHighLightedKey("Introduced Figma")} and
						produced a{" "}
						{renderedHighLightedKey("front-end documentation")} with
						Vue.js, {renderedHighLightedKey("VitePress")} and Figma
						for internal company utilization
					</span>
					<Space />
					<span>
						- Built the internal tool web app by utilizing{" "}
						{renderedHighLightedKey("Axios")},{" "}
						{renderedHighLightedKey("MySQL")} and{" "}
						{renderedHighLightedKey("Laravel")} for permission
						control and APIs for the customer support team
					</span>
					<Space />
					<span>
						- Prototyped a Node.js app that connects CPaaS{" "}
						{renderedHighLightedKey("Jambonz")} and{" "}
						{renderedHighLightedKey("Dialogflow")} to create an{" "}
						{renderedHighLightedKey("AI voice application demo")}
					</span>
					<Space />
					<span>
						- Created an {renderedHighLightedKey("SMS Bot demo")}{" "}
						using Dialogflow and Plum&apos;s APIs
					</span>
					<Space />
					<span>
						- Integrated Node.js and{" "}
						{renderedHighLightedKey("DynamoDB")} to create outbound
						APIs for a core product and used{" "}
						{renderedHighLightedKey("Jest")} for testing
					</span>
					<Space />
					<span>
						- Developed a data analysis Vue.js web app that displays
						statistical charts using{" "}
						{renderedHighLightedKey("ApexCharts")},{" "}
						{renderedHighLightedKey("D3.js")} and{" "}
						{renderedHighLightedKey("Mermaid.js")}
					</span>
					<Space />
					<span>
						-{" "}
						{renderedHighLightedKey("Maintained and reviewed code")}{" "}
						in 10+ repositories and resolved 170+ issues
					</span>
					<Space />
					<span>
						- Engaged in {renderedHighLightedKey("Agile")} work
						environment and sprint activities, which included
						participation in daily stand-up meetings and weekly code
						review sessions
					</span>
				</ExperienceItem>
				<ExperienceItem experience={experience[0]}>
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
						{renderedHighLightedKey("7 responsive static websites")}{" "}
						using {renderedHighLightedKey("React")} with the team
					</span>
					<Space />
					<span>
						- Provided {renderedHighLightedKey("Agile")} enviroment
						by scheduling weekly team meeting and bi-weekly check-up
						with each team member
					</span>
					<Space />
					<span>
						- Collaborated with other departments to deliver the
						websites
					</span>
				</ExperienceItem>
			</Timeline>
		</Group>
	);
}
