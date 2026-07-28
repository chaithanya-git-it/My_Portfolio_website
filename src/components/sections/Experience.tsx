"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Digit Insurance",
    logo: "/digit-life-logo.svg",
    period: "Nov 2022 – Present",
    location: "Bangalore, IN",
    description:
      "Promoted to Senior Software Engineer. Received the Master Mind Award for successful project releases and the Tech Titan Award for zero-delay execution. Took complete end-to-end responsibility, planning and guiding backend & app requirements from initial requirement analysis to final release. Engineered the Life Insurance Endorsement module (Name, Email, Mobile, Address & Bank/Payment updates) and Annuity & Liveliness pension payout module (Camera, ML Kit, Speech-to-Text) while guiding a 2-developer team with excellent communication.",
    skills: ["React Native", "Backend & API Planning", "ML Kit", "Speech-to-Text", "Camera APIs", "Re.Pack", "TypeScript", "Team Guidance"],
    color: "#9b6dff",
    isCurrent: true,
  },
  {
    role: "Software Developer Intern",
    company: "PluginHive",
    logo: "/pluginhive.png",
    period: "Oct 2021 – Nov 2021",
    location: "Bangalore, IN",
    description:
      "Developed barcode & QR code generation modules improving process speed by 30%. Integrated shipping carrier APIs enabling automated label generation, reducing fulfillment time by 20%.",
    skills: ["React Native", "JavaScript", "Barcode APIs", "Shipping APIs"],
    color: "#ff6da2",
    isCurrent: false,
  },
];

export function Experience() {
  return (
    <Section id="experience" className="pt-6 pb-20 md:pt-8 md:pb-32">
      <div style={{ display: "flex", flexDirection: "column", gap: "4rem", maxWidth: "52rem", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center" }}>
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
            Work{" "}
            <span style={{ background: "linear-gradient(to right, #9b6dff, #ff6da2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Experience
            </span>
            .
          </h2>
          <div style={{ width: "5rem", height: "3px", background: "linear-gradient(to right, #9b6dff, #ff6da2)", borderRadius: "9999px", margin: "0 auto" }} />
        </div>

        {/* ── Experience Timeline ── */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ display: "flex", alignItems: "stretch" }}
            >
              {/* Left column: dot + line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "2.5rem", flexShrink: 0 }}>
                {/* Dot — always centered on the line */}
                <div style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#0f0f14",
                  border: `2px solid ${exp.color}`,
                  boxShadow: `0 0 14px ${exp.color}99`,
                  flexShrink: 0,
                  marginTop: "1.75rem",
                }} />
                {/* Line segment connecting to next card */}
                {index < experiences.length - 1 && (
                  <div style={{
                    flex: 1,
                    width: "1px",
                    background: `linear-gradient(to bottom, ${exp.color}80, ${experiences[index + 1].color}30)`,
                    marginTop: "6px",
                  }} />
                )}
              </div>

              {/* Right column: card */}
              <div style={{ flex: 1, paddingBottom: index < experiences.length - 1 ? "2rem" : "0" }}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "1rem",
                    padding: "1.75rem",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  {/* Top row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          background: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "0.35rem",
                          border: `1.5px solid ${exp.color}`,
                          boxShadow: `0 0 10px ${exp.color}35`,
                          overflow: "hidden",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          style={{
                            width: "90%",
                            height: "90%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <h3 style={{ fontFamily: "var(--font-outfit, Arial, sans-serif)", fontWeight: 700, fontSize: "1.2rem", color: "#f8f8f2", margin: 0 }}>
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#9b6dff", background: "rgba(155,109,255,0.12)", border: "1px solid rgba(155,109,255,0.3)", borderRadius: "9999px", padding: "0.15rem 0.5rem" }}>
                              Current
                            </span>
                          )}
                        </div>
                        <p style={{ color: exp.color, fontWeight: 500, margin: "0.1rem 0 0" }}>{exp.company} · {exp.location}</p>
                      </div>
                    </div>
                    <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(248,248,242,0.6)", fontSize: "0.8rem", fontWeight: 500, whiteSpace: "nowrap" }}>
                      {exp.period}
                    </span>
                  </div>

                  <p style={{ color: "rgba(248,248,242,0.65)", lineHeight: 1.7, margin: "0 0 1.25rem", fontSize: "0.95rem" }}>
                    {exp.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {exp.skills.map((s) => (
                      <span key={s} style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: "0.375rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(248,248,242,0.55)" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Education (separate, no timeline dot) ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Education label */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#ffd700",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              background: "rgba(255,215,0,0.1)",
              border: "1px solid rgba(255,215,0,0.25)",
              borderRadius: "9999px",
              padding: "0.25rem 0.75rem",
            }}>
              Education
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,215,0,0.15)" }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              background: "rgba(255,215,0,0.03)",
              border: "1px solid rgba(255,215,0,0.15)",
              borderRadius: "1rem",
              padding: "1.5rem 1.75rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.75rem",
                  background: "rgba(255,215,0,0.1)",
                  border: "1px solid rgba(255,215,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  flexShrink: 0,
                }}>
                  🎓
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-outfit, Arial, sans-serif)", fontWeight: 700, fontSize: "1.05rem", color: "#f8f8f2", margin: 0 }}>
                    Bachelor of Engineering (B.E.)
                  </p>
                  <p style={{ color: "rgba(255,215,0,0.75)", fontSize: "0.875rem", margin: "0.2rem 0 0" }}>
                    East Point College of Engineering &amp; Technology, VTU · Bangalore, IN
                  </p>
                </div>
              </div>
              <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(248,248,242,0.5)", fontSize: "0.8rem", whiteSpace: "nowrap" }}>
                Aug 2018 – Jun 2022
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
