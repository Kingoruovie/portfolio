import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import { baseURL } from "@/app/sitemap"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: {
    default: 'Kingoruovie Portfolio',
    template: '%s | Kingoruovie Portfolio',
  },
  description: 'I am a Mathematician, a Full stack developer and a Machine Learning Enthusiast with a Hacker\'s mindset',
  openGraph: {
    title: 'Kingoruovie Portfolio',
    description: 'I am a Mathematician, a Full stack developer and a Machine Learning Enthusiast with a Hacker\'s mindset',
    url: baseURL,
    siteName: 'Kingoruovie Portfolio',
    locale: 'en_US',
    type: 'website',
    images: {
      url: "/opengraph-image.png",
      alt: "I am a Mathematician, a Full stack developer and a Machine Learning Enthusiast with a Hacker\'s mindset"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="mt-8 mb-16 max-w-4xl mx-4 md:mx-auto md:flex md:justify-between md:mt-24 md:px-10 lg:mt-30 md:gap-10">
          <Aside />

          <main className="mt-7 md:mt-0 w-full ">
            <h1 className="hidden uppercase text-2xl mb-4 font-mono tracking-widest md:block font-bold md:mb-20">
              0ru 0v13
            </h1>
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
