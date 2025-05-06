"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

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
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-lg mx-auto">
        {/* QR Code Generator Section */}
        <section className="w-full flex flex-col items-center gap-4 p-6 bg-white dark:bg-black/40 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-8">
          <h1 className="text-2xl font-bold mb-2">Free QR Code Generator</h1>
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
              <QRCode
                value={url}
                size={180}
                bgColor="white"
                fgColor="#171717"
              />
              <span className="text-xs break-all text-center text-gray-600 dark:text-gray-300">
                {url}
              </span>
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
