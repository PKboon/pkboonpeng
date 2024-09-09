export type LinkObject = {
	href: string;
	icon: "github" | "figma" | "web" | "linkedin" | "drive";
	tooltip?: string;
	label?: string;
};

export type ReferrerObject = {
	name: string;
	position: string;
	relationship: string;
	image: string;
};

export type SkillObject = {
	label: string;
	type: string;
};

export type ProjectObject = {
	id: string;
	category: string;
	name: string;
	links: LinkObject[];
	tags: string[];
};
