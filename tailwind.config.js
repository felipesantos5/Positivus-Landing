/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      'green': '#B9FF66',
    },
    extend: {
      spacing: {
        '37.5': '600px',
        '19,375': '310px',
      },
    },
  },
  plugins: [],
};
