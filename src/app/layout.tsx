import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/lib/mode";
import Script from "next/script";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono-annot",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stephencarew.dev"),
  title: "Stephen Carew — Instrument & Control Engineer / Product Engineer",
  description:
    "Instrumentation & control engineer (MSc, Teesside) who builds production software solo — including Ebenor, a UK property platform live at ebenor.co.uk.",
  keywords: [
    "Instrumentation Engineer",
    "Control Systems",
    "Product Engineer",
    "Full Stack Engineer",
    "Next.js",
    "Solana",
    "TypeScript",
  ],
  authors: [{ name: "Stephen Carew" }],
  creator: "Stephen Carew",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://stephencarew.dev",
    title: "Stephen Carew — Instrument & Control Engineer / Product Engineer",
    description:
      "Instrumentation & control engineer (MSc, Teesside) who builds production software solo — including Ebenor, a UK property platform live at ebenor.co.uk.",
    siteName: "Stephen Carew",
  },
  twitter: {
    card: "summary",
    title: "Stephen Carew — Drawing Package SC-2026",
    description:
      "Instrumentation & control engineer who ships production software solo.",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3efe4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mode="product" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${martianMono.variable} min-h-screen bg-paper font-sans text-ink antialiased`}
      >
        <ModeProvider>{children}</ModeProvider>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Stephen Carew",
              url: "https://stephencarew.dev",
              jobTitle:
                "Instrumentation & Control Engineer / Product Engineer",
              sameAs: [
                "https://github.com/stephen-carew",
                "https://linkedin.com/in/stephen-carew",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
