import '../styles/globals.css'
import { ReactNode } from 'react'
import type { Metadata } from "next";
import { Footer } from './footer/footer'
import { Header } from './header/header'
import localFont from "next/font/local";
import styles from "./layout.module.css";

// TODO: Keeping these variables for now as inspiration, but they are not used in the layout
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
      <meta name="theme-color" content="#fff" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@JavaZone" />
      <meta name="twitter:image:alt" content="JavaZone logo" />
      <meta
        name="description"
        content="JavaZone - The biggest community-driven Java conference."
      />
      <meta property="og:title" content="JavaZone 2025" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://2025.javazone.no" />
      <meta property="og:description" content="The biggest community-driven Java conference." />
      <meta property="og:site_name" content="javazone.no" />
      <title>JavaZone 2025</title>
    </head>
    <body className={styles.hasNavbarFixedTop}>

    <Header/>
    <div className={`${styles.hero} ${styles.isFullHeight}`}>
      <div className={styles.heroBody}>
        <div className={`${styles.container} ${styles.isMaxDesktop}`}>
          {children}
        </div>
      </div>
    </div>
    <div className={styles.heroFoot}>
      <Footer/>
    </div>
    </body>
    </html>
  );
}
