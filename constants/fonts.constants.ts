import {
  Epilogue
} from "next/font/google";
import localFont from "@next/font/local";


export const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-epilogue",
});


export const journeyBegins = localFont({
  src: [
    {
      path: "../public/fonts/JourneyBegins/JourneyBegins.ttf",
      weight: "400",
    },
  ],
  variable: "--font-journey-begins",
});
