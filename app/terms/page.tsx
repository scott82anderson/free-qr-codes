import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Free QR Code Generator",
  description: "Terms of service for Free QR Codes. Understand the terms and conditions for using our free QR code generator.",
  openGraph: {
    title: "Terms of Service - Free QR Code Generator",
    description: "Terms of service for Free QR Codes. Understand the terms and conditions for using our free QR code generator.",
    type: "website",
    url: "https://free-qr-codes.net/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Terms of Service</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          <strong>Last updated:</strong> March 2026
        </p>
        <p>
          These terms of service (&ldquo;Terms&rdquo;) govern your use of the Free QR Codes
          website at free-qr-codes.net (the &ldquo;Site&rdquo;) and the QR code generator tool
          (the &ldquo;Tool&rdquo;) provided by Free QR Codes (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
          or &ldquo;our&rdquo;). By accessing or using the Site, you agree to be bound by these Terms.
        </p>

        <h2>1. Use of the Tool</h2>
        <p>
          Our <Link href="/">QR code generator</Link> is provided free of charge for personal and
          commercial use. You may use the Tool to create QR codes for any lawful purpose, including
          but not limited to business cards, marketing materials, restaurant menus, event management,
          and personal projects.
        </p>
        <p>You agree not to use the Tool to:</p>
        <ul>
          <li>Create QR codes that link to malicious, fraudulent, or illegal content</li>
          <li>Distribute QR codes designed to phish, scam, or deceive users</li>
          <li>Encode content that violates any applicable laws or regulations</li>
          <li>Attempt to reverse-engineer, decompile, or exploit the Tool&apos;s underlying code in a way that violates its open-source license</li>
          <li>Overload or disrupt the Site through automated or excessive requests</li>
        </ul>

        <h2>2. Intellectual Property</h2>
        <p>
          The QR codes you generate using our Tool are yours to use freely. We do not claim any
          ownership or rights over QR codes created through the Tool. The QR code standard is an
          open international standard (ISO/IEC 18004), and the codes themselves are not proprietary.
        </p>
        <p>
          The Site&apos;s design, content, articles, guides, and branding are protected by copyright.
          You may not reproduce, distribute, or create derivative works from our written content
          without permission. The source code of the Tool is available under the MIT License on{" "}
          <a href="https://github.com/scott82anderson/free-qr-codes" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>

        <h2>3. Privacy</h2>
        <p>
          Your use of the Site is also governed by our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>, which describes how we handle
          information collected through the Site. The QR code generator processes all data locally
          in your browser — we do not store or transmit any data you enter into the Tool.
        </p>

        <h2>4. Disclaimer of Warranties</h2>
        <p>
          The Site and Tool are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
          warranties of any kind, whether express or implied, including but not limited to implied
          warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>
        <p>We do not warrant that:</p>
        <ul>
          <li>The Tool will be uninterrupted, error-free, or free of harmful components</li>
          <li>QR codes generated will be scannable by all devices in all conditions</li>
          <li>The Site will be available at all times</li>
          <li>The information in our guides and articles is complete, accurate, or current</li>
        </ul>

        <h2>5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Free QR Codes and its creator shall not be liable
          for any indirect, incidental, special, consequential, or punitive damages arising from
          your use of or inability to use the Site or Tool. This includes, without limitation,
          damages for loss of profits, data, or business opportunities.
        </p>
        <p>
          Our total liability for any claim arising from your use of the Site or Tool shall not
          exceed the amount you paid to use the service, which is zero dollars ($0.00) as the
          Tool is provided free of charge.
        </p>

        <h2>6. Third-Party Links and Services</h2>
        <p>
          Our Site may contain links to third-party websites, including in our{" "}
          <Link href="/guides">guides</Link> and educational content. We are not responsible for the
          content, privacy practices, or availability of these external sites. Following any
          third-party link is at your own risk.
        </p>
        <p>
          We use Google AdSense to display advertisements on certain pages. Your interaction with
          these advertisements is governed by Google&apos;s terms and privacy policy.
        </p>

        <h2>7. Open Source</h2>
        <p>
          The source code for the QR code generator is available under the MIT License. You are
          free to use, modify, and distribute the code in accordance with that license. The full
          license text is available in the{" "}
          <a href="https://github.com/scott82anderson/free-qr-codes" target="_blank" rel="noopener noreferrer">
            GitHub repository
          </a>.
        </p>

        <h2>8. Changes to These Terms</h2>
        <p>
          We reserve the right to update these Terms at any time. Changes will be posted on this
          page with an updated &ldquo;Last updated&rdquo; date. Your continued use of the Site
          after changes are posted constitutes acceptance of the revised Terms.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with applicable laws, without
          regard to conflict of law principles.
        </p>

        <h2>10. Contact</h2>
        <p>
          If you have questions about these Terms, please <Link href="/contact">contact us</Link>.
        </p>
      </div>
    </main>
  );
}
