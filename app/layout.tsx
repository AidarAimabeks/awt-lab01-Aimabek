import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Advanced Web Technologies semester project",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="flex gap-4 border-b px-6 py-4">
          <Link href="/" className="rounded-md px-3 py-2 hover:bg-slate-100">
            Home
          </Link>
          <Link
            href="/courses"
            className="rounded-md px-3 py-2 hover:bg-slate-100"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="rounded-md px-3 py-2 hover:bg-slate-100"
          >
            About
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
