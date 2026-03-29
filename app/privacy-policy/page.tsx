import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Free QR Code Generator",
  description: "Privacy policy for Free QR Codes. Learn how we handle your data, cookies, and third-party services.",
  openGraph: {
    title: "Privacy Policy - Free QR Code Generator",
    description: "Privacy policy for Free QR Codes. Learn how we handle your data, cookies, and third-party services.",
    type: "website",
    url: "https://free-qr-codes.net/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Privacy Policy</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          <strong>Last updated:</strong> March 2026
        </p>
        <p>
          This privacy policy describes how Free QR Codes (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
          or &ldquo;our&rdquo;) collects, uses, and protects information when you use our website
          at free-qr-codes.net (the &ldquo;Site&rdquo;) and our{" "}
          <Link href="/">QR code generator tool</Link> (the &ldquo;Tool&rdquo;).
        </p>

        <h2>1. Information We Collect</h2>

        <h3>QR Code Data</h3>
        <p>
          Our QR code generator runs entirely in your web browser. The URLs, text, or other data
          you enter into the Tool are processed locally on your device using client-side JavaScript.
          <strong> We do not transmit, store, or have access to any data you enter into the QR code generator.</strong>{" "}
          Your data never leaves your device during the QR code generation process.
        </p>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our Site, our hosting provider (Vercel) may automatically collect certain
          technical information, including:
        </p>
        <ul>
          <li>IP address (anonymized)</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring URL</li>
          <li>Pages visited and time spent on each page</li>
          <li>Date and time of your visit</li>
        </ul>
        <p>
          This information is collected through standard web server logs and is used solely to
          maintain the security and performance of the Site.
        </p>

        <h3>Personal Information</h3>
        <p>
          We do not require you to create an account, provide an email address, or submit any
          personal information to use our Tool. We do not collect names, email addresses, phone
          numbers, or any other personally identifiable information.
        </p>

        <h2>2. Cookies and Tracking Technologies</h2>

        <h3>Essential Cookies</h3>
        <p>
          Our Site may use essential cookies that are necessary for the website to function
          properly. These cookies do not track your browsing activity across other sites.
        </p>

        <h3>Third-Party Advertising Cookies</h3>
        <p>
          We use Google AdSense to display advertisements on certain content pages of our Site.
          Google AdSense may use cookies and similar technologies to serve ads based on your
          prior visits to our Site or other websites. Specifically:
        </p>
        <ul>
          <li>
            Google uses the DoubleClick cookie to serve ads based on your visit to this Site
            and other sites on the internet.
          </li>
          <li>
            You may opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>.
          </li>
          <li>
            You may also opt out of third-party vendor cookies by visiting the{" "}
            <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">
              Network Advertising Initiative opt-out page
            </a>.
          </li>
        </ul>
        <p>
          Advertisements are only displayed on content-rich pages such as our{" "}
          <Link href="/guides">guides</Link> and educational articles. We do not place ads on
          the QR code generation interface, result screens, or pages with minimal content.
        </p>

        <h2>3. How We Use Information</h2>
        <p>The limited information we collect is used to:</p>
        <ul>
          <li>Maintain and improve the performance and security of the Site</li>
          <li>Understand how visitors use the Site to improve content and user experience</li>
          <li>Display relevant advertisements through Google AdSense</li>
        </ul>
        <p>
          We do not sell, rent, or share any personal information with third parties for marketing
          purposes.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>Our Site uses the following third-party services:</p>
        <ul>
          <li>
            <strong>Vercel</strong> — for website hosting and deployment. Vercel&apos;s privacy
            policy is available at{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              vercel.com/legal/privacy-policy
            </a>.
          </li>
          <li>
            <strong>Google AdSense</strong> — for displaying advertisements. Google&apos;s privacy
            policy is available at{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>.
          </li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We take reasonable measures to protect the information collected through our Site. Our
          QR code generator processes all data locally in your browser, ensuring that your data
          is never transmitted over the internet. The Site is served over HTTPS to encrypt all
          communications between your browser and our servers.
        </p>

        <h2>6. Children&apos;s Privacy</h2>
        <p>
          Our Site is not directed to children under the age of 13. We do not knowingly collect
          personal information from children. If you believe a child has provided us with personal
          information, please <Link href="/contact">contact us</Link> so we can take appropriate action.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted on this page
          with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this policy
          periodically.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have questions or concerns about this privacy policy, please{" "}
          <Link href="/contact">contact us</Link> through our contact page or open an issue on our{" "}
          <a href="https://github.com/scott82anderson/free-qr-codes" target="_blank" rel="noopener noreferrer">
            GitHub repository
          </a>.
        </p>
      </div>
    </main>
  );
}
