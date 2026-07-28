"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Bot, Bug, Database, Smartphone, Zap } from "lucide-react";

const skillGroups = [
  {
    category: "Mobile & Frontend",
    icon: Smartphone,
    color: "#9b6dff",
    items: ["React Native", "TypeScript", "JavaScript", "Redux", "Re.Pack (Micro-Frontend)", "React Navigation"],
  },
  {
    category: "AI, ML & Backend",
    icon: Zap,
    color: "#ff6da2",
    items: ["Google ML Kit", "Speech-to-Text", "Backend & API Planning", "Camera Integration", "Juspay Gateway"],
  },
  {
    category: "Tools & DevOps",
    icon: Database,
    color: "#9b6dff",
    items: ["Android Studio", "Xcode", "Jenkins CI/CD", "Firebase", "Bitbucket", "Postman"],
  },
  {
    category: "Ownership & Leadership",
    icon: Bot,
    color: "#ff6da2",
    items: ["End-to-End Execution", "Team Guidance & Mentorship", "Requirement Analysis", "Reactotron", "Dynatrace"],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "var(--font-outfit, Arial, sans-serif)",
              fontWeight: 800,
              color: "#f8f8f2",
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            Technical{" "}
            <span
              style={{
                background: "linear-gradient(to right, #ff6da2, #9b6dff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Arsenal
            </span>
            .
          </h2>
          <div
            style={{
              width: "5rem",
              height: "3px",
              background: "linear-gradient(to right, #ff6da2, #9b6dff)",
              borderRadius: "9999px",
            }}
          />
          <p style={{ color: "rgba(248,248,242,0.55)", fontSize: "1.1rem", maxWidth: "36rem", marginTop: "0.5rem" }}>
            Tools and technologies I use daily to build, ship, and maintain high-performance mobile apps.
          </p>
        </div>

        {/* Skill grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1rem",
                padding: "1.5rem",
                backdropFilter: "blur(12px)",
                cursor: "default",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
            >
              {/* Icon + title */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "0.625rem",
                    background: `${group.color}18`,
                    border: `1px solid ${group.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: group.color,
                  }}
                >
                  <group.icon size={18} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-outfit, Arial, sans-serif)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "#f8f8f2",
                    margin: 0,
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skill list */}
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "rgba(248,248,242,0.7)",
                      fontSize: "0.875rem",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: group.color,
                        opacity: 0.7,
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Cross-platform badge row */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ color: "rgba(248,248,242,0.4)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Platforms:</span>
          {["Android", "iOS"].map((p) => (
            <span
              key={p}
              style={{
                padding: "0.3rem 1rem",
                borderRadius: "9999px",
                background: "rgba(155,109,255,0.1)",
                border: "1px solid rgba(155,109,255,0.25)",
                color: "#d8b4e2",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
