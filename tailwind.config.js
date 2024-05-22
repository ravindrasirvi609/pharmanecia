/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        'darkslategray-100': "#2f4f4f",
        'darksalmon-200': "#e9967a",
        gray: {
          "100": "rgba(255, 255, 255, 0.5)",
          "200": "rgba(255, 255, 255, 0.75)",
          "300": "rgba(0, 0, 0, 0.5)",
          "400": "rgba(255, 255, 255, 0.1)",
        },
        darksalmon: {
          "100": "#f28f74",
          "200": "#f28d73",
        },
        darkslategray: {
          "100": "#333",
          "200": "rgba(51, 51, 51, 0.5)",
        },
        cornflowerblue: {
          "100": "#689fe1",
          "200": "rgba(106, 160, 225, 0.3)",
        },
        royalblue: "#415ed4",
        black: "#000",
        thistle: "#e5d5fd",
        mediumslateblue: {
          "100": "#925fe2",
          "200": "rgba(146, 95, 226, 0.3)",
        },
        mediumpurple: "rgba(156, 111, 228, 0.3)",
      },
      spacing: {},
      fontFamily: {
        "source-sans-pro": "'Source Sans Pro'",
        spartan: "Spartan",
        poppins: "Poppins",
         spartan: ["Spartan", "sans-serif"],
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
      },
      borderRadius: {
        "base-6": "15.6px",
        "base-3": "16.3px",
        "xl-8": "20.8px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      xs: "12px",
      xl: "20px",
      "21xl": "2rem",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      lgi: "19px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      "89xl": "108px",
      "35xl": "54px",
      "2xs-4": "10.4px",
      smi: "13px",
      "xs-7": "11.7px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
