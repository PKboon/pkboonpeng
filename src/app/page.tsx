"use client";

import {
	SkillSection,
	ProjectSection,
	ExperienceSection,
	ReferrerSection,
	HeaderSection,
} from "@/components";

export default function Home() {
	return (
		<>
			<HeaderSection />

			<div className="pb-48 relative -top-11">
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
