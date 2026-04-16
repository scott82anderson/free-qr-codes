import type { Metadata } from "next";
import Link from "next/link";
import QrGenerator from "../components/QrGenerator";

export const metadata: Metadata = {
  title: "QR Code for Wi-Fi Sharing - Free QR Code Generator",
  description: "Create a free QR code for Wi-Fi access. Let guests connect to your network instantly by scanning — no password typing needed.",
  openGraph: {
    title: "QR Code for Wi-Fi Sharing - Free QR Code Generator",
    description: "Create a free QR code for Wi-Fi access. Let guests connect to your network instantly by scanning — no password typing needed.",
    type: "website",
    url: "https://free-qr-codes.net/qr-code-wifi",
  },
};

export default function QrCodeWifiPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        QR Code for Wi-Fi Sharing
      </h1>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <p>
          Sharing a Wi-Fi password should not involve dictating a random string of characters
          letter by letter. With a Wi-Fi QR code, guests, customers, or visitors simply scan
          the code with their smartphone camera and connect to your network instantly — no manual
          password entry required.
        </p>
        <p>
          This approach is widely used in hotels, cafes, coworking spaces, Airbnb properties,
          offices, and homes. It eliminates the awkward &ldquo;What&apos;s the Wi-Fi password?&rdquo;
          question and makes connecting seamless for everyone, including visitors who may not speak
          the same language.
        </p>

        <h2>How Wi-Fi QR Codes Work</h2>
        <p>
          A Wi-Fi QR code encodes your network name (SSID), password, and security type into a
          special format that smartphones recognize. When a device scans the code, the operating
          system detects that it contains Wi-Fi credentials and prompts the user to join the network.
          On most modern Android devices, the connection happens automatically. On iPhones running
          iOS 11 or later, a single tap on the notification is all that is needed.
        </p>
        <p>
          The standard Wi-Fi QR code format looks like this:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
          WIFI:T:WPA;S:YourNetworkName;P:YourPassword;;
        </pre>
        <p>
          Where <code>T</code> is the security type (WPA, WEP, or nopass), <code>S</code> is
          the network name, and <code>P</code> is the password. You do not need to construct this
          string yourself — our generator handles the formatting automatically when you enter a
          URL, or you can use a Wi-Fi QR code format string directly.
        </p>

        <h2>Where to Use Wi-Fi QR Codes</h2>
        <p>
          Wi-Fi QR codes are useful anywhere you want to share network access without verbally
          communicating a password:
        </p>
        <ul>
          <li>
            <strong>Homes and apartments</strong> — frame a small QR code near your router or on the
            fridge so guests can connect without asking
          </li>
          <li>
            <strong>Hotels and Airbnbs</strong> — include the QR code on the welcome card or near the
            door so guests connect the moment they arrive
          </li>
          <li>
            <strong>Restaurants and cafes</strong> — place the QR code on table tents, near the
            counter, or on the wall alongside your{" "}
            <Link href="/qr-code-menu">digital menu QR code</Link>
          </li>
          <li>
            <strong>Offices and coworking spaces</strong> — display the QR code in meeting rooms and
            reception areas for visitors and clients
          </li>
          <li>
            <strong>Events and conferences</strong> — include the QR code on event signage, badges,
            or printed programs
          </li>
          <li>
            <strong>Retail stores</strong> — offer free Wi-Fi to customers to encourage longer visits
            and engagement
          </li>
        </ul>

        <h2>Security Considerations</h2>
        <p>
          Sharing your Wi-Fi password via QR code is generally as secure as sharing it verbally or
          in writing — the security of your network depends on the encryption type (WPA2 or WPA3)
          and the strength of your password, not how the password is communicated.
        </p>
        <p>
          However, there are a few things to keep in mind:
        </p>
        <ul>
          <li>
            <strong>Use a guest network</strong> — instead of sharing your primary network password,
            set up a separate guest network on your router. This keeps your personal devices and files
            isolated from guest traffic.
          </li>
          <li>
            <strong>Change the password periodically</strong> — if your Wi-Fi QR code is posted in a
            public space, update the password regularly and reprint the code
          </li>
          <li>
            <strong>Use WPA2 or WPA3</strong> — never use WEP or an open network for anything that
            handles sensitive data
          </li>
          <li>
            <strong>Monitor connected devices</strong> — most routers have an admin panel that shows
            connected devices. Check it periodically if your QR code is in a high-traffic area.
          </li>
        </ul>
        <p>
          For more on QR code security, see our guide on{" "}
          <Link href="/guides/are-qr-codes-safe">QR code safety and security</Link>.
        </p>

        <h2>How to Create a Wi-Fi QR Code</h2>
        <p>
          To create a Wi-Fi QR code with our tool, you can enter the Wi-Fi configuration string
          in the format shown above. Alternatively, enter the URL of a page with your Wi-Fi
          details. For the simplest experience with Wi-Fi-specific QR codes, use the string format:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
          WIFI:T:WPA;S:MyNetwork;P:MySecurePassword123;;
        </pre>
        <p>
          Replace <code>MyNetwork</code> with your actual network name and{" "}
          <code>MySecurePassword123</code> with your actual password. If your network uses WPA2
          or WPA3, use <code>WPA</code> as the type. For open networks with no password, use{" "}
          <code>nopass</code> and omit the <code>P</code> field.
        </p>

        <h2>Generate Your Wi-Fi QR Code</h2>
        <p>
          Enter your Wi-Fi configuration string or a URL below to generate a QR code. Print it,
          frame it, or add it to signage in your space.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <QrGenerator />
      </div>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>Printing and Displaying Your Wi-Fi QR Code</h2>
        <p>
          Once you have generated your Wi-Fi QR code, you need to display it where people can
          easily scan it. Here are some practical tips:
        </p>
        <ul>
          <li>
            <strong>Print at least 3 cm &times; 3 cm</strong> — for close-range scanning (table or
            wall), this size works well. For scanning from across a room, go larger.
          </li>
          <li>
            <strong>Add context</strong> — print the QR code with a label like &ldquo;Scan for
            Wi-Fi&rdquo; and optionally the network name (but not the password in text).
          </li>
          <li>
            <strong>Laminate or frame</strong> — protect the printed code from wear, spills, and
            fading, especially in kitchens, bathrooms, or high-traffic areas.
          </li>
          <li>
            <strong>Test it</strong> — scan the printed code with multiple devices before posting
            it permanently. Make sure the connection works on both iPhone and Android.
          </li>
        </ul>
      </div>

      <div className="prose dark:prose-invert max-w-none mt-8">
        <h2>Related Resources</h2>
        <ul>
          <li>
            <Link href="/guides/are-qr-codes-safe">Are QR Codes Safe? Security Guide</Link>
          </li>
          <li>
            <Link href="/guides/qr-code-use-cases">10 Creative QR Code Use Cases</Link>
          </li>
          <li>
            <Link href="/guides/how-to-create-qr-code">How to Create a QR Code: Step-by-Step</Link>
          </li>
          <li>
            <Link href="/">Back to Free QR Code Generator</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
