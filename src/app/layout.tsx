import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import IconSprite from "@/components/site/IconSprite";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Remodeling in Austin, TX | ZM Home Improvements",
  description:
    "Top-rated kitchen and bathroom remodeling in Austin, TX. Owner-led custom additions, clear communication, and a 5.0 Google rating. Get a free quote.",
  icons: { icon: "/assets/unnamed.png" },
  openGraph: {
    type: "website",
    title: "Kitchen & Bathroom Remodeling in Austin, TX | ZM Home Improvements",
    description:
      "Top-rated kitchen and bathroom remodeling in Austin, TX. Owner-led custom additions, clear communication, and a 5.0 Google rating. Get a free quote.",
    images: ["/assets/hero.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-white font-sans text-slate-900 antialiased">
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
