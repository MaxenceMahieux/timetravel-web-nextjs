import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ChatPopover } from "@/components/chat-popover";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
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
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
        <ChatPopover />
      </body>
    </html>
  );
}
