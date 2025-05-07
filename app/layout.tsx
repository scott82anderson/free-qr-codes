import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    // You can add an image URL here if you have a preview image, e.g.:
    // images: ["/og-image.png"],
    type: "website",
    url: "https://free-qr-codes.example.com", // Update with your actual URL if available
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
