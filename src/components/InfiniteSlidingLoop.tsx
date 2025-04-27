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

	useEffect(() => {
		const container = containerRef.current;
		const content = contentRef.current;
		const widthProperty = `--${options.widthProperty}-width`;

		if (container && content) {
			// Ensure the browser has updated the layout before manipulating styles
			requestAnimationFrame(() => {
				const contentWidth = content.scrollWidth;

				// Duplicate the content
				content.innerHTML += content.innerHTML;
				content.style.width = content.innerHTML;

				// Direction
				content.style.setProperty(
					widthProperty,
					`${
						options?.direction === "right" ? "" : "-"
					}${contentWidth}px`
				);

				// Set up the animation
				const animationDuration =
					contentWidth / (options.speed ?? 20) + "s";
				content.style.animationDuration = animationDuration;
				content.style.setProperty(
					"--sliding-width",
					content.style.getPropertyValue(widthProperty)
				);
			});
		}
	});

	return (
		<div
			className={`relative overflow-hidden py-2.5 ${props.className}`}
			ref={containerRef}
		>
			<div
				className={`sliding-loop flex absolute gap-4 ${
					options?.direction === "right" ? "right-4" : ""
				}`}
				ref={contentRef}
			>
				{children}
			</div>
		</div>
	);
}
