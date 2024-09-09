import { ComponentProps, useEffect, useRef } from "react";

export type InfiniteSlidingLoopProps = {
	children: React.ReactNode;
};
export default function InfiniteSlidingLoop({
	children,
	...props
}: InfiniteSlidingLoopProps & ComponentProps<"div">) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const container = containerRef.current;
		const content = contentRef.current;

		if (container && content) {
			// Ensure the browser has updated the layout before manipulating styles
			requestAnimationFrame(() => {
				const contentWidth = content.scrollWidth;

				// Duplicate the content
				content.innerHTML += content.innerHTML;
				content.style.width = `${contentWidth * 2}px`; // Adjust width for double content

				// Set up the animation
				const animationDuration = contentWidth / 30 + "s";
				content.style.animation = `sliding ${animationDuration} linear infinite`;
			});
		}
	}, []);

	return (
		<div
			className={`relative overflow-hidden py-2 ${props.className}`}
			ref={containerRef}
		>
			<div className="flex absolute" ref={contentRef}>
				{children}
			</div>
		</div>
	);
}
