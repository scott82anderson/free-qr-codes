"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "generator", label: "QR Code Generator" },
  { id: "what-is-qr", label: "What is a QR Code?" },
  { id: "how-qr-works", label: "How QR Codes Work" },
  { id: "types", label: "Types of QR Codes" },
  { id: "use-cases", label: "Common Use Cases" },
  { id: "benefits", label: "Benefits of QR Codes" },
  { id: "best-practices", label: "Best Practices" },
  { id: "faq", label: "FAQ" },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("generator");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
    );

    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-64 flex-col border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-black/40 z-40 overflow-y-auto">
      <div className="p-6 pb-3">
        <span className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Contents
        </span>
      </div>
      <nav className="flex flex-col gap-0.5 px-3 pb-6">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block px-3 py-2 text-sm rounded transition-colors ${
              activeId === item.id
                ? "border-l-2 border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-semibold"
                : "border-l-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
