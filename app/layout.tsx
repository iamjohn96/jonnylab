import type { Metadata } from "next";
import { headers } from "next/headers";
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
    "Simple, useful, private, and human-controlled products for real everyday problems.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const documentLanguage =
    (await headers()).get("x-document-language") === "ko" ? "ko" : "en";

  return (
    <html lang={documentLanguage} className={inter.variable}>
      <body className="min-h-screen bg-zinc-50 text-zinc-950 font-sans antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
