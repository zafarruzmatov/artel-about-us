import type { Config } from "tailwindcss";
const colorsDefault = require("tailwindcss/colors");

const colors = {
    ...colorsDefault,
    ...{
        black: {
            secondary: "#4B5157",
            text: "#0F1722",
        },

        stroke: "#BCBFC2",
        "green-main": "#1DAB5F",
        "dark-green": "#006C41",
    },
};

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: colors,
        screens: {
            "2xl": { max: "1535px" },
            xl: { max: "1279px" },
            lg: { max: "1023px" },
            md: { max: "767px" },
            sm: { max: "639px" },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
            },
            screens: {
                "2xl": "1260px",
            },
        },
        extend: {
            backgroundImage: {
                "gradient-green":
                    "linear-gradient(132deg, #006c41 0%, #057d45 49.02%, #14a167 100%)",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-strategy":
                    "linear-gradient(77deg, #0b3f23 1.29%, #009b48 85.97%);",
            },
        },
        borderRadius: {
            none: "0",
            sm: "0.125rem",
            DEFAULT: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            full: "9999px",
            large: "12px",
            btn: "42px",
        },
    },
    plugins: [],
};
export default config;
