import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stephen Carew - Blockchain Engineer & Full Stack Developer",
  description: "Passionate Blockchain Engineer and Full Stack Developer with 2+ years of experience creating innovative web applications and decentralized solutions. Currently pursuing a Master's in Instrumentation and Control in the UK.",
  keywords: ["Stephen Carew", "Blockchain Engineer", "Full Stack Developer", "React", "Next.js", "Solana", "Web3", "DeFi", "NFT"],
  authors: [{ name: "Stephen Carew" }],
  creator: "Stephen Carew",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stephen-carew.dev",
    title: "Stephen Carew - Blockchain Engineer & Full Stack Developer",
    description: "Passionate Blockchain Engineer and Full Stack Developer specializing in React, Next.js, and Solana blockchain development.",
    siteName: "Stephen Carew Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen Carew - Blockchain Engineer & Full Stack Developer",
    description: "Passionate Blockchain Engineer and Full Stack Developer specializing in React, Next.js, and Solana blockchain development.",
    creator: "@stephen_carew",
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
