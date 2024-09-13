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
		"software",
		"engineer",
		"portfolio",
		"resume",
		"frontend",
		"fronnt-end",
		"pikulkaew",
		"ui",
		"ux",
		"designer",
	],
	openGraph: {
		type: "website",
		url: "https://pkboon.github.io/pkboonpeng",
		title: "PK Boonpeng",
		description:
			"PK Boonpeng's portfolio | Front-end Software Engineer and UI/UX Designer",
		siteName: "PK Boonpeng's portfolio",
		images: [
			{
				url: "https://github.com/PKboon/pk-portfolio/blob/3-refactorclean-up-code/public/images/thumbnail.png",
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
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta name="googlebot" content="notranslate" />
				<ColorSchemeScript />
			</head>
			<body className="bg-accent-6">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
