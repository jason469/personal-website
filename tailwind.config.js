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

        // "secondary-a0": "#ffffff",
        // "secondary-a05": "#e6eef5",
        // "secondary-a10": "#cfddec",
        // "secondary-a20": "#9ebbd8",
        // "secondary-a30": "#6c9bc5",
        // "secondary-a50": "#2c7cb2",
        // "secondary-a60": "#275c82",
        // "secondary-a70": "#203e55",
        // "secondary-a80": "#16222c",
        // "secondary-a90": "#000000",

        "secondary-a0": "#ffffff",
        "secondary-a05": "#ddeaea",
        "secondary-a10": "#c9dede",
        "secondary-a20": "#93bebd",
        "secondary-a30": "#5b9f9e",
        "secondary-a50": "#008080",
        "secondary-a60": "#135f5f",
        "secondary-a70": "#15403f",
        "secondary-a80": "#112322",
        "secondary-a90": "#000000",
      },
      boxShadow: {
        menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
      },
    },
  },
  plugins: [],
};
