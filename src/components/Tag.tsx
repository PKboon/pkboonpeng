import { Pill, PillProps } from "@mantine/core";

export type TagProps = {
    label: string;
} & PillProps;

export default function Tag({ label, ...props }: TagProps) {
    return (
        <Pill
            {...props}
            className={`${props.className} text-primary-200`}
            style={{ backgroundColor: "rgba(var(--primary-200-rgb), .2)" }}
        >
            {label}
        </Pill>
    );
}
