import { ReferrerObject } from "@/types";
import { Avatar, Card, Flex } from "@mantine/core";
export type ReferrerCardProps = {
	referrer: ReferrerObject;
	children: React.ReactNode;
};

export default function ReferrerCard({
	referrer,
	children,
}: ReferrerCardProps) {
	return (
		<>
			<Card
				className="gap-2.5 w-96 h-fit"
				style={{ backgroundColor: "rgba(255, 255, 255, .2)" }}
				radius="lg"
			>
				<Flex align="start" className="gap-2">
					<Avatar
						src={referrer.image}
						alt={referrer.name}
						className="min-w-[4.5rem] min-h-[4.5rem] rounded-full"
					/>
					<div className="grid text-primary-100">
						<h6 className="font-bold text-md">{referrer.name}</h6>
						<span className="text-xs break-words">
							{referrer.position}
						</span>
						<span className="text-xs opacity-70 break-words">
							{referrer.relationship}
						</span>
					</div>
				</Flex>

				<span className="text-primary-200 opacity-70 text-sm leading-6 whitespace-pre-line">
					{children}
				</span>
			</Card>
		</>
	);
}
