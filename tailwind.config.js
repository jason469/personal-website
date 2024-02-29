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
        "primary-a10": "#005f5f",
        "primary-a20": "#005f5f",
        "primary-a30": "#005f5f",
        "primary-a40": "#005f5f",
        "primary-a50": "#005f5f",
        "primary-a60": "#005f5f",
        "primary-a70": "#005f5f",
        "primary-a80": "#005f5f",
        "primary-a90": "#005f5f",

        "secondary-a0": "#5F0000",
        "secondary-a10": "#5F0000",
        "secondary-a20": "#5F0000",
        "secondary-a30": "#5F0000",
        "secondary-a40": "#5F0000",
        "secondary-a50": "#5F0000",
        "secondary-a60": "#5F0000",
        "secondary-a70": "#5F0000",
        "secondary-a80": "#5F0000",
        "secondary-a90": "#5F0000",
      },
      boxShadow: {
        menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
      },
    },
  },
  plugins: [],
};
