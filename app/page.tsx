import QrGenerator from "./components/QrGenerator";
import AdUnit from "./components/AdUnit";
import Sidebar from "./components/Sidebar";
import ContentSections from "./components/ContentSections";

export default function Home() {
  return (
    <div className="flex min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <main className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto p-8 sm:p-12">
          <QrGenerator />
          <AdUnit />
          <ContentSections />
        </main>
        <footer className="flex gap-6 flex-wrap items-center justify-center py-8 text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Created by Scott Anderson.</p>
        </footer>
      </div>
    </div>
  );
}
