import Link from "next/link";

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <nav className="text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            Guides
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
}
