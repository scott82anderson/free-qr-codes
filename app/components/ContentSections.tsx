import Link from "next/link";

const sectionCard =
  "w-full p-6 bg-white dark:bg-black/40 rounded-lg shadow-md border border-gray-200 dark:border-gray-700";

export default function ContentSections() {
  return (
    <>
      {/* What is a QR Code? */}
      <section id="what-is-qr" className={sectionCard}>
        <h2 className="text-xl font-bold mb-3">What is a QR Code?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          A QR code (Quick Response code) is a two-dimensional barcode that
          stores information in a pattern of black and white squares. Invented in
          1994 by Denso Wave, a subsidiary of Toyota, QR codes were originally
          designed to track automotive parts during manufacturing.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          Unlike traditional one-dimensional barcodes that can only hold around
          20 digits, QR codes can store up to 7,089 numeric characters or 4,296
          alphanumeric characters. This vastly greater capacity makes them ideal
          for encoding URLs, contact information, Wi-Fi credentials, and more.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Today, QR codes are used worldwide across industries — from marketing
          and retail to healthcare and education. Most modern smartphones can
          scan QR codes directly through their camera app, making them one of the
          most accessible ways to bridge the physical and digital worlds. Learn more in our{" "}
          <Link href="/guides/qr-code-use-cases" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            complete guide to QR code use cases
          </Link>.
        </p>
      </section>

      {/* How QR Codes Work */}
      <section id="how-qr-works" className={sectionCard}>
        <h2 className="text-xl font-bold mb-3">How QR Codes Work</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          QR codes encode data into a grid of black and white modules. When
          scanned, a device&apos;s camera captures the image and decoding
          software interprets the pattern to extract the stored information.
        </p>
        <h3 className="text-lg font-semibold mb-2">Key Components</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3 space-y-1">
          <li>
            <strong>Finder patterns</strong> — the three large squares in the
            corners that help scanners locate and orient the code
          </li>
          <li>
            <strong>Alignment patterns</strong> — smaller squares that help
            correct distortion when scanning at an angle
          </li>
          <li>
            <strong>Timing patterns</strong> — alternating black and white
            modules that define the grid coordinates
          </li>
          <li>
            <strong>Data and error correction</strong> — the remaining modules
            that contain the actual encoded data and redundancy information
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Error Correction Levels</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          QR codes use Reed-Solomon error correction, allowing them to be read
          even when partially damaged or obscured:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            <strong>Level L (Low)</strong> — recovers up to 7% of data
          </li>
          <li>
            <strong>Level M (Medium)</strong> — recovers up to 15% of data
          </li>
          <li>
            <strong>Level Q (Quartile)</strong> — recovers up to 25% of data
          </li>
          <li>
            <strong>Level H (High)</strong> — recovers up to 30% of data
          </li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mt-3">
          For a deeper dive, read our guide on{" "}
          <Link href="/guides/how-to-create-qr-code" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            how to create a QR code
          </Link>.
        </p>
      </section>

      {/* Types of QR Codes */}
      <section id="types" className={sectionCard}>
        <h2 className="text-xl font-bold mb-3">Types of QR Codes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Static QR Codes</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Static QR codes encode data directly into the code itself. Once
              generated, the content cannot be changed.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Free to create and use forever</li>
              <li>No expiration date — they work as long as the destination exists</li>
              <li>No tracking or analytics</li>
              <li>Cannot be edited after creation</li>
              <li>Ideal for permanent links, business cards, and signage</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Dynamic QR Codes</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Dynamic QR codes contain a short redirect URL that points to the
              actual destination. The redirect can be updated at any time.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Destination URL can be changed after printing</li>
              <li>Built-in scan tracking and analytics</li>
              <li>Usually require a paid subscription</li>
              <li>Depend on the provider&apos;s server being online</li>
              <li>Best for campaigns, promotions, and content that changes</li>
            </ul>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm italic">
            This tool generates static QR codes — they&apos;re completely free,
            never expire, and don&apos;t depend on any third-party service.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Learn more in our detailed{" "}
            <Link href="/guides/static-vs-dynamic-qr-codes" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
              static vs dynamic QR codes comparison guide
            </Link>.
          </p>
        </div>
      </section>

      {/* Common Use Cases */}
      <section id="use-cases" className={sectionCard}>
        <h2 className="text-xl font-bold mb-3">Common Use Cases</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              title: "Website URLs",
              desc: "Link to any webpage, landing page, or online resource",
            },
            {
              title: "Wi-Fi Access",
              desc: "Share network credentials — guests connect with a single scan",
              link: "/qr-code-wifi",
            },
            {
              title: "Contact Cards (vCard)",
              desc: "Encode name, phone, email, and address for instant saving",
              link: "/qr-code-business-card",
            },
            {
              title: "Mobile Payments",
              desc: "Link to payment portals or display payment information",
            },
            {
              title: "Marketing & Ads",
              desc: "Bridge print materials to digital campaigns and promotions",
            },
            {
              title: "Restaurant Menus",
              desc: "Provide contactless access to digital menus from table cards",
              link: "/qr-code-menu",
            },
            {
              title: "Event Tickets",
              desc: "Encode ticket details for fast check-in and validation",
            },
            {
              title: "App Downloads",
              desc: "Link directly to App Store or Google Play listings",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-3 rounded border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-sm mb-1">
                {"link" in item && item.link ? (
                  <Link href={item.link} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm mt-3">
          Discover more ideas in our{" "}
          <Link href="/guides/qr-code-use-cases" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            guide to QR code use cases
          </Link>.
        </p>
      </section>

      {/* Step-by-Step Guide */}
      <section id="step-by-step" className={sectionCard}>
        <h2 className="text-xl font-bold mb-3">How to Create a QR Code</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Creating a QR code with our free tool takes just a few seconds. Follow these simple steps
          to generate, customize, and use your QR code for any purpose.
        </p>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-sm">1</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Enter your data</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Type or paste the URL, text, or information you want to encode into the input field
                above. This can be a website address, a link to a document, a Wi-Fi network configuration,
                or any other text-based data.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-sm">2</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Generate your QR code</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Click the &ldquo;Generate&rdquo; button to create your QR code instantly. The code
                appears on screen in seconds, rendered as a high-quality image that is ready to use.
                The generation happens entirely in your browser — no data is sent to any server.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-sm">3</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Download or copy</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Copy the QR code image to your clipboard with one click, then paste it into any
                document, presentation, email, or design tool. Use it in print materials like business
                cards, flyers, posters, or menus, or embed it in digital content like websites and social media.
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm mt-4">
          Need more detail? Read our{" "}
          <Link href="/guides/how-to-create-qr-code" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            complete step-by-step QR code creation guide
          </Link>.
        </p>
      </section>

      {/* Benefits of QR Codes */}
      <section id="benefits" className={sectionCard}>
        <h2 className="text-xl font-bold mb-3">Benefits of QR Codes</h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Contactless interaction</strong> — no physical contact
            needed, making them hygienic and convenient
          </li>
          <li>
            <strong>Instant access</strong> — scan and go, no typing long URLs
            or searching
          </li>
          <li>
            <strong>High data capacity</strong> — store thousands of characters
            in a small space
          </li>
          <li>
            <strong>Built-in error correction</strong> — readable even when
            partially damaged, dirty, or obscured
          </li>
          <li>
            <strong>Free to create</strong> — static QR codes cost nothing to
            generate or use
          </li>
          <li>
            <strong>Works offline</strong> — codes can encode data directly,
            with no internet required to scan
          </li>
          <li>
            <strong>Universal compatibility</strong> — scannable by virtually
            every modern smartphone camera
          </li>
        </ul>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className={sectionCard}>
        <h2 className="text-xl font-bold mb-3">Best Practices</h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Maintain a minimum size</strong> — print QR codes at least
            2 cm &times; 2 cm (about 0.8 in) to ensure reliable scanning
          </li>
          <li>
            <strong>Use high contrast</strong> — dark modules on a light
            background work best; avoid low-contrast color combinations
          </li>
          <li>
            <strong>Keep a quiet zone</strong> — leave a blank margin around the
            code (at least 4 modules wide) so scanners can detect the boundary
          </li>
          <li>
            <strong>Test before printing</strong> — scan with multiple devices
            and apps to confirm the code works correctly
          </li>
          <li>
            <strong>Add a call to action</strong> — include text like
            &ldquo;Scan me&rdquo; or &ldquo;Scan for menu&rdquo; so users know
            what to do
          </li>
          <li>
            <strong>Use short URLs</strong> — shorter data produces a simpler
            (less dense) QR code that is easier to scan at small sizes
          </li>
          <li>
            <strong>Avoid stretching or skewing</strong> — always maintain the
            code&apos;s square aspect ratio
          </li>
        </ul>
      </section>

      {/* Security Considerations */}
      <section id="security" className={sectionCard}>
        <h2 className="text-xl font-bold mb-3">Security Considerations</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          While QR codes themselves are simply data containers and not inherently dangerous,
          they can be used as a vector for phishing attacks and other scams. Because you cannot
          see the encoded URL before scanning, malicious actors sometimes place fraudulent QR codes
          over legitimate ones in public spaces — a technique known as &ldquo;quishing&rdquo;
          (QR code phishing).
        </p>
        <h3 className="text-lg font-semibold mb-2">How to Stay Safe</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mb-3">
          <li>
            <strong>Check the URL</strong> — after scanning, verify the URL in your browser&apos;s address bar before entering any personal information
          </li>
          <li>
            <strong>Avoid suspicious codes</strong> — be cautious of QR codes on stickers placed over other codes or in unexpected locations
          </li>
          <li>
            <strong>Use your phone&apos;s built-in scanner</strong> — most modern smartphones show a URL preview before opening it
          </li>
          <li>
            <strong>Never scan codes requesting sensitive data</strong> — legitimate organizations rarely ask for passwords or financial details via QR code
          </li>
          <li>
            <strong>Generate your own codes from trusted tools</strong> — use tools like this one that process data client-side and do not store or track your information
          </li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Read our full guide on{" "}
          <Link href="/guides/are-qr-codes-safe" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
            QR code safety and security
          </Link>{" "}
          for more tips on protecting yourself and your users.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className={sectionCard}>
        <h2 className="text-xl font-bold mb-3">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            {
              q: "Do QR codes expire?",
              a: "Static QR codes never expire — they work as long as the encoded destination (e.g., a URL) is still active. Dynamic QR codes may expire if the provider's service is discontinued.",
            },
            {
              q: "What size should a QR code be?",
              a: "For print, a minimum of 2 cm \u00d7 2 cm is recommended. For scanning from a distance, use the 10:1 rule — the code should be at least 1/10th the scanning distance (e.g., 10 cm for a 1-meter scan distance).",
            },
            {
              q: "Can I customize QR code colors?",
              a: "Yes, as long as you maintain high contrast between the foreground (modules) and background. Dark-on-light is most reliable. Avoid inverting to light-on-dark, as some scanners have difficulty with inverted codes.",
            },
            {
              q: "Are QR codes free?",
              a: "Static QR codes are completely free to generate and use. This tool creates static codes at no cost. Dynamic QR codes from other providers may require a paid subscription.",
            },
            {
              q: "How much data can a QR code hold?",
              a: "A single QR code can store up to 7,089 numeric characters, 4,296 alphanumeric characters, or 2,953 bytes of binary data. In practice, keeping data short produces a simpler code that scans more reliably.",
            },
            {
              q: "Can QR codes be scanned from a screen?",
              a: "Yes. QR codes can be scanned from phone screens, computer monitors, projections, and printed materials equally well.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group border border-gray-200 dark:border-gray-700 rounded"
            >
              <summary className="cursor-pointer px-4 py-3 font-semibold text-sm select-none hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                {item.q}
              </summary>
              <p className="px-4 pb-3 text-sm text-gray-600 dark:text-gray-400">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
