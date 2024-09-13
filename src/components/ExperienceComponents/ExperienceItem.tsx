"use client";

import { ExperienceObject } from "@/types";
import { Image, Text, Timeline, Title } from "@mantine/core";

export type ExperienceItemProps = {
	children: React.ReactNode;
	experience: ExperienceObject;
};

export function ExperienceItem({ children, experience }: ExperienceItemProps) {
	return (
		<Timeline.Item
			bullet={
				<Image
					src={experience.logo}
					alt={experience.company}
					className="p-2"
				/>
			}
			className="max-w-[42.25rem] pb-3"
		>
			<div
				className="hover:bg-primary-750 cursor-pointer rounded-2xl px-4 py-2"
				onClick={() => window.open(`${experience.website}`, "_blank")}
			>
				<div className="inline-flex flex-wrap items-baseline gap-x-1.5 gap-y-.5">
					<Title order={5} className="text-base text-primary-200">
						{experience.company}
					</Title>
					{experience.companyNote && (
						<Text className="font-bold text-xs text-primary-200">
							{experience.companyNote}
						</Text>
					)}
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

				<span className="text-sm text-primary-200 opacity-80">
					{children}
				</span>
			</div>
		</Timeline.Item>
	);
}
