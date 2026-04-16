import type { Metadata } from "next";
import Link from "next/link";
import QrGenerator from "../components/QrGenerator";

export const metadata: Metadata = {
  title: "QR Code for Restaurant Menus - Free QR Code Generator",
  description: "Create a free QR code for your restaurant menu. Offer contactless digital menus that customers can access instantly by scanning.",
  openGraph: {
    title: "QR Code for Restaurant Menus - Free QR Code Generator",
    description: "Create a free QR code for your restaurant menu. Offer contactless digital menus that customers can access instantly by scanning.",
    type: "website",
    url: "https://free-qr-codes.net/qr-code-menu",
  },
};

export default function QrCodeMenuPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        QR Code for Restaurant Menus
      </h1>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <p>
          QR code menus have become a standard feature in restaurants, cafes, and bars around the
          world. By placing a QR code on each table, counter, or window, you allow customers to
          view your menu on their own device — no app download required, no physical menu to pass
          around, and no reprinting costs when you update your offerings.
        </p>
        <p>
          The concept is simple: a customer scans the QR code with their smartphone camera, and
          your digital menu opens instantly in their browser. This works with any modern iPhone
          or Android device, making it universally accessible. For restaurants, this approach
          reduces costs, improves hygiene, and makes it easy to keep menus up to date.
        </p>

        <h2>Why Use QR Codes for Your Restaurant Menu?</h2>
        <p>
          The shift toward digital menus accelerated during the pandemic, but the practical benefits
          go well beyond hygiene. Here is why thousands of restaurants continue to use QR code menus:
        </p>
        <ul>
          <li>
            <strong>Eliminate reprinting costs</strong> — update prices, add seasonal items, or
            remove sold-out dishes without printing new menus. Changes go live instantly.
          </li>
          <li>
            <strong>Contactless experience</strong> — customers view the menu on their own device,
            reducing the need to handle shared physical menus
          </li>
          <li>
            <strong>Always available</strong> — a QR code never runs out. Even if every table is full,
            every customer can access the menu simultaneously.
          </li>
          <li>
            <strong>Multilingual support</strong> — link to a digital menu that offers language
            switching, serving international customers without printing menus in multiple languages
          </li>
          <li>
            <strong>Reduce wait times</strong> — customers can browse the menu while waiting to be
            seated, speeding up the ordering process
          </li>
          <li>
            <strong>Eco-friendly</strong> — digital menus reduce paper waste and the resources needed
            for printing
          </li>
        </ul>

        <h2>Where to Host Your Digital Menu</h2>
        <p>
          Before generating a QR code, you need a URL that points to your menu. There are several
          options depending on your budget and technical comfort:
        </p>
        <ul>
          <li>
            <strong>Your existing website</strong> — if you already have a restaurant website, add a
            /menu page. This is the most professional option and keeps traffic on your own domain.
          </li>
          <li>
            <strong>Google Docs or PDF</strong> — upload your menu as a PDF to Google Drive and share
            the link. This is free and easy but offers limited design control.
          </li>
          <li>
            <strong>A dedicated menu platform</strong> — services like Square, Toast, or specialized
            digital menu platforms offer customizable, mobile-optimized menu pages.
          </li>
          <li>
            <strong>Social media</strong> — link to an Instagram highlight, Facebook page, or other
            social profile where your menu is posted.
          </li>
        </ul>
        <p>
          Whichever option you choose, make sure the page loads quickly and displays well on mobile
          devices. Most QR code scans happen on phones, so a mobile-first design is essential.
        </p>

        <h2>How to Set Up QR Code Menus in Your Restaurant</h2>
        <p>
          Implementing QR code menus involves three steps: hosting your menu online, generating the
          QR code, and placing it where customers can see it.
        </p>
        <ol>
          <li>
            <strong>Upload or create your digital menu</strong> — choose a hosting option from above
            and get the URL
          </li>
          <li>
            <strong>Generate the QR code</strong> — use the generator below to create a code from your
            menu URL
          </li>
          <li>
            <strong>Print and place</strong> — add the QR code to table tents, stickers, placemats,
            or wall signs. Include text like &ldquo;Scan for Menu&rdquo; so customers know what to do.
          </li>
        </ol>

        <h2>Placement Best Practices</h2>
        <ul>
          <li>
            <strong>Table tents or stands</strong> — the most common placement. Use a sturdy tent card
            that stands upright so the code is visible and easy to scan.
          </li>
          <li>
            <strong>Stickers on the table</strong> — laminated stickers hold up to spills and cleaning.
            Place them near the edge of the table where they are easy to reach.
          </li>
          <li>
            <strong>Window or door signage</strong> — allow walk-by customers to view your menu before
            entering. Great for attracting foot traffic.
          </li>
          <li>
            <strong>Counter displays</strong> — for cafes and fast-casual spots, a QR code at the
            counter lets customers browse while waiting in line.
          </li>
          <li>
            <strong>Print size</strong> — for table placement, a QR code of at least 3 cm &times; 3 cm
            works well. For wall or window signs meant to be scanned from a distance, go larger (10+ cm).
          </li>
        </ul>

        <h2>Create Your Menu QR Code</h2>
        <p>
          Enter the URL of your digital menu below to generate a free QR code. Copy or download the
          image and use it in your restaurant signage, table tents, or marketing materials.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <QrGenerator />
      </div>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>Tips for Success</h2>
        <p>
          After placing your QR codes, test them yourself by scanning from a seated position at each
          table. Make sure the code scans quickly and the menu loads fast on mobile. Ask a few
          customers for feedback in the first week to catch any issues early.
        </p>
        <p>
          If you use a static QR code (like the ones generated by this tool), remember that the URL
          is permanently encoded. If you ever change your menu URL, you will need to generate and
          print new QR codes. To avoid this, use a stable URL that you control (like
          yourrestaurant.com/menu) and update the content at that URL rather than changing the link.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none mt-8">
        <h2>Related Resources</h2>
        <ul>
          <li>
            <Link href="/guides/qr-code-use-cases">10 Creative QR Code Use Cases</Link>
          </li>
          <li>
            <Link href="/guides/how-to-create-qr-code">How to Create a QR Code: Step-by-Step</Link>
          </li>
          <li>
            <Link href="/guides/static-vs-dynamic-qr-codes">Static vs Dynamic QR Codes</Link>
          </li>
          <li>
            <Link href="/">Back to Free QR Code Generator</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
