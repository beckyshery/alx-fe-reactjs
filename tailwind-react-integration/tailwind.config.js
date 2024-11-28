/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"], // Specify files to scan for classes
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {}, // Use this section to extend the default theme
  },
  plugins: [], // Add Tailwind plugins if needed
};
