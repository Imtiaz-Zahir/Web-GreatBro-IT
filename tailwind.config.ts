import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gbDark: "#02111c",
        gbWhite: "#f8fafc",
        gbMute: "#52525b",
        gbSky: "#38bdf8",
        gbSkyV2: "#e0f2fe",
        gbBlue: "#2563eb",
        gbBlueV2: "#1d4ed8",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
