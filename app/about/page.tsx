import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Free QR Code Generator",
  description: "Learn about Free QR Codes, our mission to provide a free, privacy-focused QR code generator for everyone.",
  openGraph: {
    title: "About - Free QR Code Generator",
    description: "Learn about Free QR Codes, our mission to provide a free, privacy-focused QR code generator for everyone.",
    type: "website",
    url: "https://free-qr-codes.net/about",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">About Free QR Codes</h1>

      <div className="prose dark:prose-invert max-w-none">
        <h2>Our Mission</h2>
        <p>
          Free QR Codes was created with a simple goal: to provide a fast, free, and privacy-respecting
          QR code generator that anyone can use without barriers. There are no accounts to create, no
          subscription fees, and no limits on how many codes you can generate.
        </p>
        <p>
          We believe that creating a QR code should be as simple as typing a URL. Whether you are a
          small business owner adding a QR code to your business card, a teacher linking students to
          online resources, or a restaurant setting up contactless menus, you deserve a tool that works
          instantly and costs nothing.
        </p>

        <h2>How It Works</h2>
        <p>
          Our QR code generator runs entirely in your browser. When you enter a URL or text and click
          &ldquo;Generate,&rdquo; the QR code is created on your device using client-side JavaScript.
          No data is sent to our servers, no information is stored, and no tracking takes place. Your
          data stays on your device from start to finish.
        </p>
        <p>
          The QR codes we generate are static codes, which means the data is encoded directly into the
          pattern of the code itself. Unlike dynamic QR codes that rely on a redirect server, our static
          codes never expire and never depend on any third-party service remaining online.
        </p>

        <h2>Who Built This</h2>
        <p>
          Free QR Codes was built by Scott Anderson as an open-source project. The source code is publicly
          available on{" "}
          <a href="https://github.com/scott82anderson/free-qr-codes" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>, and contributions from the community are welcome. The project is built with Next.js, React,
          and Tailwind CSS, and is hosted on Vercel.
        </p>

        <h2>Why Free?</h2>
        <p>
          Many QR code generators on the web are either loaded with ads, require sign-ups, or limit
          functionality behind paywalls. We wanted to create an alternative that puts users first. The
          site is supported through minimal, non-intrusive advertising that appears only on content pages
          — never on the tool itself or on pages with little content.
        </p>
        <p>
          Our commitment is to keep the core QR code generation tool completely free, with no feature
          restrictions, forever. If you find this tool useful, consider sharing it with others or
          contributing to the{" "}
          <a href="https://github.com/scott82anderson/free-qr-codes" target="_blank" rel="noopener noreferrer">
            open-source project
          </a>.
        </p>

        <h2>Learn More</h2>
        <p>
          Visit our{" "}
          <Link href="/guides">guides section</Link> to learn about QR code best practices, use cases,
          security considerations, and more. Or jump straight to the{" "}
          <Link href="/">QR code generator</Link> to create your first code.
        </p>
      </div>
    </main>
  );
}
