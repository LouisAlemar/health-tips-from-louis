import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Health Tips from Louis",
  description: "Health tips to get you body back on track",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-lg font-bold tracking-tight">
              <Link href="/" className="hover:underline">
                Health Tips from Louis
              </Link>
            </div>
            <ul className="flex space-x-6 text-sm font-medium">
              <li>
                <Link
                  href={"/"}
                  className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/health-tips"}
                  className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                >
                  Health Tips
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
