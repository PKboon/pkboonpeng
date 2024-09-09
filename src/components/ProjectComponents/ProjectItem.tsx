import { ProjectObject } from "@/types";
import { Group, Title } from "@mantine/core";
import IconLink from "../IconLink";
import Tag from "../Tag";
import { ComponentProps } from "react";

export type ProjectItemProps = {
	project: ProjectObject;
};

export default function ProjectItem({
	project,
	className,
	...props
}: ProjectItemProps & ComponentProps<"div">) {
	return (
		<>
			<div
				className={`flex flex-col items-center bg-transparent gap-1.5 w-fit ${className}`}
				{...props}
			>
				<Title order={6} className="text-xs text-primary-200 w-fit">
					{project.category}
				</Title>
				<Title
					order={5}
					className="text-2xl text-secondary-400 text-center w-fit"
				>
					{project.name}
				</Title>
				<Group className="w-fix">
					{project.links.map((link, index) => (
						<IconLink
							link={link}
							key={`link-${index}-${project.name.replaceAll(
								" ",
								""
							)}`}
							iconClasses="text-accent-5"
						/>
					))}
				</Group>
				<Group className="w-[18.125rem] gap-x-2 gap-y-1.5 flex justify-center">
					{project.tags.map((tag, index) => (
						<Tag
							label={tag}
							key={`tag-${index}-${project.name.replaceAll(
								" ",
								""
							)}`}
						/>
					))}
				</Group>
			</div>
		</>
	);
}
