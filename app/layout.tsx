import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JonnyLab",
  description:
    "Privacy-first apps and tools for iPhone, Android, and the web from JonnyLab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-zinc-50 text-zinc-950 font-sans antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
