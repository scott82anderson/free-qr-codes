import Link from "next/link";
import QrGenerator from "./components/QrGenerator";
import AdUnit from "./components/AdUnit";
import Sidebar from "./components/Sidebar";
import ContentSections from "./components/ContentSections";

export default function Home() {
  return (
    <div className="flex font-[family-name:var(--font-geist-sans)]">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <main className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto p-8 sm:p-12">
          {/* Intro Section */}
          <section id="intro" className="w-full">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Free QR Code Generator
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
              QR codes have become an essential part of everyday life, connecting the physical world
              to digital content with a simple scan. Whether you are a business owner looking to share
              your website, a restaurant providing contactless menus, or an event organizer streamlining
              check-ins, QR codes offer a fast, free, and reliable way to share information instantly.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
              A QR code (Quick Response code) is a two-dimensional barcode that can store URLs, text,
              contact details, Wi-Fi credentials, and much more. Unlike traditional barcodes that hold
              only a few dozen characters, QR codes can encode thousands of characters in a compact
              square pattern that any modern smartphone can read. First developed in 1994 for the
              automotive industry, QR codes have since been adopted across virtually every sector,
              from marketing and retail to healthcare and education.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
              Our free QR code generator lets you create static QR codes instantly with no sign-up,
              no tracking, and no expiration. Static QR codes encode your data directly into the
              code pattern itself, meaning they work forever and never depend on a third-party server.
              Simply enter your URL or text below, generate your code, and download or copy it for
              use in print materials, digital content, presentations, or anywhere else you need it.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Explore our{" "}
              <Link href="/guides" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
                guides
              </Link>{" "}
              to learn about{" "}
              <Link href="/guides/qr-code-use-cases" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
                creative QR code use cases
              </Link>,{" "}
              <Link href="/guides/are-qr-codes-safe" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
                QR code safety
              </Link>, and{" "}
              <Link href="/guides/static-vs-dynamic-qr-codes" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
                how to choose between static and dynamic codes
              </Link>.
            </p>
          </section>

          <QrGenerator />
          <AdUnit />
          <ContentSections />
        </main>
      </div>
    </div>
  );
}
