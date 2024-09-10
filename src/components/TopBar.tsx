"use client";

import { Anchor, Button, Center, Flex, Tooltip } from "@mantine/core";
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
		<>
			<div className="hidden sm:block py-3">
				<Flex
					align="center"
					justify="space-between"
					className="max-w-[30.75rem] mx-auto"
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
					<Tooltip label="Jump to Experience">
						<Anchor
							underline="never"
							href="#experience"
							className="text-primary-400"
						>
							Experience
						</Anchor>
					</Tooltip>

					<Flex align="center">
						{links.map((link) => (
							<IconLink
								link={link}
								className="text-primary-400 hover:text-primary-400"
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
			</div>
		</>
	);
}
