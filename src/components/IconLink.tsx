import { ActionIcon, ActionIconProps, Tooltip } from "@mantine/core";
import Icon from "./Icon";
import { LinkObject } from "@/types";

export type IconLinkProps = {
	link: LinkObject;
	iconClasses?: string;
};

export default function IconLink({
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
					className={props.className}
					variant="transparent"
				>
					<Icon name={link.icon} className={iconClasses} />
				</ActionIcon>
			</Tooltip>
		</>
	);
}
