/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3651BF",
        shadowborder: "#5559DD66",
      },
    },
  },
  plugins: [],
};
