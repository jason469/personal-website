import '@/styles/globals.scss'
import '@/styles/reset.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Metadata} from "next";
import {
    arizonia,
    cevicheOne,
    cormorantSC,
    eczar,
    kavoon,
    lato,
    playfairDisplay,
    shrikhand
} from "@/constants/fonts.constants";
import NavigationBar from "@/components/layout/navbar/navigationbar";
import Footer from "@/components/layout/footer/footer";


export const metadata: Metadata = {
    title: 'Jason Liu',
    description: "Jason Liu's custom website to showcase his portfolio",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={`
            ${lato.variable} 
            ${cevicheOne.variable} 
            ${cormorantSC.variable} 
            ${eczar.variable}
            ${arizonia.variable}
            ${kavoon.variable}
            ${playfairDisplay.variable}
            ${shrikhand.variable}
            `}
        >
        <head>
            <title>Jason Liu</title>
            {/*<link rel="manifest" href="/manifest.json"/>*/}
            {/*<link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>*/}
            {/*<link rel="shortcut icon" href="/favicon.ico"/>*/}
            {/*<meta name="theme-color" content="#542e23"/>*/}
        </head>
        <body>
        <NavigationBar/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    )
}
