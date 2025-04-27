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
		if (container && content) {
			// Ensure the browser has updated the layout before manipulating styles
			requestAnimationFrame(() => {
				const contentWidth = content.scrollWidth;

				// Duplicate the content
				content.innerHTML += content.innerHTML;

				// Direction
				content.style.setProperty(
					`${options.widthProperty}`,
					`${moveToRight ? "" : "-"}${contentWidth}px`
				);

				// Set up the animation
				content.style.animationDuration = `${
					contentWidth / (options.speed ?? 20)
				}s`;
				content.style.setProperty(
					"--sliding-width",
					content.style.getPropertyValue(options.widthProperty)
				);
			});
		}
	}, [moveToRight, options]);

	return (
		<div
			className={`relative overflow-hidden py-2.5 ${props.className}`}
			ref={containerRef}
		>
			<div
				className={`${
					options.slidingKeyframeName
				} flex absolute gap-4 ${moveToRight ? "right-4" : ""}`}
				ref={contentRef}
			>
				{children}
			</div>
		</div>
	);
}
