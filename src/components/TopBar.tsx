"use client";

import { Anchor, Button, Flex, Tooltip } from "@mantine/core";
import { IconLink } from "@/components";
import { LinkObject } from "@/types";

export function TopBar() {
	const links: LinkObject[] = [
		{
			id: "profile1",
			href: "https://github.com/PKboon/",
			icon: "github",
			tooltip: "Go to GitHub",
		},
		{
			id: "profile2",
			href: "https://www.linkedin.com/in/pkboon/",
			icon: "linkedin",
			tooltip: "Go to LinkedIn",
		},
	];
	return (
		<Flex
			align="center"
			className="w-screen py-3 justify-center sm:w-[30.75rem] sm:mx-auto sm:justify-between"
		>
			<Tooltip label="Jump to Projects">
				<Anchor
					underline="never"
					href="#projects"
					className="text-primary-400 hidden sm:block"
				>
					Projects
				</Anchor>
			</Tooltip>
			<Tooltip label="Jump to Experience" className="">
				<Anchor
					underline="never"
					href="#experience"
					className="text-primary-400 hidden sm:block"
				>
					Experience
				</Anchor>
			</Tooltip>

			<Flex align="center">
				{links.map((link) => (
					<IconLink
						link={link}
						className="text-primary-400 hover:text-primary-400"
						key={link.id}
					/>
				))}
				<Tooltip label="View resume">
					<Button
						component="a"
						target="_blank"
						href="https://drive.google.com/file/d/1Lq1UxBjXTS7jID9nc8qRVk8T3MhcJTnG/view?usp=sharing"
						className="text-sm text-primary-800 hover:text-primary-800 px-1.5 leading-none h-[1.3125rem] ms-1 bg-primary-400 hover:bg-primary-400"
					>
						<strong>Resume</strong>
					</Button>
				</Tooltip>
			</Flex>
		</Flex>
	);
}
