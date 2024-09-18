"use client";

import {
	TopBar,
	HeroSection,
	SkillSection,
	ProjectSection,
	ExperienceSection,
	ReferrerSection,
	FooterSection,
} from "@/components";

export default function Home() {
	return (
		<>
			<div className="bg-primary-800 mb-[25rem] md:mb-[22rem]">
				<TopBar />
				<main
					style={{
						boxShadow:
							"0 1.75rem 2.25rem -.75rem rgba(0, 0, 0, .3)",
					}}
				>
					<HeroSection />
					<div className="pb-16 relative -top-[9.5rem] sm:-top-[8.25rem]">
						<SkillSection />
					</div>
					<div className="flex flex-col gap-32">
						<ProjectSection />
						<ExperienceSection />
						<ReferrerSection />
					</div>
				</main>
			</div>
			<div className="fixed bottom-0 w-screen -z-10">
				<FooterSection />
			</div>
		</>
	);
}
