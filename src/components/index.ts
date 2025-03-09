import { LinkObject } from "@/types";
export const SOCIAL_LINKS: LinkObject[] = [
	{
		id: "social1",
		href: "https://github.com/PKboon/",
		icon: "mdi:github",
		tooltip: "Go to GitHub",
	},
	{
		id: "social2",
		href: "https://www.linkedin.com/in/pkboon/",
		icon: "mdi:linkedin",
		tooltip: "Go to LinkedIn",
	},
];
export const RESUME_LINK: string =
	"https://drive.google.com/file/d/1M_LjNDKdWVb1E8qbaCtWJocBkDCxO45o/view?usp=sharing";

export * from "./ExperienceComponents";
export * from "./ProjectComponents";
export * from "./ReferrerComponents";
export * from "./SkillComponents";

export * from "./FooterSection";
export * from "./HeroSection";
export * from "./IconLink";
export * from "./Tag";
export * from "./TopBar";
