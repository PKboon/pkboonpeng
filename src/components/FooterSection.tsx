import { IconLink, socialLinks } from "@/components";
import { Anchor, Flex, Title } from "@mantine/core";

export function FooterSection() {
	return (
		<footer className="text-primary-800 pt-20 pb-5 overflow-hidden">
			<div className="w-[90%] lg:w-3/4 mx-auto min-h-80 grid">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 place-content-center">
					<div className="text-center md:text-start">
						<Title order={1} className="text-4xl sm:text-5xl">
							PK Boonpeng
						</Title>
						<Title order={2} className="text-base font-normal">
							Front-end Software Engineer
						</Title>
						<Title order={2} className="text-base font-normal">
							UI/UX designer
						</Title>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2">
						<div className="flex flex-col text-center md:text-start">
							<Anchor
								underline="never"
								href="#projects"
								className="text-primary-800 text-lg font-semibold"
							>
								Projects
							</Anchor>
							<Anchor
								underline="never"
								href="#experience"
								className="text-primary-800 text-lg font-semibold"
							>
								Experience
							</Anchor>
						</div>
						<div className="flex flex-col gap-.5 text-center md:text-start">
							<Anchor
								underline="never"
								target="_blank"
								href="https://drive.google.com/file/d/1Lq1UxBjXTS7jID9nc8qRVk8T3MhcJTnG/view?usp=sharing"
								className="text-primary-800 text-lg font-semibold"
							>
								View full resume
							</Anchor>
							<Flex className="self-center md:self-start -ms-1.5 gap-1">
								{socialLinks.map((link) => (
									<IconLink
										key={link.id}
										link={link}
										className="text-primary-800 hover:text-primary-800"
										iconSize="2rem"
									/>
								))}
							</Flex>
						</div>
					</div>
				</div>

				<div className="text-sm text-center font-extralight place-content-end">
					Pikulkaew Boonpeng © 2024
				</div>
			</div>
		</footer>
	);
}
