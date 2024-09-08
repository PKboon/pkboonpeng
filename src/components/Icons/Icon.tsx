import { ComponentProps } from "react";

export type IconProps = {
    name: string;
    color: string;
};

export default function Icon({
    name,
    color,
    ...props
}: IconProps & ComponentProps<"svg">) {
    return (
        <>
            <svg {...props}>
                <use href={`icons.svg#${name}`} className={`text-${color}`} />
            </svg>
        </>
    );
}
