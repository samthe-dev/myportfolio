import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn(inter.variable, jetbrains.variable, "font-sans", geist.variable)}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://myportfolio-xi-tan-62.vercel.app/#person",
                  "name": "Sam",
                  "alternateName": "Sammi Ahmed",
                  "url": "https://myportfolio-xi-tan-62.vercel.app",
                  "image": "https://myportfolio-xi-tan-62.vercel.app/og.png",
                  "jobTitle": "AI Engineer & Frontend Developer",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "RexiO",
                    "url": "https://rexioproject.shop"
                  },
                  "description": "COO of RexiO. Building AI-powered digital experiences, agentic workflows, and premium interfaces.",
                  "knowsAbout": [
                    "Artificial Intelligence",
                    "Agentic Workflows",
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Full-Stack Development",
                    "Cybersecurity"
                  ],
                  "sameAs": [
                    "https://github.com/samthe-dev",
                    "https://t.me/seiz_1_e"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://myportfolio-xi-tan-62.vercel.app/#website",
                  "url": "https://myportfolio-xi-tan-62.vercel.app",
                  "name": "Sam | AI Engineer & Frontend Developer",
                  "publisher": { "@id": "https://myportfolio-xi-tan-62.vercel.app/#person" },
                  "inLanguage": "en"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://myportfolio-xi-tan-62.vercel.app/#webpage",
                  "url": "https://myportfolio-xi-tan-62.vercel.app",
                  "name": "Sam | AI Engineer & Frontend Developer | RexiO COO",
                  "description": "COO of RexiO. Building AI-powered digital experiences and agentic workflows.",
                  "isPartOf": { "@id": "https://myportfolio-xi-tan-62.vercel.app/#website" },
                  "about": { "@id": "https://myportfolio-xi-tan-62.vercel.app/#person" },
                  "inLanguage": "en"
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
