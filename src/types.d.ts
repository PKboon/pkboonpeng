export type LinkObject = {
	id: string;
	href: string;
	icon: string;
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
	label: string;
	type: string;
};

export type ExperienceObject = {
	id: string;
	logo: string;
	company: string;
	companyNote?: string;
	location: string;
	position: string;
	skills: string[];
	period: string;
	website: string;
	details: string[];
};

export type ProjectObject = {
	id: string;
	category: string;
	name: string;
	links: LinkObject[];
	tags: TagObject[];
};

export type InfiniteSlidingLoopOptions = {
	widthProperty: string;
	speed?: number;
	direction?: "left" | "right";
};

export type TagObject = {
	id: string;
	label: string;
};
