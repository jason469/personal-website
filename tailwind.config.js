/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: "var(--font-epilogue)",
        journeyBegins: "var(--font-journey-begins)",
      },
      colors: {
        "nav-border": "#EBEAEA",

        "light-white": "#FAFAFB",
        "light-white-100": "#F1F4F5",
        "light-white-200": "#d7d7d7",
        "light-white-300": "#F3F3F4",
        "light-white-400": "#E2E5F1",
        "light-white-500": "#E4E4E4",

        "primary-blue": "#201a57",
        "primary-blue-750": "#392f9c",
        "primary-blue-500": "#5649c9",
        "primary-blue-250": "#9992de",
        "primary-blue-100": "#cfccf0",

        "primary-purple": "#290d2c",
        "primary-purple-750": "#7c2785",
        "primary-purple-500": "#bc47c9",
        "primary-purple-250": "#d894df",
        "primary-purple-100": "#e9c3ed",
        "primary-purple-50": "#f4e0f6",

        "primary-grey": "#b8b8c0",
        "primary-grey-500": "#d8d8dd",
        "primary-grey-250": "#e6e6e9",

        "primary-brown": "#2f231b",
        "primary-brown-750": "#6d513f",
        "primary-brown-500": "#a47b60",
        "primary-brown-250": "#c9b1a1",
        "primary-brown-100": "#e0d3ca",
        "primary-brown-50": "#efe7e3",

        "secondary-dark-blue": "#07151b",
        "secondary-dark-blue-750": "#1f5d78",
        "secondary-dark-blue-500": "#349dca",
        "secondary-dark-blue-250": "#8ac7e1",
        "secondary-dark-blue-100": "#bbdeed",
        "secondary-dark-blue-50": "#daedf5",
      },
      boxShadow: {
        menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
      },
    },
  },
  plugins: [],
};
