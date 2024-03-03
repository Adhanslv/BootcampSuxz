import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			container: {
				center: true,
				padding: "1rem",
			},
			screens: {
				mobile: { max: "480px" },

				tablet: { min: "481px", max: "1023px" },
			},
			colors: {
				unguJanda: "#8C82FC",
				learning: "#44E4C9",
			},
		},
	},
	plugins: [],
};
export default config;
