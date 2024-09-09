export type LinkObject = {
	href: string;
	icon: "github" | "figma" | "web" | "linkedin";
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
