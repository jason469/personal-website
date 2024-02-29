/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      },
      fontFamily: {
        epilogue: "var(--font-epilogue)",
        journeyBegins: "var(--font-journey-begins)",
        sourceSansThree: "var(--font-source-sans-three)",
      },
      colors: {
        "primary-a0": "#ffffff",
        "primary-a05": "#ddeaea",
        "primary-a10": "#c9dede",
        "primary-a20": "#93bebd",
        "primary-a30": "#5b9f9e",
        "primary-a50": "#008080",
        "primary-a60": "#135f5f",
        "primary-a70": "#15403f",
        "primary-a80": "#112322",
        "primary-a90": "#000000",

        "secondary-a0": "#5F0000",
        "secondary-a05": "#f0dad4",
        "secondary-a10": "#e6c2b9",
        "secondary-a20": "#c98877",
        "secondary-a30": "#a74e3a",
        "secondary-a50": "#800000",
        "secondary-a60": "#600d01",
        "secondary-a70": "#420f01",
        "secondary-a80": "#260d00",
        "secondary-a90": "#000000",
      },
      boxShadow: {
        menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
      },
    },
  },
  plugins: [],
};
