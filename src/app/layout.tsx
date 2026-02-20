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
  metadataBase: new URL("https://triplesystems.de"),
  title: "TripleSystems | Dein Business. Automatisiert.",
  description:
    "Maßgeschneiderte Dashboards und Automatisierungen für Autohändler, E-Commerce und Agenturen. CRM, Analysen, KPIs und N8N-Workflows – alles in einer Plattform.",
  keywords: [
    "Business Automatisierung",
    "Dashboard",
    "CRM",
    "N8N Automatisierung",
    "Autohändler Software",
    "E-Commerce Dashboard",
    "Agentur Dashboard",
    "Workflow Automatisierung",
    "KPI Dashboard",
    "TripleSystems",
  ],
  alternates: {
    canonical: "https://triplesystems.de",
  },
  openGraph: {
    title: "TripleSystems | Dein Business. Automatisiert.",
    description:
      "Maßgeschneiderte Dashboards und Automatisierungen für Autohändler, E-Commerce und Agenturen.",
    type: "website",
    url: "https://triplesystems.de",
    locale: "de_DE",
    siteName: "TripleSystems",
  },
  twitter: {
    card: "summary_large_image",
    title: "TripleSystems | Dein Business. Automatisiert.",
    description:
      "Maßgeschneiderte Dashboards und Automatisierungen für Autohändler, E-Commerce und Agenturen.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "DEINEN_VERIFICATION_CODE_HIER_EINFÜGEN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TripleSystems",
              url: "https://triplesystems.de",
              description:
                "Maßgeschneiderte Dashboards und Automatisierungen für Autohändler, E-Commerce und Agenturen.",
              founder: {
                "@type": "Person",
                name: "Deniz",
              },
              serviceArea: {
                "@type": "Country",
                name: "Deutschland",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Custom Dashboard",
                  description:
                    "All-in-One Dashboard mit CRM, Analytics, Automations und KPIs",
                },
                {
                  "@type": "Offer",
                  name: "N8N Automatisierungen",
                  description:
                    "Individuelle Workflow-Automatisierungen via N8N",
                },
              ],
            }),
          }}
        />
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
