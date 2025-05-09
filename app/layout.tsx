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
      <head>
        <meta name="keywords" content="free QR code generator, QR code maker, generate QR codes, online QR code, QR code creator, download QR codes, custom QR codes, QR code tool, QR code for website, QR code for business" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div style={{ position: 'fixed', left: 16, bottom: 16, zIndex: 50, display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.85)', borderRadius: 8, padding: '6px 12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <span style={{ fontSize: 13, color: '#222', marginRight: 8 }}>
            This project is open source. Contributions welcome.
          </span>
          <a href="https://github.com/scott82anderson/free-qr-codes" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" style={{ display: 'flex', alignItems: 'center' }}>
            <svg height="18" width="18" viewBox="0 0 16 16" fill="#000" aria-hidden="true" style={{ display: 'block' }}>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
