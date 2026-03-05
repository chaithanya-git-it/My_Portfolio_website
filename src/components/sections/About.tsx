"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Award, Smartphone, Zap } from "lucide-react";

const highlights = [
  {
    icon: Award,
    color: "#ffd700",
    title: "Tech Titan Award",
    desc: "Recognized for zero-delay delivery at Digit Insurance.",
  },
  {
    icon: Zap,
    color: "#ff6da2",
    title: "Performance",
    desc: "99.9% crash-free sessions across all apps.",
  },
  {
    icon: Smartphone,
    color: "#9b6dff",
    title: "Native Expertise",
    desc: "Android & iOS with micro-frontend architecture.",
  },
];

export function About() {
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

        {/* Two-column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: "rgba(248,248,242,0.75)", fontSize: "1.05rem", lineHeight: 1.8 }}>
              <p style={{ margin: 0 }}>
                Mobile App Developer with{" "}
                <strong style={{ color: "#d8b4e2", fontWeight: 500 }}>3.5 years of experience</strong> building
                Android and iOS applications using React Native, JavaScript, and TypeScript.
              </p>
              <p style={{ margin: 0 }}>
                Strong expertise in{" "}
                <strong style={{ color: "#f8f8f2", fontWeight: 500 }}>
                  module migration, micro-frontend architecture (Re.Pack), debugging, deployments,
                  and performance optimisation.
                </strong>{" "}
                Currently at <strong style={{ color: "#9b6dff", fontWeight: 500 }}>Digit Insurance</strong>, Bangalore.
              </p>
              <p style={{ margin: 0 }}>
                🏆 Awarded the{" "}
                <strong style={{ color: "#ffd700", fontWeight: 600 }}>Tech Titan Award</strong> for delivering
                high-quality features with zero delays. Highly focused on clean code, app stability, and
                user-centric solutions.
              </p>
            </div>

            {/* Highlights */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: "1.5rem",
                marginTop: "2.5rem",
              }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i }}
                  style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "0.75rem",
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                    }}
                  >
                    <item.icon size={18} />
                  </div>
                  <p style={{ fontWeight: 600, color: "#f8f8f2", margin: 0, fontSize: "0.9rem" }}>{item.title}</p>
                  <p style={{ color: "rgba(248,248,242,0.5)", margin: 0, fontSize: "0.8rem" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile image visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <div style={{ position: "relative", width: "340px", height: "340px" }}>

              {/* Ambient glow behind card */}
              <div style={{
                position: "absolute",
                inset: "-40px",
                background: "radial-gradient(ellipse, rgba(155,109,255,0.2) 0%, rgba(255,109,162,0.1) 50%, transparent 70%)",
                zIndex: 0,
                filter: "blur(30px)",
              }} />

              {/* Outer animated gradient border */}
              <div style={{
                position: "absolute",
                inset: "-3px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #9b6dff, #ff6da2, #9b6dff)",
                backgroundSize: "300% 300%",
                animation: "gradientRotate 4s linear infinite",
                zIndex: 0,
              }} />

              {/* Inner dark gap */}
              <div style={{
                position: "absolute",
                inset: "2px",
                borderRadius: "50%",
                background: "#0f0f14",
                zIndex: 1,
              }} />

              {/* Photo */}
              <div style={{
                position: "absolute",
                inset: "5px",
                borderRadius: "50%",
                overflow: "hidden",
                zIndex: 2,
              }}>
                <img
                  src="/avatar.png"
                  alt="Chaithanya A — React Native Developer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 15%",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                />
              </div>

              {/* "Open to work" badge — top right */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "-24px",
                  background: "rgba(15,15,20,0.9)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(155,109,255,0.4)",
                  borderRadius: "9999px",
                  padding: "0.35rem 0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  zIndex: 10,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#9b6dff", boxShadow: "0 0 8px #9b6dff", display: "inline-block" }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#d8b4e2", whiteSpace: "nowrap" }}>Open to work</span>
              </motion.div>

              {/* 🏆 Tech Titan badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "-28px",
                  background: "rgba(15,15,20,0.9)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,215,0,0.3)",
                  borderRadius: "1rem",
                  padding: "0.6rem 1rem",
                  zIndex: 10,
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <p style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffd700", margin: 0, lineHeight: 1 }}>🏆</p>
                <p style={{ fontSize: "0.62rem", color: "rgba(248,248,242,0.55)", margin: "0.2rem 0 0", whiteSpace: "nowrap" }}>Tech Titan</p>
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
    </Section>
  );
}


