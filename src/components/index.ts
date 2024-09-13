import { LinkObject } from "@/types";
const socialLinks: LinkObject[] = [
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

import { TopBar } from "./TopBar";
import { HeroSection } from "./HeroSection";
import {
	InfiniteSlidingLoop,
	InfiniteSlidingLoopProps,
} from "./SkillComponents/InfiniteSlidingLoop";
import { SkillChip, SkillChipProps } from "./SkillComponents/SkillChip";
import { SkillSection } from "./SkillComponents/SkillSection";
import { Tag, TagProps } from "./ProjectComponents/Tag";
import { ProjectItem, ProjectItemProps } from "./ProjectComponents/ProjectItem";
import { ProjectSection } from "./ProjectComponents/ProjectSection";
import {
	ExperienceItem,
	ExperienceItemProps,
} from "./ExperienceComponents/ExperienceItem";
import { ExperienceSection } from "./ExperienceComponents/ExperienceSection";
import {
	ReferrerCard,
	ReferrerCardProps,
} from "./ReferrerComponents/ReferrerCard";
import { ReferrerSection } from "./ReferrerComponents/ReferrerSection";
import { FooterSection } from "./FooterSection";

import { Icon, IconProps } from "./Icon";
import { IconLink, IconLinkProps } from "./IconLink";

export {
	socialLinks,
	TopBar,
	HeroSection,
	InfiniteSlidingLoop,
	SkillChip,
	SkillSection,
	Tag,
	ProjectItem,
	ProjectSection,
	ExperienceItem,
	ExperienceSection,
	ReferrerCard,
	ReferrerSection,
	FooterSection,
	Icon,
	IconLink,
};
export type {
	InfiniteSlidingLoopProps,
	SkillChipProps,
	TagProps,
	ProjectItemProps,
	ExperienceItemProps,
	ReferrerCardProps,
	IconProps,
	IconLinkProps,
};
