/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#01c228",
        secondary: "#f3f3f3",
        terciary: "##cc1d18",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "3rem",
      },
    },
    backgroundImage: {
      "hero-pattern": "url('./assets/blob.svg')",
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
