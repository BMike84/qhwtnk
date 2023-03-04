/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      screens: {
        smXl: "520px",
        mdSm: "600px",
        md900: "900px",
      },
    },
  },
  plugins: [],
};
