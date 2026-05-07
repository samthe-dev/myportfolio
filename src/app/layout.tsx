import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samthe-dev.github.io"),
  title: "Sam | AI Engineer & Frontend Developer | RexiO COO",
  description:
    "Sam — COO of RexiO, AI Engineer, Frontend Developer. Specializing in Next.js, React, AI agent systems, and premium digital experiences.",
  keywords: [
    "Sam",
    "RexiO",
    "AI Engineer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "AI Agent",
    "COO",
  ],
  authors: [{ name: "Sam" }],
  creator: "Sam (samthe-dev)",
  openGraph: {
    type: "website",
    title: "Sam | AI Engineer & Frontend Developer",
    description:
      "COO of RexiO. Building AI-powered digital experiences and agentic workflows.",
    url: "https://samthe-dev.github.io/myportfolio/",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam | AI Engineer & Frontend Developer",
    description: "COO of RexiO. Building AI-powered digital experiences.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
