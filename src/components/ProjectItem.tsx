import { LinkObject } from "@/types";
import { Card, Group, Title } from "@mantine/core";
import IconLink from "./IconLink";
import Tag from "./Tag";

export type ProjectItemProps = {
	category: string;
	name: string;
	links: LinkObject[];
	tags: string[];
};

export default function ProjectItem({
	category,
	name,
	links,
	tags,
}: ProjectItemProps) {
	return (
		<>
			<Card className="items-center bg-transparent gap-1.5">
				<Title order={6} className="text-xs text-primary-200 w-fit">
					{category}
				</Title>
				<Title order={5} className="text-2xl text-secondary-400 w-fit">
					{name}
				</Title>
				<Group className="w-fix">
					{links.map((link, index) => (
						<IconLink
							link={link}
							key={`link-${index}-${name.replaceAll(" ", "")}`}
							iconClasses="text-accent-5 h-6 w-6"
						/>
					))}
				</Group>
				<Group className="w-[18.125rem] gap-x-2 gap-y-1.5 flex justify-center">
					{tags.map((tag, index) => (
						<Tag
							label={tag}
							key={`tag-${index}-${name.replaceAll(" ", "")}`}
						/>
					))}
				</Group>
			</Card>
		</>
	);
}
