import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BuyMeACoffee from "./components/BuyMeACoffee";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free QR Code Generator",
  description: "Generate QR codes instantly for free with our easy-to-use online QR Code Generator.",
  openGraph: {
    title: "Free QR Code Generator",
    description: "Generate QR codes instantly for free with our easy-to-use online QR Code Generator.",
    type: "website",
    url: "https://free-qr-codes.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="free QR code generator, QR code maker, generate QR codes, online QR code, QR code creator, download QR codes, custom QR codes, QR code tool, QR code for website, QR code for business" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
        <BuyMeACoffee />
      </body>
    </html>
  );
}
