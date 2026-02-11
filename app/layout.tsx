import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChatPopover } from "@/components/chat-popover";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TimeTravel Interactive | Voyagez à travers le temps",
  description:
    "Explorez les époques les plus fascinantes de l'histoire avec TimeTravel Interactive. Paris 1889, l'ère des dinosaures, la Renaissance florentine - vivez des expériences immersives uniques.",
  keywords: [
    "voyage temporel",
    "histoire",
    "expérience immersive",
    "Paris 1889",
    "dinosaures",
    "Renaissance",
  ],
  openGraph: {
    title: "TimeTravel Interactive | Voyagez à travers le temps",
    description:
      "Explorez les époques les plus fascinantes de l'histoire. Vivez des expériences immersives uniques au cœur du passé.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ChatPopover />
      </body>
    </html>
  );
}
