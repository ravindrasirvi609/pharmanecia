import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#231F20",
        green: "#2C5F2D",
        darkBrown: "#6D2200",
        lightBrown: "#B5814F",
        ochre: "#C75400",
        grey: "#C8BEB7",
        lightGrey: "#C8BEB7",
        ashGrey: "#E3DEDB",
        red: "#EF4444",
        white: "#FFFFFF",
        primary: "#021373",
        secondary: "#022873",
        accent: "#034C8C",
        danger: "#D94814",
        light: "#F2F2F2",
        darkgray: "#CACACA",
      },
    },

    keyframes: {
      "accordion-down": {
        from: {
          height: "0",
        },
        to: {
          height: "var(--radix-accordion-content-height)",
        },
      },
      "accordion-up": {
        from: {
          height: "var(--radix-accordion-content-height)",
        },
        to: {
          height: "0",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
