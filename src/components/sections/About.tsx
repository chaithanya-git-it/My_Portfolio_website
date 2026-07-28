"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AwardModal, awardsData, AwardDetail } from "@/components/ui/AwardModal";

export function About() {
  const [selectedAward, setSelectedAward] = useState<AwardDetail | null>(null);

  return (
    <Section id="about">
      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {/* Header */}
        <div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "var(--font-outfit, Arial, sans-serif)",
              fontWeight: 800,
              color: "#f8f8f2",
              letterSpacing: "-0.025em",
              marginBottom: "0.75rem",
            }}
          >
            About{" "}
            <span
              style={{
                background: "linear-gradient(to right, #9b6dff, #ff6da2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </span>
            .
          </h2>
          <div
            style={{
              width: "5rem",
              height: "3px",
              background: "linear-gradient(to right, #9b6dff, #ff6da2)",
              borderRadius: "9999px",
            }}
          />
        </div>

        {/* Two-column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                color: "rgba(248,248,242,0.75)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: 0 }}>
                Senior Software Engineer with{" "}
                <strong style={{ color: "#d8b4e2", fontWeight: 500 }}>3.9 years of experience</strong> planning &amp; delivering end-to-end mobile applications at{" "}
                <strong style={{ color: "#9b6dff", fontWeight: 500 }}>Digit Insurance</strong>, Bangalore.
              </p>
              <p style={{ margin: 0 }}>
                Proven track record of taking{" "}
                <strong style={{ color: "#f8f8f2", fontWeight: 500 }}>
                  end-to-end responsibility from requirement analysis to execution
                </strong>
                . Planned and guided backend &amp; mobile requirements for the Life Insurance Endorsement suite,
                Annuity &amp; Liveliness pension module (Camera, ML Kit, Speech-to-Text), and micro-frontend architecture
                (Re.Pack) while guiding a team of 2 engineers. Recognized for excellent communication, strong ownership, and consistently delivering high-quality products.
              </p>
            </div>
          </motion.div>

          {/* Profile Image visual with FLOATING AWARDS (3 AWARDS CLICKABLE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem 0",
            }}
          >
            <div style={{ position: "relative", width: "320px", height: "320px" }}>
              {/* Ambient Glow */}
              <div
                style={{
                  position: "absolute",
                  inset: "-40px",
                  background:
                    "radial-gradient(ellipse, rgba(155,109,255,0.25) 0%, rgba(255,109,162,0.15) 50%, transparent 70%)",
                  zIndex: 0,
                  filter: "blur(32px)",
                }}
              />

              {/* Outer animated gradient border */}
              <div
                style={{
                  position: "absolute",
                  inset: "-3px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #9b6dff, #ff6da2, #00f2fe, #9b6dff)",
                  backgroundSize: "300% 300%",
                  animation: "gradientRotate 4s linear infinite",
                  zIndex: 0,
                }}
              />

              {/* Inner dark background */}
              <div
                style={{
                  position: "absolute",
                  inset: "2px",
                  borderRadius: "50%",
                  background: "#0f0f14",
                  zIndex: 1,
                }}
              />

              {/* Central Photo */}
              <div
                style={{
                  position: "absolute",
                  inset: "6px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  zIndex: 2,
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src="/avatar.png"
                  alt="Chaithanya A — Senior Software Engineer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 15%",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
              </div>

              {/* TOP: Open to Work Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{
                  position: "absolute",
                  top: "-22px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    background: "rgba(15,15,20,0.95)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1.5px solid #10b981",
                    borderRadius: "9999px",
                    padding: "0.3rem 0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    boxShadow: "0 4px 18px rgba(16,185,129,0.35)",
                  }}
                >
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981", display: "inline-block" }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#ffffff", whiteSpace: "nowrap" }}>Open to Work</span>
                </motion.div>
              </motion.div>

              {/* BOTTOM: Single Trophy Badge — Triggers Confetti & 3-Award Modal */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{
                  position: "absolute",
                  bottom: "-22px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                  cursor: "pointer",
                }}
                onClick={() => setSelectedAward(awardsData.techtitan)}
              >
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  title="Click to view all 3 Official Awards & Certificates"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,215,0,0.2) 0%, rgba(15,15,20,0.95) 100%)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1.5px solid #ffd700",
                    borderRadius: "9999px",
                    padding: "0.32rem 0.95rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    boxShadow: "0 6px 20px rgba(255,215,0,0.4)",
                  }}
                >
                  <span style={{ fontSize: "0.95rem", lineHeight: 1 }}>🏆</span>
                  <span style={{ fontSize: "0.76rem", fontWeight: 800, color: "#ffd700", whiteSpace: "nowrap", letterSpacing: "0.2px" }}>
                    3 Honor Awards ✨
                  </span>
                </motion.div>
              </motion.div>

            </div>

            <style>{`
              @keyframes gradientRotate {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>
          </motion.div>
        </div>
      </div>

      {/* Render Award Viewer Modal */}
      <AwardModal award={selectedAward} onClose={() => setSelectedAward(null)} />
    </Section>
  );
}
