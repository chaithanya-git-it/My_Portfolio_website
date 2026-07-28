import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingBackground } from "@/components/ui/FloatingBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaithanya A — Senior Software Engineer | Mobile Portfolio",
  description:
    "Portfolio of Chaithanya A, Senior Software Engineer with 3.9 years of experience. Master Mind & Tech Titan Award winner planning backend & app requirements and delivering scalable mobile apps at Digit Insurance.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body
        style={{
          backgroundColor: "#0f0f14",
          color: "#f8f8f2",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/* ── Animated gradient blobs ── */}
        <FloatingBackground />

        <Navbar />

        <main style={{ flexGrow: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
