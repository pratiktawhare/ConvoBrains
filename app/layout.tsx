import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ConvoBrains — AI-Powered Customer Data Platform",
    template: "%s | ConvoBrains",
  },
  icons: {
    icon: "/convobrains-logo.webp",
  },
  description:
    "ConvoBrains extracts intent from every call and chat, builds persistent customer profiles, and triggers the right action — automatically. The CDP built for conversation intelligence.",
  keywords: [
    "CDP",
    "customer data platform",
    "conversation intelligence",
    "AI marketing",
    "call analytics",
    "customer profiles",
    "marketing automation",
  ],
  openGraph: {
    title: "ConvoBrains — AI-Powered Customer Data Platform",
    description:
      "Turn every conversation into a signal. Turn signals into revenue.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
