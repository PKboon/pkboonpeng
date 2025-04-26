import { ReferrerObject } from "@/types";
import { Avatar, Card, Flex, Text } from "@mantine/core";
import { SOCIAL_LINKS } from "@/components";

export type ReferrerCardProps = {
	referrer: ReferrerObject;
	children: React.ReactNode;
};

export function ReferrerCard({ referrer, children }: ReferrerCardProps) {
	return (
		<>
			<Card className="gap-2.5 w-96 h-fit bg-primary-750" radius="lg">
				<Flex align="start" className="gap-2">
					<Avatar
						src={`/images/people/${referrer.image}`}
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

				<Text
					className="text-primary-200 opacity-70 text-sm leading-6 whitespace-pre-line"
					lineClamp={16}
				>
					{children}
				</Text>

				<div className="flex justify-end gap-1">
					<a
						href={SOCIAL_LINKS[1].href}
						target="_blank"
						className="font-bold text-sm text-primary-200 opacity-80"
					>
						<span className="opacity-50">Read more on</span>{" "}
						LinkedIn
					</a>
				</div>
			</Card>
		</>
	);
}
