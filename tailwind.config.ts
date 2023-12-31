import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "design-green": "#015C6B",
        "design-light-green": "#6AC2C7",
        "design-dark-green": "#012135",
        "design-yellow": "#EBB785",
        "design-light-yellow": "#FFEAD8",
        "design-dark": "#1F1F24",
        "design-light": "#FAFAFA",
        "design-light-gray": "#F2EFE8",
        'design-cyan': '#0F8BA0',
        'design-extralight-yellow': '#F2EFE8',
      },
      fontFamily: {
        sans: ['var(--font-avenir)'],
        condensed: ['var(--font-avenir-condensed)'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
