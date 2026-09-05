"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Award, CheckCircle2, Sparkles, FileText } from "lucide-react";
import { AwardModal, awardsData, AwardDetail } from "@/components/ui/AwardModal";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { getAssetPath } from "@/lib/basePath";

export function Hero() {
  const [selectedAward, setSelectedAward] = useState<AwardDetail | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "6.5rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial glowing auras */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.95, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(155,109,255,0.15) 0%, rgba(255,109,162,0.09) 45%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "76rem",
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 2-Column Hero Grid matching Reference Design */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Greeting, Headline, Paragraph & CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Availability status badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginBottom: "1.5rem", display: "inline-block" }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
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
                      background: "#10b981",
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
                      background: "#10b981",
                    }}
                  />
                </span>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#d8b4e2", letterSpacing: "0.02em" }}>
                  Open to new opportunities
                </span>
              </motion.div>
            </motion.div>

            {/* Main Greeting - matching reference layout typography */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
                fontFamily: "var(--font-outfit, Arial, sans-serif)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "#f8f8f2",
                marginBottom: "1rem",
              }}
            >
              Hello, I&apos;m{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #9b6dff, #ff6da2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                }}
              >
                Chaithanya A
              </span>
            </h1>

            {/* Role title */}
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2.1rem)",
                fontFamily: "var(--font-outfit, Arial, sans-serif)",
                fontWeight: 700,
                color: "#9b6dff",
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              Senior Software Engineer
            </h2>

            {/* Bio summary paragraph */}
            <p
              style={{
                fontSize: "clamp(0.98rem, 1.8vw, 1.1rem)",
                color: "rgba(248,248,242,0.72)",
                maxWidth: "34rem",
                lineHeight: 1.75,
                fontWeight: 300,
                marginBottom: "2.25rem",
              }}
            >
              Building scalable, high-performance mobile &amp; web applications with{" "}
              <strong style={{ color: "#f8f8f2", fontWeight: 500 }}>3.9+ years of experience</strong> taking complete end-to-end ownership from analysis to execution. Honored with{" "}
              <span
                onClick={() => setSelectedAward(awardsData.techtitan)}
                style={{
                  background: "linear-gradient(135deg, rgba(255,215,0,0.18) 0%, rgba(155,109,255,0.18) 100%)",
                  border: "1.2px solid #ffd700",
                  color: "#ffd700",
                  fontWeight: 800,
                  padding: "0.15rem 0.55rem",
                  borderRadius: "9999px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  boxShadow: "0 2px 14px rgba(255,215,0,0.3)",
                }}
                title="Click to view Master Mind & Tech Titan Awards!"
              >
                🏆 Master Mind &amp; Tech Titan Awards ✨
              </span>
              .
            </p>

            {/* CTA buttons - matching reference design: Ghost button + Primary Pill button */}
            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="#about" style={{ textDecoration: "none" }}>
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "rgba(155,109,255,0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.8rem 2.2rem",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1.5px solid rgba(155,109,255,0.4)",
                    color: "#f8f8f2",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    fontFamily: "var(--font-inter, Arial, sans-serif)",
                    transition: "all 0.3s ease",
                  }}
                >
                  LEARN MORE <ArrowRight size={17} />
                </motion.button>
              </Link>

              <Link href="#contact" style={{ textDecoration: "none" }}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(155,109,255,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.8rem 2.2rem",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #9b6dff 0%, #ff6da2 100%)",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 0 20px rgba(155,109,255,0.35)",
                    fontFamily: "var(--font-inter, Arial, sans-serif)",
                  }}
                >
                  CONTACT ME <Mail size={17} />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait + Background Aura + Floating Top-Right Companies Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              padding: "1rem",
            }}
          >
            {/* Central hero portrait wrapper */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "380px",
                aspectRatio: "1/1.05",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Soft circular glowing background behind portrait */}
              <div
                style={{
                  position: "absolute",
                  inset: "10px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(155,109,255,0.3) 0%, rgba(255,109,162,0.18) 60%, transparent 80%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />

              {/* Decorative background ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  borderRadius: "50%",
                  border: "1.5px dashed rgba(155,109,255,0.3)",
                  animation: "orbitSpin 40s linear infinite",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />

              {/* Portrait image container with glass border frame */}
              <div
                style={{
                  position: "relative",
                  width: "88%",
                  height: "88%",
                  borderRadius: "50%",
                  padding: "6px",
                  background: "linear-gradient(135deg, rgba(155,109,255,0.6), rgba(255,109,162,0.4), rgba(0,242,254,0.3))",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(155,109,255,0.25)",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "#0f0f14",
                    position: "relative",
                  }}
                >
                  <img
                    src={getAssetPath("/avatar.png")}
                    alt="Chaithanya A — Senior Software Engineer"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 3%",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>
              </div>

              {/* FLOATING CARD Top-Right (Shifted outward so it never hides the face) */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                style={{
                  position: "absolute",
                  top: "-35px",
                  right: "-55px",
                  zIndex: 10,
                }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    background: "rgba(15, 15, 20, 0.88)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(155, 109, 255, 0.4)",
                    borderRadius: "1.25rem",
                    padding: "0.9rem 1.25rem",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(155,109,255,0.2)",
                    maxWidth: "230px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "#ffffff",
                        padding: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 12px rgba(252,185,18,0.3)",
                      }}
                    >
                      <img src={getAssetPath("/digit-life-logo.svg")} alt="Digit Insurance Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#f8f8f2", margin: 0, fontFamily: "var(--font-outfit, Arial, sans-serif)" }}>
                        Digit Insurance
                      </p>
                      <p style={{ fontSize: "0.68rem", color: "rgba(248,248,242,0.5)", margin: 0 }}>
                        Senior Software Engineer
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", paddingTop: "0.4rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <CheckCircle2 size={13} style={{ color: "#10b981" }} />
                      <span style={{ fontSize: "0.72rem", color: "rgba(248,248,242,0.85)", fontWeight: 500 }}>3.9+ Years Ownership</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* FLOATING CARD Bottom-Left (Key stats badge) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "-15px",
                  zIndex: 10,
                }}
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    background: "rgba(15, 15, 20, 0.88)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 109, 162, 0.4)",
                    borderRadius: "1rem",
                    padding: "0.75rem 1.1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(255,109,162,0.2)",
                  }}
                >
                  <div style={{ fontSize: "1.5rem" }}>🏆</div>
                  <div>
                    <p style={{ fontSize: "0.82rem", fontWeight: 800, color: "#f8f8f2", margin: 0, fontFamily: "var(--font-outfit, Arial, sans-serif)" }}>
                      Master Mind
                    </p>
                    <p style={{ fontSize: "0.68rem", color: "#ff6da2", margin: 0, fontWeight: 600 }}>
                      Award Winner
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row at bottom of Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2rem",
            marginTop: "4.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {[
            { num: "3.9+", label: "Years Experience" },
            { num: "3", label: "Awards" },
            { num: "End-to-End", label: "Analysis to Execution" },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "1.65rem", fontWeight: 800, color: "#f8f8f2", margin: 0, fontFamily: "var(--font-outfit, Arial, sans-serif)" }}>{num}</p>
              <p style={{ fontSize: "0.78rem", color: "rgba(248,248,242,0.5)", margin: "0.25rem 0 0", letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Award Viewer Modal */}
      <AwardModal award={selectedAward} onClose={() => setSelectedAward(null)} />

      {/* Interactive Resume Viewer & Downloader Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
