import { ReferrerObject } from "@/types";
import { Avatar, Card, Flex, Text } from "@mantine/core";
import { IconLink } from "@/components";

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

				<Text
					className="text-primary-200 opacity-70 text-sm leading-6 whitespace-pre-line"
					lineClamp={16}
				>
					{children}
				</Text>

				<div className="flex justify-end items-center gap-1">
					<span className="font-bold text-sm text-primary-200 opacity-30">
						Read more on{" "}
					</span>
					<IconLink
						link={{
							id: `link${referrer.id}`,
							href: "https://www.linkedin.com/in/pkboon/",
							icon: "mdi:linkedin",
							tooltip: "Go to Linkedin",
						}}
						className="text-primary-200 opacity-40 w-8 h-8"
						iconSize="1.75rem"
					/>
				</div>
			</Card>
		</>
	);
}
