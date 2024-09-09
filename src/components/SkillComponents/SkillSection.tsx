import { SkillObject } from "@/types";
import SkillChip from "./SkillChip";
import InfiniteSlidingLoop from "./InfiniteSlidingLoop";

export default function SkillSection() {
	const rows: SkillObject[][] = [
		[
			{ label: "Web development", type: "technical" },
			{ label: "Figma", type: "tool" },
			{ label: "Typescript", type: "langframe" },
			{ label: "VS Code", type: "tool" },
			{ label: "Tailwind", type: "plugin" },
			{ label: "Next.js", type: "langframe" },
			{ label: "Mantine", type: "plugin" },
			{ label: "Javascript", type: "langframe" },
			{ label: "Vue.js", type: "langframe" },
			{ label: "Pinia", type: "plugin" },
			{ label: "Clickup", type: "tool" },
		],
		[
			{ label: "Slack", type: "tool" },
			{ label: "Bootstrap", type: "plugin" },
			{ label: "Git", type: "langframe" },
			{ label: "Google Suite", type: "tool" },
			{ label: "Mermaid.js", type: "plugin" },
			{ label: "RESTful APIs development", type: "technical" },
			{ label: "Github", type: "tool" },
			{ label: "Axios", type: "plugin" },
			{ label: "Phpstorm", type: "tool" },
			{ label: "Postman", type: "tool" },
		],
		[
			{ label: "Adobe Creative Suite", type: "tool" },
			{ label: "VitePress", type: "plugin" },
			{ label: "DBeaver", type: "tool" },
			{ label: "MySQL", type: "langframe" },
			{ label: "ApexCharts", type: "plugin" },
			{ label: "Lucidchart", type: "tool" },
			{ label: "Trello", type: "tool" },
			{ label: "DynamoDB", type: "langframe" },
			{ label: "Database design", type: "technical" },
			{ label: "IntelliJ", type: "tool" },
		],
	];

	return (
		<>
			{rows.map((row, rowIndex) => (
				<InfiniteSlidingLoop
					className="h-11"
					key={`skill-row-${rowIndex}`}
				>
					{row.map((item, chipIndex) => (
						<div key={`skill-chip-${chipIndex + rowIndex}`}>
							<SkillChip label={item.label} type={item.type} />
						</div>
					))}
				</InfiniteSlidingLoop>
			))}
		</>
	);
}
