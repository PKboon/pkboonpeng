"use client";

import { ExperienceObject } from "@/types";
import {
	Badge,
	Group,
	Image,
	List,
	Text,
	Timeline,
	Title,
} from "@mantine/core";

export type ExperienceItemProps = {
	experience: ExperienceObject;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
	return (
		<Timeline.Item
			bullet={
				<Image
					src={`/images/companies${experience.logo}`}
					alt={experience.company}
					className="p-2"
				/>
			}
			className="max-w-[42.25rem] pb-3"
		>
			<div className="inline-flex flex-wrap items-baseline gap-x-1.5 gap-y-.5">
				<Title order={5} className="text-base text-primary-200">
					<a
						href={experience.website}
						target="_blank"
						className="underline"
					>
						{experience.company}
					</a>
				</Title>
				{experience.companyNote && (
					<Text className="font-bold text-base text-primary-200">
						{experience.companyNote}
					</Text>
				)}
				<Text className="text-sm text-primary-200">
					{experience.location}
				</Text>
			</div>

			<Title order={3} className="text-2xl text-secondary-400">
				{experience.position}
			</Title>

			<Text className="text-sm opacity-80 text-primary-200 mt-0.5 mb-1">
				{experience.period}
			</Text>

			<Group gap={6} className="my-3">
				{experience.skills.map((skill, index) => (
					<Badge
						key={`${experience.id}Skill${index}`}
						className="bg-transparent text-accent-5 border-accent-5 opacity-80 normal-case text-xs"
					>
						{skill}
					</Badge>
				))}
			</Group>

			<List listStyleType="disc">
				{experience.details.map((detail, index) => (
					<List.Item
						key={`${experience.id}Detail${index}`}
						className="text-base text-primary-200"
					>
						{detail}
					</List.Item>
				))}
			</List>
		</Timeline.Item>
	);
}
