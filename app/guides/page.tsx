import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QR Code Guides - Free QR Code Generator",
  description: "Learn everything about QR codes: how to create them, use cases, safety tips, static vs dynamic codes, and more.",
  openGraph: {
    title: "QR Code Guides - Free QR Code Generator",
    description: "Learn everything about QR codes: how to create them, use cases, safety tips, static vs dynamic codes, and more.",
    type: "website",
    url: "https://free-qr-codes.net/guides",
  },
};

const guides = [
  {
    href: "/guides/how-to-create-qr-code",
    title: "How to Create a QR Code: Complete Guide",
    excerpt:
      "A step-by-step guide to creating QR codes for any purpose, from choosing the right type to printing and testing your code.",
  },
  {
    href: "/guides/static-vs-dynamic-qr-codes",
    title: "Static vs Dynamic QR Codes: Which Should You Use?",
    excerpt:
      "Understand the differences between static and dynamic QR codes, their pros and cons, and when to use each type.",
  },
  {
    href: "/guides/qr-code-use-cases",
    title: "10 Creative QR Code Use Cases for 2026",
    excerpt:
      "Discover innovative ways businesses and individuals are using QR codes, from contactless menus to interactive marketing campaigns.",
  },
  {
    href: "/guides/qr-code-business-card",
    title: "How to Create a QR Code for Your Business Card",
    excerpt:
      "Learn how to add a QR code to your business card to instantly share your contact information, website, or portfolio.",
  },
  {
    href: "/guides/are-qr-codes-safe",
    title: "Are QR Codes Safe? Security Guide",
    excerpt:
      "Learn about QR code security risks, how to identify malicious codes, and best practices for staying safe when scanning.",
  },
];

export default function GuidesIndexPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">QR Code Guides</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
        Whether you are new to QR codes or looking to get more out of them, our guides cover
        everything from creating your first code to advanced use cases and security best practices.
        Each guide is written to be practical and actionable, with links to our{" "}
        <Link href="/" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
          free QR code generator
        </Link>{" "}
        so you can put what you learn into practice immediately.
      </p>

      <div className="grid gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="block p-6 bg-white dark:bg-black/40 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {guide.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {guide.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
