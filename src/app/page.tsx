"use client";

import {
	SkillSection,
	ProjectSection,
	ExperienceSection,
	ReferrerSection,
	HeroSection,
	TopBar,
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
							"0 1.125rem 2.25rem -.75rem rgba(0, 0, 0, .4)",
					}}
				>
					<HeroSection />
					<div className="pb-16 relative -top-[6.35rem] sm:-top-[5.1rem]">
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
