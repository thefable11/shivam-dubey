/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        serif: ['Merriweather', 'serif'], // This applies to your headings
        sans: ['Inter', 'sans-serif'],    // Optional: for UI text
        }
    },
  },
  plugins: [],
}