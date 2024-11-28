/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"], // Legacy equivalent to `content`
  darkMode: "class",
  theme: {
    extend: {
      // Add customizations here
    },
  },
  variants: {
    extend: {
      // Add specific variants here (if necessary for your project)
    },
  },
  plugins: [],
};
