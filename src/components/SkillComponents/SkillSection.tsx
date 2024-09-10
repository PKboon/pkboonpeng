import { SkillObject } from "@/types";
import SkillChip from "./SkillChip";
import InfiniteSlidingLoop from "./InfiniteSlidingLoop";

export default function SkillSection() {
	const rows: SkillObject[][] = [
		[
			{ id: "skill1", label: "Web development", type: "technical" },
			{ id: "skill2", label: "Figma", type: "tool" },
			{ id: "skill3", label: "Typescript", type: "langframe" },
			{ id: "skill4", label: "VS Code", type: "tool" },
			{ id: "skill5", label: "Tailwind", type: "plugin" },
			{ id: "skill6", label: "Next.js", type: "langframe" },
			{ id: "skill7", label: "Mantine", type: "plugin" },
			{ id: "skill8", label: "Javascript", type: "langframe" },
			{ id: "skill9", label: "Vue.js", type: "langframe" },
			{ id: "skill10", label: "Pinia", type: "plugin" },
			{ id: "skill11", label: "Clickup", type: "tool" },
		],
		[
			{ id: "skill12", label: "Slack", type: "tool" },
			{ id: "skill13", label: "Bootstrap", type: "plugin" },
			{ id: "skill14", label: "Git", type: "langframe" },
			{ id: "skill15", label: "Google Suite", type: "tool" },
			{ id: "skill16", label: "Mermaid.js", type: "plugin" },
			{
				id: "skill17",
				label: "RESTful APIs development",
				type: "technical",
			},
			{ id: "skill18", label: "Github", type: "tool" },
			{ id: "skill19", label: "Axios", type: "plugin" },
			{ id: "skill20", label: "Phpstorm", type: "tool" },
			{ id: "skill21", label: "Postman", type: "tool" },
		],
		[
			{ id: "skill22", label: "Adobe Creative Suite", type: "tool" },
			{ id: "skill23", label: "VitePress", type: "plugin" },
			{ id: "skill24", label: "DBeaver", type: "tool" },
			{ id: "skill25", label: "MySQL", type: "langframe" },
			{ id: "skill26", label: "ApexCharts", type: "plugin" },
			{ id: "skill27", label: "Lucidchart", type: "tool" },
			{ id: "skill28", label: "Trello", type: "tool" },
			{ id: "skill29", label: "DynamoDB", type: "langframe" },
			{ id: "skill30", label: "Database design", type: "technical" },
			{ id: "skill31", label: "IntelliJ", type: "tool" },
		],
	];

	return (
		<>
			{rows.map((row, rowIndex) => (
				<InfiniteSlidingLoop
					className="h-11"
					key={`skillrow${rowIndex}`}
				>
					{row.map((skill) => (
						<div key={skill.id}>
							<SkillChip skill={skill} />
						</div>
					))}
				</InfiniteSlidingLoop>
			))}
		</>
	);
}
