import React from "react";

export type LinkObject = {
	id: string;
	href: string;
	icon: "github" | "figma" | "web" | "linkedin" | "drive";
	tooltip?: string;
	label?: string;
};

export type ReferrerObject = {
	id: string;
	name: string;
	position: string;
	relationship: string;
	image: string;
	recommendation: React.ReactNode;
};

export type SkillObject = {
	id: string;
	label: string;
	type: string;
};

export type ProjectObject = {
	id: string;
	category: string;
	name: string;
	links: LinkObject[];
	tags: TagObject[];
};

export type TagObject = {
	id: string;
	label: string;
};

export type ExperienceObject = {
	id: string;
	logo: string;
	company: string;
	companyNote?: string;
	location: string;
	position: string;
	period: string;
	website: string;
};
