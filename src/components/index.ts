import { LinkObject } from "@/types";
export const socialLinks: LinkObject[] = [
	{
		id: "social1",
		href: "https://github.com/PKboon/",
		icon: "github",
		tooltip: "Go to GitHub",
	},
	{
		id: "social2",
		href: "https://www.linkedin.com/in/pkboon/",
		icon: "linkedin",
		tooltip: "Go to LinkedIn",
	},
];

export * from "./ExperienceComponents";
export * from "./ProjectComponents";
export * from "./ReferrerComponents";
export * from "./SkillComponents";

export * from "./FooterSection";
export * from "./HeroSection";
export * from "./Icon";
export * from "./IconLink";
export * from "./Tag";
export * from "./TopBar";
