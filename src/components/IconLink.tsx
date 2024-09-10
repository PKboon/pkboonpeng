import { ActionIcon, ActionIconProps, Tooltip } from "@mantine/core";
import { Icon } from "@/components";
import { LinkObject } from "@/types";

export type IconLinkProps = {
	link: LinkObject;
	iconClasses?: string;
};

export function IconLink({
	link,
	iconClasses,
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
					<Icon name={link.icon} className={iconClasses} />
				</ActionIcon>
			</Tooltip>
		</>
	);
}
