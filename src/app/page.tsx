"use client";

import {
	SkillSection,
	ProjectSection,
	ExperienceSection,
	ReferrerSection,
	HomeSection,
	TopBar,
} from "@/components";

export default function Home() {
	return (
		<>
			<TopBar />
			<HomeSection />
			<div className="pb-48 relative -top-11 sm:-top-[4.75rem]">
				<SkillSection />
			</div>
			<div className="flex flex-col gap-y-48">
				<ProjectSection />
				<ExperienceSection />
				<ReferrerSection />
			</div>
		</>
	);
}
