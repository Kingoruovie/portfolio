import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Aside from "@/components/Aside";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kingoruovie",
  description: "A portfolio HACK",
  openGraph: {
    title: "Kingoruvie",
    description: "A portfolio HACK",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "👋🏻I am a Mathematician, a FULLSTACK developer, an ML Enthusiast with a Hacker's Mindset",
      },
    ],
  },
};

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
        <div className="mt-8 mb-16 max-w-4xl mx-4 md:mx-auto md:flex md:justify-between md:mt-24 md:px-10 lg:mt-30">
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
