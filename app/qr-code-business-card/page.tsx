import type { Metadata } from "next";
import Link from "next/link";
import QrGenerator from "../components/QrGenerator";
import AdUnit from "../components/AdUnit";

export const metadata: Metadata = {
  title: "QR Code for Business Cards - Free QR Code Generator",
  description: "Create a free QR code for your business card. Share your contact information, website, or portfolio instantly with a simple scan.",
  openGraph: {
    title: "QR Code for Business Cards - Free QR Code Generator",
    description: "Create a free QR code for your business card. Share your contact information, website, or portfolio instantly with a simple scan.",
    type: "website",
    url: "https://free-qr-codes.net/qr-code-business-card",
  },
};

export default function QrCodeBusinessCardPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        QR Code for Business Cards
      </h1>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <p>
          Adding a QR code to your business card is one of the most practical ways to bridge
          print and digital networking. Instead of hoping someone types in your URL or saves
          your phone number manually, a QR code lets them scan and save your details in seconds.
          It works at conferences, meetings, trade shows, and any situation where you exchange cards.
        </p>
        <p>
          A well-placed QR code on a business card can link to your professional website, LinkedIn
          profile, online portfolio, digital vCard, or a custom landing page with all your contact
          details. Because the code is scannable by any modern smartphone, there is virtually no
          friction for the person receiving your card.
        </p>

        <h2>Why Add a QR Code to Your Business Card?</h2>
        <p>
          Traditional business cards rely on the recipient manually entering your information into
          their phone, which often does not happen. Research consistently shows that most business
          cards end up forgotten in a desk drawer or discarded. A QR code solves this problem by
          making it effortless to capture your details digitally.
        </p>
        <ul>
          <li>
            <strong>Instant digital contact</strong> — scanning saves your name, phone, email, and
            website directly to the recipient&apos;s phone contacts
          </li>
          <li>
            <strong>No typing errors</strong> — URLs and email addresses are encoded exactly, so
            there is no risk of misspelling
          </li>
          <li>
            <strong>Professional impression</strong> — a QR code signals that you are tech-savvy
            and make it easy for people to connect with you
          </li>
          <li>
            <strong>Space efficient</strong> — a single QR code can replace lines of text, leaving
            room for a cleaner card design
          </li>
          <li>
            <strong>Trackable (if using dynamic codes)</strong> — you can see how many people scanned
            your card, though our free static codes work perfectly for most professionals
          </li>
        </ul>

        <h2>What to Encode in Your Business Card QR Code</h2>
        <p>
          The most common option is to encode a URL pointing to your website, portfolio, or LinkedIn
          profile. If you want the recipient&apos;s phone to prompt a &ldquo;Save Contact&rdquo; action,
          you can encode a vCard string — though for simplicity, most people link to a webpage that
          displays their full contact information with clickable links.
        </p>
        <p>
          Some popular choices include:
        </p>
        <ul>
          <li>Your professional website or personal landing page</li>
          <li>Your LinkedIn profile URL</li>
          <li>A digital business card service (like About.me or Linktree)</li>
          <li>A PDF of your resume or portfolio</li>
          <li>A Google Maps link to your office location</li>
        </ul>

        <h2>Design Tips for Business Card QR Codes</h2>
        <p>
          A QR code on a business card needs to balance scannability with aesthetics. Here are the
          most important design considerations:
        </p>
        <ul>
          <li>
            <strong>Minimum size: 1.5 cm &times; 1.5 cm</strong> — anything smaller may be difficult
            to scan reliably, especially with complex URLs
          </li>
          <li>
            <strong>High contrast</strong> — dark code on a light background works best. Avoid placing
            a QR code on a dark or textured background
          </li>
          <li>
            <strong>Quiet zone</strong> — leave at least 2-3mm of blank space around the code so
            scanners can detect its boundaries
          </li>
          <li>
            <strong>Placement</strong> — the back of the card is the most common spot, but a corner
            of the front works if the card design allows it
          </li>
          <li>
            <strong>Add a label</strong> — include small text like &ldquo;Scan to connect&rdquo; or
            &ldquo;Scan for my details&rdquo; so people know what the code does
          </li>
        </ul>
        <p>
          For detailed printing advice, including file formats and paper stock recommendations,
          see our{" "}
          <Link href="/guides/qr-code-business-card">complete guide to QR codes on business cards</Link>.
        </p>

        <h2>Create Your Business Card QR Code</h2>
        <p>
          Enter the URL you want your business card QR code to link to, then generate and copy
          the code. You can paste it directly into your design tool (Canva, Illustrator, Figma,
          etc.) or save it for your print shop.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <QrGenerator />
      </div>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>After You Generate Your Code</h2>
        <p>
          Before sending your business cards to print, always test your QR code by scanning it
          with at least two different smartphones. Check that the link opens correctly and that
          the page loads quickly on mobile. If you are linking to a website, make sure it is
          mobile-friendly — that is where 100% of your QR code scans will land.
        </p>
        <p>
          Consider using a short URL to keep the QR code pattern simple and easier to scan at
          small sizes. The less data encoded, the fewer modules in the code, and the larger each
          module can be at a given print size.
        </p>
      </div>

      <AdUnit />

      <div className="prose dark:prose-invert max-w-none mt-8">
        <h2>Related Resources</h2>
        <ul>
          <li>
            <Link href="/guides/qr-code-business-card">Complete Guide: QR Codes for Business Cards</Link>
          </li>
          <li>
            <Link href="/guides/how-to-create-qr-code">How to Create a QR Code: Step-by-Step</Link>
          </li>
          <li>
            <Link href="/guides/qr-code-use-cases">10 Creative QR Code Use Cases</Link>
          </li>
          <li>
            <Link href="/">Back to Free QR Code Generator</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
