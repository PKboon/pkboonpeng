"use client";

import { ExperienceObject } from "@/types";
import { Image, Text, Timeline, Title } from "@mantine/core";

export type ExperienceItemProps = {
	children: React.ReactNode;
	experience: ExperienceObject;
};

export function ExperienceItem({ children, experience }: ExperienceItemProps) {
	return (
		<>
			<Timeline.Item
				bullet={
					<Image
						src={experience.logo}
						alt={experience.company}
						className="p-2"
					/>
				}
				className="max-w-[42.25rem]"
			>
				<div className="inline-flex flex-wrap items-baseline gap-x-1.5 gap-y-.5">
					<Title order={5} className="text-base text-primary-200">
						{experience.company}
					</Title>
					<Text className="text-xs text-primary-200">
						{experience.location}
					</Text>
				</div>
				<Title order={3} className="text-2xl text-secondary-400">
					{experience.position}
				</Title>
				<Text className="text-sm opacity-80 text-primary-200">
					{experience.period}
				</Text>
				{children}
			</Timeline.Item>
		</>
	);
}
