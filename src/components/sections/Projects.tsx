"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SuperApp — Micro-Frontend Migration",
    description:
      "Migrated legacy Life Insurance journeys into a micro-frontend SuperApp architecture using Re.Pack for modular delivery. Improved scalability, reduced bundle size, and enabled independent module loading — accelerating feature releases significantly.",
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Re.Pack", "Micro-Frontend", "Jenkins", "TypeScript"],
    metrics: ["↓ Reduced bundle size with modular loading", "Managed Jenkins CI/CD deployments", "Independent module delivery pipeline"],
    accent: "#9b6dff",
    company: "Digit Insurance",
  },
  {
    title: "Life Certificate & Smart Integrations",
    description:
      "Built a standalone Life Certificate issuing module with secure Juspay payment flows. Integrated Google Translation API for multilingual support, Face Detection, and Speech-to-Text features for an intelligent, accessible user experience.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Google APIs", "Juspay", "Face Detection", "Speech-to-Text"],
    metrics: ["Multilingual support via Google Translate API", "Secure payment gateway integration", "Biometric + voice-based UX"],
    accent: "#ff6da2",
    company: "Digit Insurance",
  },
  {
    title: "Barcode & QR + Shipping Automation",
    description:
      "Developed barcode & QR code generation modules for an e-commerce platform, improving process speed by 30%. Built shipping carrier API integrations enabling automated label generation and reducing fulfillment time by 20%.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "QR / Barcode", "Shipping APIs", "E-Commerce"],
    metrics: ["↑ 30% improvement in process speed", "↓ 20% reduction in fulfillment time", "Automated label generation"],
    accent: "#9b6dff",
    company: "PluginHive",
  },
];

export function Projects() {
  return (
    <Section id="projects">
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
            Selected{" "}
            <span
              style={{
                background: "linear-gradient(to right, #9b6dff, #ff6da2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Work
            </span>
            .
          </h2>
          <div
            style={{
              width: "5rem",
              height: "3px",
              background: "linear-gradient(to right, #9b6dff, #ff6da2)",
              borderRadius: "9999px",
              marginBottom: "1rem",
            }}
          />
          <p style={{ color: "rgba(248,248,242,0.55)", fontSize: "1.05rem", maxWidth: "36rem" }}>
            Real-world production projects delivered with clean architecture, performance, and zero delays.
          </p>
        </div>

        {/* Project cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1.25rem",
                overflow: "hidden",
                direction: index % 2 !== 0 ? "rtl" : "ltr",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", minHeight: "260px", overflow: "hidden", direction: "ltr" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `${project.accent}18`,
                    mixBlendMode: "overlay",
                    zIndex: 1,
                  }}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.75,
                    transition: "transform 0.6s ease, opacity 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.transform = "scale(1.07)";
                    (e.target as HTMLImageElement).style.opacity = "0.95";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.transform = "scale(1)";
                    (e.target as HTMLImageElement).style.opacity = "0.75";
                  }}
                />
                {/* Company label */}
                <div style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  background: "rgba(15,15,20,0.8)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${project.accent}40`,
                  borderRadius: "9999px",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.72rem",
                  color: project.accent,
                  fontWeight: 600,
                  zIndex: 2,
                }}>
                  {project.company}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem", direction: "ltr" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-outfit, Arial, sans-serif)",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "#f8f8f2",
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: "rgba(248,248,242,0.65)", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>
                  {project.description}
                </p>

                {/* Metrics */}
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {project.metrics.map((m) => (
                    <li key={m} style={{ color: "rgba(248,248,242,0.5)", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <span style={{ color: project.accent, fontSize: "1rem" }}>›</span> {m}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        background: `${project.accent}15`,
                        border: `1px solid ${project.accent}30`,
                        color: project.accent,
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                    marginTop: "auto",
                  }}
                >
                  {[
                    { Icon: Github, label: "GitHub" },
                    { Icon: ExternalLink, label: "Live" },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      style={{
                        width: "2.25rem",
                        height: "2.25rem",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(248,248,242,0.5)",
                        textDecoration: "none",
                        transition: "color 0.2s, border-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = project.accent;
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = `${project.accent}55`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,248,242,0.5)";
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                      }}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
