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

        "secondary-a0": "#ffffff",
        "secondary-a05": "#e7f0f3",
        "secondary-a10": "#cbdee6",
        "secondary-a20": "#96bece",
        "secondary-a30": "#5e9fb6",
        "secondary-a50": "#00809e",
        "secondary-a60": "#145f74",
        "secondary-a70": "#173f4d",
        "secondary-a80": "#122228",
        "secondary-a90": "#000000",
      },
      boxShadow: {
        menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
      },
    },
  },
  plugins: [],
};
