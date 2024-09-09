import ProjectSection from "@/components/ProjectComponents/ProjectSection";
import RecommendationCard from "@/components/RecommendationCard";
import { ReferrerObject } from "@/types";

export default function Home() {
	const referrer: ReferrerObject = {
		name: "Mychal Chin",
		position: "VP of Professional Services at Sharpen",
		relationship: "Managed PK directly",
		image: "https://media.licdn.com/dms/image/v2/C4D03AQEadOVNPiu-aw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1593538969915?e=1731542400&v=beta&t=CYW3yu6hBHog_CoGa5qCAWAZh0bwjIOoSh4qGJIRwKs",
	};
	return (
		<div className="flex gap-4">
			<ProjectSection />
			<RecommendationCard referrer={referrer}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</RecommendationCard>
		</div>
	);
}
