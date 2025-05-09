"use client";

import { useState } from "react";
import QRCode from "react-qr-code";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [url, setUrl] = useState("");
  const [inputValue, setInputValue] = useState("");
  const isValidUrl = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };
  // Handler for copying QR code as image to clipboard
  const handleCopyQrCode = async () => {
    const svg = document.getElementById("qr-svg");
    const canvas = document.getElementById(
      "qr-canvas"
    ) as HTMLCanvasElement | null;

    if (svg && canvas) {
      const xml = new XMLSerializer().serializeToString(svg);
      const svg64 = btoa(unescape(encodeURIComponent(xml)));
      const image64 = "data:image/svg+xml;base64," + svg64;
      const img = new window.Image();
      img.onload = async function () {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // Draw the SVG at 800x800
          ctx.drawImage(img, 0, 0, 800, 800);
          canvas.toBlob(async (blob) => {
            if (blob) {
              try {
                await navigator.clipboard.write([
                  new window.ClipboardItem({ "image/png": blob }),
                ]);
                toast.success("QR code copied to clipboard!");
              } catch (err) {
                toast.error("Failed to copy QR code.");
              }
            }
          });
        }
      };
      img.src = image64;
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Toaster position="top-center" />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-lg mx-auto">
        {/* QR Code Generator Section */}
        <section className="w-full flex flex-col items-center gap-4 p-6 bg-white dark:bg-black/40 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-8">
          <h1 className="text-2xl font-bold mb-2">Free QR Code Generator</h1>
          <p className="text-base text-gray-700 dark:text-gray-300 text-center mb-2">
            Enter a URL to generate a static QR code. Static QR codes never
            expire.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-2 w-full"
            onSubmit={(e) => {
              e.preventDefault();
              if (isValidUrl(inputValue)) setUrl(inputValue);
            }}
          >
            <input
              type="url"
              placeholder="Enter a URL (e.g. https://example.com)"
              className="flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black dark:text-white"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
              pattern="https?://.+"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-semibold"
            >
              Generate
            </button>
          </form>
          {url && isValidUrl(url) && (
            <div className="flex flex-col items-center gap-2 mt-4">
              <div style={{ position: "relative" }}>
                <QRCode
                  id="qr-svg"
                  value={url}
                  size={180}
                  bgColor="white"
                  fgColor="#171717"
                />
                {/* Hidden canvas for copying (large size) */}
                <canvas
                  id="qr-canvas"
                  width={800}
                  height={800}
                  style={{ display: "none" }}
                ></canvas>
              </div>
              <span className="text-xs break-all text-center text-gray-600 dark:text-gray-300">
                {url}
              </span>
              <button
                type="button"
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-semibold mt-2"
                onClick={handleCopyQrCode}
              >
                Copy QR Code
              </button>
            </div>
          )}
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>© {new Date().getFullYear()} Created by Scott Anderson.</p>
      </footer>
    </div>
  );
}
