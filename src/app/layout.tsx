import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Stephen Carew | Full-Stack Engineer",
  description: "Full-Stack Engineer specializing in high-performance React architectures, Solana smart contracts, and cloud-native infrastructure.",
  keywords: ["Full Stack Engineer", "React", "Next.js", "Solana", "Blockchain", "TypeScript", "Enterprise Software"],
  authors: [{ name: "Stephen Carew" }],
  creator: "Stephen Carew",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stephen-carew.dev",
    title: "Stephen Carew | Full-Stack Engineer",
    description: "Building Scalable Distributed Systems & Blockchain Infrastructure.",
    siteName: "Stephen Carew Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stephen Carew Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen Carew | Full-Stack Engineer",
    description: "Building Scalable Distributed Systems & Blockchain Infrastructure.",
    creator: "@stephen_carew",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        jetbrainsMono.variable
      )}>
        {children}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Stephen Carew",
              "url": "https://stephen-carew.dev",
              "jobTitle": "Full-Stack Engineer",
              "sameAs": [
                "https://github.com/stephen-carew",
                "https://linkedin.com/in/stephen-carew",
                "https://twitter.com/stephen_carew"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
