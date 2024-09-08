/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            primary: {
                800: "var(--primary-800)",
                400: "var(--primary-400)",
                200: "var(--primary-200)",
                100: "var(--primary-100)",
            },
            secondary: {
                400: "var(--secondary-400)",
            },
            accent: {
                1: "var(--accent-1)",
                2: "var(--accent-2)",
                3: "var(--accent-3)",
                4: "var(--accent-4)",
                5: "var(--accent-5)",
                6: "var(--accent-6)",
            },
        },
    },
    plugins: [],
};
