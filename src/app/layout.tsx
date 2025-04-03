import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DreamActor-M1 | Holistic, Expressive Human Image Animation",
  description: "DreamActor-M1: A cutting-edge DiT-based human animation framework with hybrid guidance for fine-grained holistic controllability, multi-scale adaptability, and long-term temporal coherence.",
  keywords: ["DreamActor-M1", "DreamActor-M1 AI", "human animation", "AI animation", "diffusion transformer", "DiT", "motion synthesis", "facial animation", "body animation"],
  openGraph: {
    title: "DreamActor-M1 | Holistic, Expressive Human Image Animation",
    description: "A cutting-edge DiT-based human animation framework with hybrid guidance",
    url: "https://dreamactor-m1.org",
    siteName: "DreamActor-M1",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DreamActor-M1 Human Animation AI"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamActor-M1 | Holistic, Expressive Human Image Animation",
    description: "A cutting-edge DiT-based human animation framework with hybrid guidance",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
