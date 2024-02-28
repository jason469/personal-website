import "@/styles/globals.scss";
import "@/styles/reset.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Metadata } from "next";
import { epilogue, journeyBegins, sourceSansThree } from "@/constants/fonts.constants";
import NavigationBar from "@/components/layout/navbar/navigationbar";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: "Jason Liu",
  description: "Jason Liu's custom website to showcase his portfolio",
  icons: {
    icon: "/logos/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
            ${epilogue.variable}
            ${journeyBegins.variable}
            ${sourceSansThree.variable}
            min-h-screen
            `}
    >
      <head>
        <title>Jason Liu</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"></link>
        <link rel="shortcut icon" href="/logos/logo_red.svg" />
        <meta name="theme-color" content="#772943" />
      </head>
      <body className="h-full">
        <NavigationBar />
        <main className={`h-full`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
