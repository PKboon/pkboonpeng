"use client";

import { InfiniteSlidingLoopOptions } from "@/types";
import { ComponentProps, useEffect, useRef } from "react";

export type InfiniteSlidingLoopProps = {
	children: React.ReactNode;
	options: InfiniteSlidingLoopOptions;
};

export function InfiniteSlidingLoop({
	children,
	options,
	...props
}: InfiniteSlidingLoopProps & ComponentProps<"div">) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);
	const moveToRight = options?.direction === "right";

	useEffect(() => {
		const container = containerRef.current;
		const content = contentRef.current;
		const widthProperty = `--${options.widthProperty}-width`;

		if (container && content) {
			// Ensure the browser has updated the layout before manipulating styles
			requestAnimationFrame(() => {
				const originalContentWidth = content.clientWidth;

				// Duplicate the content
				content.innerHTML += content.innerHTML;
				content.style.width = `${originalContentWidth * 2}px`;

				// Direction
				content.style.setProperty(
					`${widthProperty}`,
					`${moveToRight ? "" : "-"}${originalContentWidth}px`
				);
				content.style.setProperty(
					"--sliding-width",
					`var(${widthProperty})`
				);

				// Set up the animation
				const animationDuration = `${
					originalContentWidth / (options.speed ?? 20)
				}s`;
				content.style.animation = `sliding-loop ${animationDuration} linear infinite`;
			});
		}
	}, [
		moveToRight,
		options?.direction,
		options?.speed,
		options.widthProperty,
	]);

	return (
		<div
			className={`relative overflow-hidden py-2.5 ${props.className}`}
			ref={containerRef}
		>
			<div
				className={`sliding-loop flex absolute gap-4 ${
					moveToRight ? "right-4" : ""
				}`}
				ref={contentRef}
			>
				{children}
			</div>
		</div>
	);
}
