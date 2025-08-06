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
        <div>
          <Link href={"/"}>Home</Link>
          <Link href={"/health-tips"}>Health Tips</Link>
          <Link href={"/about"}>About</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
