import { ReferrerObject } from "@/types";
import { Avatar, Card, Group } from "@mantine/core";
export type RecommendationCardProps = {
	referrer: ReferrerObject;
	children: React.ReactNode;
};

export default function RecommendationCard({
	referrer,
	children,
}: RecommendationCardProps) {
	return (
		<>
			<Card
				className="gap-2.5 w-96"
				style={{ backgroundColor: "rgba(255, 255, 255, .1)" }}
				radius="lg"
			>
				<Group align="start" className="gap-2">
					<Avatar
						src={referrer.image}
						alt={referrer.name}
						size="lg"
						radius="xl"
					/>
					<div className="grid text-primary-100">
						<h6 className="font-bold text-md">{referrer.name}</h6>
						<span className="text-xs">{referrer.position}</span>
						<span className="text-xs opacity-70">
							{referrer.relationship}
						</span>
					</div>
				</Group>

				<span className="text-primary-200 opacity-70 text-sm leading-6">
					{children}
				</span>
			</Card>
		</>
	);
}
