import "@/styles/globals.scss";
import "@/styles/reset.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Metadata } from "next";
import {
  epilogue,
  arizonia,
  sourceSansThree,
} from "@/constants/fonts.constants";
import NavigationBar from "@/components/layout/navbar/navigationbar";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: "I'm Jason Liu",
  description:
    "The portfolio for Jason Liu, a really passionate software developer over in Aussie. I specialise in app development across a variety of frameworks, and bring a great deal of energy and noise to a team",
  icons: {
    icon: "/logos/favicon.ico",
  },
  openGraph: {
    title: "Jason Liu",
    description:
      "The portfolio for Jason Liu, a really passionate software developer over in Aussie. I specialise in app development across a variety of frameworks, and bring a great deal of energy and noise to a team",
    url: "https://www.jasonliudev.com",
    type: "website",
  },
  applicationName: "Jason Liu",
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
            ${sourceSansThree.variable}
            ${arizonia.variable}
            `}
    >
      <head>
        {/* Base tags */}
        <meta name="robots" content="noindex" />
        <meta name="author" content="Jason Liu"></meta>
        <meta name="referrer" content="origin"></meta>
        <meta name="color-scheme" content="normal"></meta>

        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/logos/logo.png"
        ></link>
        <link rel="shortcut icon" type="image/png" href="/logos/logo.png" />
        <meta name="theme-color" content="#008080" />

        {/* Open Graph */}
        <meta property="og:image" content="/logos/logo.png" />
      </head>
      <body className="">
        <NavigationBar />
        <main className={``}>{children}</main>
        <Footer />

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
