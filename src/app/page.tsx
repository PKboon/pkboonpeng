import ProjectItem from "@/components/ProjectItem";

export default function Home() {
	return (
		<div className="flex gap-4">
			<ProjectItem
				category="Website"
				name="PK Portfolio"
				links={[{ href: "", icon: "github", tooltip: "Go to GitHub" }]}
				tags={[
					"Figma",
					"Next.js",
					"Typescript",
					"Mantine",
					"Tailwind",
					"Bun",
					"Docker",
				]}
			/>
		</div>
	);
}
