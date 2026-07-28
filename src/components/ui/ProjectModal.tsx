"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ExternalLink, Github, CheckCircle2, Shield, Sparkles, Layers, Cpu } from "lucide-react";

export interface ProjectDetail {
  title: string;
  company: string;
  award?: string;
  awardBadge?: string;
  description: string;
  fullDetails?: string[];
  image: string;
  tags: string[];
  metrics: string[];
  accent: string;
  architectureDetails?: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10, 10, 15, 0.82)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "42rem",
            maxHeight: "85vh",
            overflowY: "auto",
            background: "#12121a",
            border: `1px solid ${project.accent}55`,
            borderRadius: "1.5rem",
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px ${project.accent}25`,
            zIndex: 10,
            color: "#f8f8f2",
          }}
        >
          {/* Top Banner Image with Overlay */}
          <div style={{ position: "relative", height: "200px", width: "100%", overflow: "hidden" }}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.7) contrast(1.1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to bottom, transparent 20%, #12121a 100%), linear-gradient(to right, ${project.accent}30, transparent)`,
              }}
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                background: "rgba(15, 15, 20, 0.75)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#f8f8f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
                zIndex: 20,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = project.accent;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(15, 15, 20, 0.75)";
                e.currentTarget.style.color = "#f8f8f2";
              }}
            >
              <X size={18} />
            </button>

            {/* Badges Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1.5rem",
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  background: "rgba(15, 15, 20, 0.85)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${project.accent}60`,
                  borderRadius: "9999px",
                  padding: "0.3rem 0.85rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: project.accent,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <Shield size={14} /> {project.company}
              </span>

              {project.award && (
                <span
                  style={{
                    background: "rgba(255, 215, 0, 0.15)",
                    border: "1px solid rgba(255, 215, 0, 0.5)",
                    borderRadius: "9999px",
                    padding: "0.3rem 0.85rem",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#ffd700",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Award size={14} /> {project.award}
                </span>
              )}
            </div>
          </div>

          {/* Modal Content Body */}
          <div style={{ padding: "1.75rem 1.75rem 2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontFamily: "var(--font-outfit, Arial, sans-serif)",
                  fontWeight: 800,
                  color: "#f8f8f2",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  color: "rgba(248, 248, 242, 0.75)",
                  fontSize: "1.02rem",
                  lineHeight: 1.7,
                  marginTop: "0.75rem",
                  fontWeight: 300,
                }}
              >
                {project.description}
              </p>
            </div>

            {/* Key Deliverables & Highlights */}
            {project.fullDetails && project.fullDetails.length > 0 && (
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  borderRadius: "1rem",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: project.accent,
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Sparkles size={16} /> Key Execution &amp; Engineering Highlights
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {project.fullDetails.map((detail, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(248, 248, 242, 0.8)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        lineHeight: 1.5,
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: project.accent, marginTop: "2px", flexShrink: 0 }} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Performance Metrics grid */}
            <div>
              <h4
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "rgba(248, 248, 242, 0.5)",
                  marginBottom: "0.75rem",
                }}
              >
                Impact &amp; Achievements
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    style={{
                      background: `${project.accent}10`,
                      border: `1px solid ${project.accent}25`,
                      borderRadius: "0.75rem",
                      padding: "0.85rem 1rem",
                      fontSize: "0.85rem",
                      color: "#f8f8f2",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: project.accent, fontWeight: 700 }}>✦</span>
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack tags */}
            <div>
              <h4
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "rgba(248, 248, 242, 0.5)",
                  marginBottom: "0.75rem",
                }}
              >
                Technologies &amp; Architecture
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "0.3rem 0.85rem",
                      borderRadius: "9999px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      fontSize: "0.8rem",
                      color: "rgba(248, 248, 242, 0.85)",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                marginTop: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={onClose}
                style={{
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  background: project.accent,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: `0 0 20px ${project.accent}40`,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Close View
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
