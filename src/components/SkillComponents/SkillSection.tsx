import { InfiniteSlidingLoopOptions, SkillObject } from "@/types";
import { InfiniteSlidingLoop, SkillChip } from "@/components";

export function SkillSection() {
	const rows: SkillObject[][] = [
		[
			{ label: "Web development", type: "technical" },
			{ label: "Figma", type: "tool" },
			{ label: "TypeScript", type: "langframe" },
			{ label: "VS Code", type: "tool" },
			{ label: "Tailwind", type: "plugin" },
			{ label: "Next.js", type: "langframe" },
			{ label: "Clickup", type: "tool" },
			{ label: "Mantine", type: "plugin" },
			{ label: "JavaScript", type: "langframe" },
			{ label: "Vue.js", type: "langframe" },
			{ label: "Pinia", type: "plugin" },
			{ label: "Jira", type: "tool" },
			{ label: "Confluence", type: "tool" },
		],
		[
			{ label: "Slack", type: "tool" },
			{ label: "Bootstrap", type: "plugin" },
			{ label: "Git", type: "langframe" },
			{ label: "Google Suite", type: "tool" },
			{ label: "Mermaid.js", type: "plugin" },
			{
				label: "RESTful APIs development",
				type: "technical",
			},
			{ label: "Github", type: "tool" },
			{ label: "Axios", type: "plugin" },
			{ label: "Postman", type: "tool" },
			{ label: "Angular", type: "langframe" },
			{ label: "Angular Material", type: "plugin" },
			{ label: "Phpstorm", type: "tool" },
		],
		[
			{ label: "VitePress", type: "plugin" },
			{ label: "DBeaver", type: "tool" },
			{ label: "MySQL", type: "langframe" },
			{ label: "ApexCharts", type: "plugin" },
			{ label: "Lucidchart", type: "tool" },
			{ label: "Adobe Creative Suite", type: "tool" },
			{ label: "DynamoDB", type: "langframe" },
			{ label: "Database design", type: "technical" },
			{ label: "IntelliJ", type: "tool" },
		],
	];

	const rowOptions: InfiniteSlidingLoopOptions[] = [
		{
			widthProperty: "skills-1",
			speed: 22,
		},
		{
			widthProperty: "skills-2",
			speed: 17,
			direction: "right",
		},
		{
			widthProperty: "skills-3",
			speed: 25,
		},
	];
	return (
		<>
			{rows.map((row, rowIndex) => (
				<InfiniteSlidingLoop
					className="h-11"
					key={`skillRow${rowIndex}`}
					options={rowOptions[rowIndex]}
				>
					{[...row, ...row].map((skill, skillIndex) => (
						<div key={`skill${skillIndex}`}>
							<SkillChip skill={skill} />
						</div>
					))}
				</InfiniteSlidingLoop>
			))}
		</>
	);
}
