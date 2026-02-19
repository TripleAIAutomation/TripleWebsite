import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TripleSystems | Your Business. Automated.",
  description: "Streamline your business operations with an all-in-one dashboard. Track finances, manage leads, and automate workflows.",
  keywords: ["business automation", "dashboard", "CRM", "finance tracking", "lead management"],
  openGraph: {
    title: "TripleSystems | Your Business. Automated.",
    description: "Streamline your business operations with an all-in-one dashboard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <CookieBanner />
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="3IfQbeJX2KN0Vp4pFV"
          data-version="062024"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
