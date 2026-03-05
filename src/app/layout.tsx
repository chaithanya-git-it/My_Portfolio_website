import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

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
  title: "React Native Developer Portfolio",
  description:
    "Premium, elegant portfolio for a React Native Developer with 3.5 years of experience building scalable mobile experiences.",
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
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: "-10%",
            left: "-10%",
            width: "40%",
            height: "40%",
            borderRadius: "50%",
            background: "rgba(155,109,255,0.18)",
            filter: "blur(120px)",
            zIndex: 0,
            pointerEvents: "none",
            animation: "blob 7s infinite",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            bottom: "-10%",
            right: "-10%",
            width: "40%",
            height: "40%",
            borderRadius: "50%",
            background: "rgba(255,109,162,0.15)",
            filter: "blur(120px)",
            zIndex: 0,
            pointerEvents: "none",
            animation: "blob 7s infinite 2s",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: "40%",
            left: "20%",
            width: "30%",
            height: "30%",
            borderRadius: "50%",
            background: "rgba(216,180,226,0.08)",
            filter: "blur(100px)",
            zIndex: 0,
            pointerEvents: "none",
            animation: "blob 7s infinite 4s",
          }}
        />

        <Navbar />

        <main style={{ flexGrow: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
