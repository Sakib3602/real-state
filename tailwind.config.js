/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neumorphic': '-20px -20px 60px #bebebe, 20px 20px 60px #ffffff',
      }
    },
  },
  plugins: [require("daisyui")],
}

