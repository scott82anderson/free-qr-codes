import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - Free QR Code Generator",
  description: "Get in touch with the Free QR Codes team for support, feedback, or collaboration.",
  openGraph: {
    title: "Contact - Free QR Code Generator",
    description: "Get in touch with the Free QR Codes team for support, feedback, or collaboration.",
    type: "website",
    url: "https://free-qr-codes.net/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact Us</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          We would love to hear from you. Whether you have a question about using our{" "}
          <Link href="/">QR code generator</Link>, want to report an issue, or have a suggestion
          for improvement, there are several ways to get in touch.
        </p>

        <h2>GitHub</h2>
        <p>
          Free QR Codes is an open-source project. The best way to report bugs, request features,
          or contribute code is through our GitHub repository:
        </p>
        <ul>
          <li>
            <strong>Report an issue:</strong>{" "}
            <a href="https://github.com/scott82anderson/free-qr-codes/issues" target="_blank" rel="noopener noreferrer">
              GitHub Issues
            </a>
          </li>
          <li>
            <strong>View the source code:</strong>{" "}
            <a href="https://github.com/scott82anderson/free-qr-codes" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </li>
          <li>
            <strong>Contribute:</strong> Pull requests are welcome. Please read the contributing
            guidelines in the repository before submitting.
          </li>
        </ul>

        <h2>General Inquiries</h2>
        <p>
          For general questions, partnership inquiries, or anything else that does not fit into a
          GitHub issue, you can reach Scott Anderson through the GitHub profile linked in the
          repository.
        </p>

        <h2>Frequently Asked Questions</h2>
        <p>
          Before reaching out, you may find your answer in our resources:
        </p>
        <ul>
          <li>
            <Link href="/#faq">Frequently Asked Questions</Link> — common questions about QR codes and our tool
          </li>
          <li>
            <Link href="/guides">Guides</Link> — in-depth articles on QR code creation, use cases, and safety
          </li>
          <li>
            <Link href="/guides/how-to-create-qr-code">How to Create a QR Code</Link> — step-by-step instructions
          </li>
        </ul>

        <h2>Response Times</h2>
        <p>
          This is a community-driven, open-source project maintained in spare time. We do our best
          to respond to issues and inquiries promptly, but please allow a few days for a response.
          Bug reports and security issues are prioritized.
        </p>
      </div>
    </main>
  );
}
