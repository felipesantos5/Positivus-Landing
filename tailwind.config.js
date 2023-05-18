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
      18: ["18", "23px"],
      20: ["20px", "28px"],
      40: ["40px", "51px"],
      30: ["30px", "36px"],
      60: ["60px", "76px"],
    },
    extend: {
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
      height: {
        68: "68",
        326: "326px",
        186: "186px",
      },
      width: {
        77: "77px",
        264: "264px",
        580: "580px",
        531: "531px",
        498: "498px",
        286: "286px",
        288: "288px",
        1440: "1440px",
        292: "292px",
        473: "473px",
        317: "317px",
        148: "148px",
        194: "194px",
        183: "183px",
        114: "114px",
        269: "269px"
      },
      maxWidt: {
        1440: "1440px",
      },

      spacing: {
        23: "-23.5px",
        347: "347px",
      },
      text: {},
    },
  },
  plugins: [],
};
