/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    colors: {
      "pr-1": "#F5F5F5",
      "pr-2": "#333333",
      "pr-3": "#098137",
      "pr-4": "#1B539E"
    },
      screens: {
        'mo': '300px',
        'mob': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
