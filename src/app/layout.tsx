import type { Metadata } from "next";
import { Providers } from "./providers";

import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";

import "./globals.css";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

export const metadata: Metadata = {
	title: "PK Boonpeng",
	description:
		"This is a portfolio of PK Boonpeng, a Front-end Software Engineer and a UI/UX Designer",
	authors: "PK Boonpeng" as Author,
	icons: {
		icon: "/images/favicon.png",
	},
	keywords: [
		"full-stack developer",
		"frontend developer",
		"web development",
		"React",
		"Vue",
		"JavaScript",
		"TypeScript",
		"HTML",
		"CSS",
		"SCSS",
		"Nodejs",
		"RESTful API",
		"Redux",
		"responsive design",
		"UI/UX design",
		"web applications",
		"frontend technologies",
		"front-end frameworks",
		"JavaScript frameworks",
		"API integration",
		"cross-browser compatibility",
		"frontend testing",
		"Git",
		"version control",
		"CICD",
		"agile development",
		"web performance optimization",
		"pkboonpeng",
	],
	openGraph: {
		type: "website",
		url: "https://www.pkboonpeng.com/",
		title: "PK Boonpeng",
		description: `PK Boonpeng, a detail-oriented Full-Stack Software Engineer Front-End focused with experience of delivering responsive, user-centric, accessible (WCAG, a11y) web applications and reusable component libraries. Proficient in JavaScript and TypeScript, with hands-on experience in modern frameworks like React and Vue.js. Skilled in Agile development and committed to writing clean, maintainable, and scalable code by applying SOLID principles, with attention to performance and usability.`,
		siteName: "PK Boonpeng's portfolio",
		images: [
			{
				url: "https://github.com/PKboon/pk-portfolio/blob/main/public/images/thumbnail.png?raw=true",
				alt: "PK Boonpeng' website",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="googlebot" content="notranslate" />
				<ColorSchemeScript />
			</head>
			<body className="bg-accent-6">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
