import { Pill, PillProps } from "@mantine/core";

export type TagProps = {
	label: string;
} & PillProps;

export default function Tag({ label, className, ...props }: TagProps) {
	return (
		<Pill
			{...props}
			className={`${className} text-primary-200 text-xs px-3`}
			style={{ backgroundColor: "rgba(var(--primary-200-rgb), .2)" }}
			size="sm"
		>
			{label}
		</Pill>
	);
}
