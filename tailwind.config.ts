import type { Config } from "tailwindcss";

const config: Config = {
   content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "4rem",
            xl: "5rem",
            "2xl": "6rem",
         },
      },
      extend: {
         colors: {
            primary: "#205295",
            secondary: "#144272",
            third: "#0A2647",
            fourth: "#2C74B3",
            pink: "#fb8e80",
         },
         scale: {
            102: "1.02",
         },
      },
   },
   plugins: [],
};
export default config;
