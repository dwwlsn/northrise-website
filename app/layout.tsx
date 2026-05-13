import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

/* TODO: replace dmSans with Aeonik (next/font/local) once license is acquired */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northrise.ai"),
  title: "Northrise — Applied AI. Built for people. Made to matter.",
  description:
    "Northrise builds focused AI products for specific users, workflows, and markets. Applied AI. Built for people. Made to matter.",
  openGraph: {
    title: "Northrise — Applied AI. Built for people. Made to matter.",
    description:
      "Northrise builds focused AI products for specific users, workflows, and markets.",
    url: "https://northrise.ai",
    siteName: "Northrise",
    locale: "en_US",
    type: "website",
    // og:image is auto-populated from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Northrise — Applied AI. Built for people. Made to matter.",
    description:
      "Northrise builds focused AI products for specific users, workflows, and markets.",
    // twitter:image falls back to opengraph-image.tsx output
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
