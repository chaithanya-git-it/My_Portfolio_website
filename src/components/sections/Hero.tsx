"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { AwardModal, awardsData, AwardDetail } from "@/components/ui/AwardModal";

export function Hero() {
  const [selectedAward, setSelectedAward] = useState<AwardDetail | null>(null);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow decoration */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(155,109,255,0.12) 0%, rgba(255,109,162,0.08) 50%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "64rem",
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: "2rem", display: "inline-block" }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(155,109,255,0.1)",
              border: "1px solid rgba(155,109,255,0.3)",
              borderRadius: "9999px",
              padding: "0.4rem 1rem",
            }}
          >
            <span style={{ position: "relative", display: "flex", width: "10px", height: "10px" }}>
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "#9b6dff",
                  opacity: 0.75,
                  animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
                }}
              />
              <span
                style={{
                  position: "relative",
                  display: "inline-flex",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#9b6dff",
                }}
              />
            </span>
            <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#d8b4e2", letterSpacing: "0.03em" }}>
              Open to new opportunities · Bangalore, IN
            </span>
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontWeight: 500,
            color: "#9b6dff",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Chaithanya A
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            fontFamily: "var(--font-outfit, Arial, sans-serif)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#f8f8f2",
            marginBottom: "1.5rem",
          }}
        >
          Building{" "}
          <span
            style={{
              background: "linear-gradient(to right, #9b6dff, #ff6da2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Scalable
          </span>
          <br />
          Mobile Experiences.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "rgba(248,248,242,0.65)",
            maxWidth: "38rem",
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: "2.5rem",
          }}
        >
          <strong style={{ color: "#f8f8f2", fontWeight: 500 }}>Senior Software Engineer</strong> with{" "}
          <strong style={{ color: "#d8b4e2", fontWeight: 500 }}>3.9 years of experience</strong> planning &amp; delivering end-to-end mobile applications. Honored with{" "}
          <span
            onClick={() => setSelectedAward(awardsData.techtitan)}
            style={{
              background: "linear-gradient(135deg, rgba(255,215,0,0.18) 0%, rgba(155,109,255,0.18) 100%)",
              border: "1.2px solid #ffd700",
              color: "#ffd700",
              fontWeight: 800,
              padding: "0.2rem 0.65rem",
              borderRadius: "9999px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              boxShadow: "0 2px 14px rgba(255,215,0,0.35)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            title="Click to view all 3 awards & certificates with celebration!"
          >
            🏆 3 awards at Digit Insurance ✨
          </span>
          : Recognized for excellent communication, strong ownership, and consistently delivering high-quality products.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <Link href="#projects" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 2rem",
                borderRadius: "9999px",
                background: "#9b6dff",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 24px rgba(155,109,255,0.4)",
                transition: "box-shadow 0.3s",
                fontFamily: "var(--font-inter, Arial, sans-serif)",
              }}
            >
              View Projects <ArrowRight size={18} />
            </motion.button>
          </Link>

          <Link href="#contact" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 2rem",
                borderRadius: "9999px",
                background: "transparent",
                color: "#9b6dff",
                fontWeight: 600,
                fontSize: "1rem",
                border: "1px solid #9b6dff",
                cursor: "pointer",
                transition: "background 0.3s",
                fontFamily: "var(--font-inter, Arial, sans-serif)",
              }}
            >
              <Mail size={18} /> Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: "flex",
            gap: "2.5rem",
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "3.9+", label: "Years Experience" },
            { num: "🧠", label: "Master Mind Award" },
            { num: "99.9%", label: "Crash-Free Sessions" },
            { num: "End-to-End", label: "Analysis to Execution" },
          ].map(({ num, label }) => (
            <div key={label}>
              <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#f8f8f2", margin: 0, fontFamily: "var(--font-outfit, Arial, sans-serif)" }}>{num}</p>
              <p style={{ fontSize: "0.75rem", color: "rgba(248,248,242,0.45)", margin: "0.2rem 0 0", letterSpacing: "0.05em" }}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <AwardModal award={selectedAward} onClose={() => setSelectedAward(null)} />

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
