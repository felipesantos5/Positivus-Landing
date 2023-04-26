/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: "#B9FF66",
      black: "#000000",
      white: "#FFFFFF",
      grey: "#F3F3F3",
      darkGrey: "#191A23",
    },
    extend: {
      spacing: {
        37.5: "600px",
        "19,375": "310px",
      },
      bgColor: {
        bggreen: "bg-green",
        bgdarkGrey: "bg-grey",
        bgwhite: "bg-white",
      },
    },
  },
  plugins: [],
};
