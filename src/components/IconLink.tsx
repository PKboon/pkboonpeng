import { ActionIcon, ActionIconProps, Tooltip } from "@mantine/core";
import { Icon } from "@iconify/react";
import { LinkObject } from "@/types";

export type IconLinkProps = {
	link: LinkObject;
	iconClasses?: string;
	iconSize?: string;
};

export function IconLink({
	link,
	iconClasses,
	iconSize,
	...props
}: IconLinkProps & ActionIconProps) {
	return (
		<>
			<Tooltip label={link.tooltip}>
				<ActionIcon
					component="a"
					href={link.href}
					variant="transparent"
					target="_blank"
					{...props}
				>
					<Icon
						icon={link.icon}
						className={iconClasses}
						style={{ fontSize: iconSize }}
					/>
				</ActionIcon>
			</Tooltip>
		</>
	);
}
