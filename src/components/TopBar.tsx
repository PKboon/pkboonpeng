"use client";

import { Anchor, Button, Flex, Tooltip } from "@mantine/core";
import { IconLink, RESUME_LINK, SOCIAL_LINKS } from "@/components";

export function TopBar() {
	return (
		<Flex
			align="center"
			className="py-4 px-6 sticky top-0 sm:px-[13%] sm:mx-auto md:px-[27%] justify-between z-50 shadow backdrop-blur-xl"
			style={{ backgroundColor: "rgba(var(--primary-800-rgb), .5)" }}
		>
			<Tooltip label="Jump to Projects">
				<Anchor
					underline="never"
					href="#projects"
					className="text-primary-400"
				>
					Projects
				</Anchor>
			</Tooltip>
			<Tooltip label="Jump to Experience" className="">
				<Anchor
					underline="never"
					href="#experience"
					className="text-primary-400"
				>
					Experience
				</Anchor>
			</Tooltip>

			<Flex align="center">
				{SOCIAL_LINKS.map((link) => (
					<IconLink
						key={link.id}
						link={link}
						className="text-primary-400 hover:text-primary-400"
						iconSize="1.5rem"
					/>
				))}
				<Tooltip label="View resume">
					<Button
						component="a"
						target="_blank"
						href={RESUME_LINK}
						className="text-sm text-primary-800 hover:text-primary-800 px-1.5 leading-none h-[1.3125rem] ms-1 bg-primary-400 hover:bg-primary-400"
					>
						<strong>Resume</strong>
					</Button>
				</Tooltip>
			</Flex>
		</Flex>
	);
}
