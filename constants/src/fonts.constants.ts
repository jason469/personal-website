import {
  Epilogue,
  Source_Sans_3,
  Arizonia
} from "next/font/google";
import localFont from "next/font/local";


export const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-epilogue",
});

export const sourceSansThree = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-source-sans-three",
});

export const arizonia = Arizonia({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-arizonia",
});


// export const downloadedFont = localFont({
//   src: [
//     {
//       path: "../public/fonts/downloadedFont/downloadedFont.ttf",
//       weight: "400",
//     },
//   ],
//   variable: "--font-downloaded-font",
// });
