import "@/styles/globals.scss";
import "@/styles/reset.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Metadata } from "next";
import {
  epilogue,
  journeyBegins,
  sourceSansThree,
} from "@/constants/fonts.constants";
import NavigationBar from "@/components/layout/navbar/navigationbar";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: "Jason Liu",
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
            ${journeyBegins.variable}
            ${sourceSansThree.variable}
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
      </body>
    </html>
  );
}
