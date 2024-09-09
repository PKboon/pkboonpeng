import { ComponentProps } from "react";

export type IconProps = {
	name: string;
};

export default function Icon({
	name,
	...props
}: IconProps & ComponentProps<"svg">) {
	return (
		<>
			<svg {...props}>
				<use href={`icons.svg#${name}`} className={props.className} />
			</svg>
		</>
	);
}
