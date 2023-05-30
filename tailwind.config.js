/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "420px" },
      md: { max: "820px" },
    },
  },
  plugins: [],
  darkMode: "class",
  // ...
};
