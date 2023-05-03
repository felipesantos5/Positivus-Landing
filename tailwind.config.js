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
    fontSize: {
      40: "40px",
      30: ["30px", "36px"],
    },
    extend: {
      spacing: {
        37.5: "600px",
        19.375: "310px",
        600: "600px",
        310: "310px",
        72: "72px",
      },
      bgColor: {
        bggreen: "bg-green",
        bgdarkGrey: "bg-grey",
        bgwhite: "bg-white",
      },
      dropShadow: {
        cardShadow: "0 5px 0 rgba(25, 26, 35, 1)",
      },
      borderRadius: {
        cardRadius: "45px",
      },
      width: {
        264: "264px",
        580: "580px",
        531: "531px",
        498: "498px",
      },
      text: {},
    },
  },
  plugins: [],
};
