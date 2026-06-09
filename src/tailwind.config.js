/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-cream': '#FDFDFD', // A very light, almost white cream
        'secondary-cream': '#F5F5DC', // A slightly darker cream
        'accent-blue': '#3B82F6', // Tailwind's blue-500 for a fresh accent
        'accent-dark-blue': '#1D4ED8', // Tailwind's blue-700 for hover states
        'text-dark': '#1F2937', // Tailwind's gray-800 for main text
        'text-medium': '#4B5563', // Tailwind's gray-600 for secondary text
        'footer-dark': '#1A202C', // Dark charcoal for the footer
      },
    },
  },
  plugins: [],
}