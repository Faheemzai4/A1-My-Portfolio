RiTailwindCssFill.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // if using /app directory
    "./pages/**/*.{js,ts,jsx,tsx}",      // if using /pages
    "./components/**/*.{js,ts,jsx,tsx}"  // all your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
