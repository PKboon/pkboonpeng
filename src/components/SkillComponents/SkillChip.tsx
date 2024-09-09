import { ComponentProps } from "react";

export type SkillChipProps = {
	label: string;
	type: string;
};

export default function SkillChip({
	label,
	type,
	...props
}: SkillChipProps & ComponentProps<"div">) {
	const color = () => {
		switch (type) {
			case "tool":
				return "accent-1";
			case "plugin":
				return "accent-2";
			case "langframe":
				return "accent-3";
			case "technical":
				return "accent-4";
		}
	};

	const styles = {
		color: `var(--${color()})`,
		borderGlow: `0 0 8px 0`,
		textGlow: `1px 0 8px`,
	};

	return (
		<>
			<div
				{...props}
				className={`border rounded-full px-6 py-1 leading-7 text-nowrap inline ms-4`}
				style={{
					borderColor: styles.color,
					boxShadow: `${styles.borderGlow} ${styles.color}, inset ${styles.borderGlow} ${styles.color}`,
					color: styles.color,
					textShadow: `${styles.color} ${styles.textGlow}`,
				}}
			>
				{label}
			</div>
		</>
	);
}
