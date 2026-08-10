"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AwardModal, awardsData, AwardDetail } from "@/components/ui/AwardModal";
import { companyStories, CompanyStory } from "@/components/sections/Projects";
import { CheckCircle, Award, Smartphone, Sparkles, FolderGit2, ChevronLeft, ChevronRight, X, Plus, CheckCircle2 } from "lucide-react";

export function About() {
  const [selectedAward, setSelectedAward] = useState<AwardDetail | null>(null);
  const [showHighlights, setShowHighlights] = useState<boolean>(false);
  const [activeStory, setActiveStory] = useState<CompanyStory | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

  const openStory = (story: CompanyStory, projectIndex: number = 0) => {
    setActiveStory(story);
    setCurrentProjectIndex(projectIndex);
  };

  const closeStory = () => {
    setActiveStory(null);
    setCurrentProjectIndex(0);
  };

  const nextProject = () => {
    if (!activeStory) return;
    if (activeStory.projects.length > 1) {
      setCurrentProjectIndex((prev) => (prev + 1) % activeStory.projects.length);
    } else {
      const currentStoryIndex = companyStories.findIndex((s) => s.id === activeStory.id);
      if (currentStoryIndex < companyStories.length - 1) {
        openStory(companyStories[currentStoryIndex + 1], 0);
      } else {
        openStory(companyStories[0], 0);
      }
    }
  };

  const prevProject = () => {
    if (!activeStory) return;
    if (activeStory.projects.length > 1) {
      setCurrentProjectIndex((prev) => (prev - 1 + activeStory.projects.length) % activeStory.projects.length);
    } else {
      const currentStoryIndex = companyStories.findIndex((s) => s.id === activeStory.id);
      if (currentStoryIndex > 0) {
        const prevStory = companyStories[currentStoryIndex - 1];
        openStory(prevStory, prevStory.projects.length - 1);
      } else {
        const lastStory = companyStories[companyStories.length - 1];
        openStory(lastStory, lastStory.projects.length - 1);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeStory) return;
      if (e.key === "Escape") closeStory();
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeStory, currentProjectIndex]);

  const activeProject = activeStory ? activeStory.projects[currentProjectIndex] : null;

  return (
    <Section id="about">
      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>

        {/* 2-Column Layout matching Reference "Who Am I" Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* LEFT COLUMN: Central Portrait + Centered Button & Stories below */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.75rem",
              position: "relative",
              padding: "1rem 0 1.5rem 0",
            }}
          >
            {/* 1. Central Portrait Frame (Unobscured) */}
            <div style={{ position: "relative", width: "320px", height: "320px" }}>

              {/* Ambient Radial Glow */}
              <div
                style={{
                  position: "absolute",
                  inset: "-30px",
                  background:
                    "radial-gradient(circle, rgba(155,109,255,0.22) 0%, rgba(255,109,162,0.12) 55%, transparent 75%)",
                  zIndex: 0,
                  filter: "blur(35px)",
                }}
              />

              {/* Outer Orbit Ring track */}
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  border: "1.5px dashed rgba(155,109,255,0.35)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />

              {/* Central Portrait Container with Neon Border Gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  borderRadius: "50%",
                  padding: "4px",
                  background: "linear-gradient(135deg, #9b6dff, #ff6da2, #00f2fe, #9b6dff)",
                  backgroundSize: "300% 300%",
                  animation: "gradientRotate 4s linear infinite",
                  boxShadow: "0 0 40px rgba(155,109,255,0.3)",
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
                  }}
                >
                  <img
                    src="/about-avatar.png"
                    alt="Chaithanya A — Senior Software Engineer"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 3%",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                    }}
                  />
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Bio / "Who Am I" content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Tagline */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <span style={{ height: "2px", width: "1.5rem", background: "#9b6dff" }} />
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#9b6dff", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                About Me
              </span>
            </div>

            {/* Main Header */}
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                fontFamily: "var(--font-outfit, Arial, sans-serif)",
                fontWeight: 800,
                color: "#f8f8f2",
                letterSpacing: "-0.025em",
                marginBottom: "1.25rem",
              }}
            >
              Who Am I
            </h2>

            {/* Bio introduction */}
            <p
              style={{
                color: "rgba(248,248,242,0.78)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "1.75rem",
              }}
            >
              I am a <strong style={{ color: "#f8f8f2", fontWeight: 600 }}>Senior Software Engineer</strong> with extensive experience of over <strong style={{ color: "#d8b4e2", fontWeight: 600 }}>3.9 years</strong> at <strong style={{ color: "#9b6dff", fontWeight: 600 }}>Digit Insurance</strong>. My expertise is in planning, architecting, and delivering high-performance Mobile Apps (React Native, iOS, Android) and full-stack integration.
            </p>

            {/* Key highlight feature blocks */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: "rgba(155,109,255,0.15)", border: "1px solid rgba(155,109,255,0.3)", padding: "0.5rem", borderRadius: "0.6rem", color: "#9b6dff", marginTop: "0.2rem" }}>
                  <CheckCircle size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f8f8f2", margin: "0 0 0.25rem 0", fontFamily: "var(--font-outfit, Arial, sans-serif)" }}>
                    I Can Develop End-to-End Applications
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "rgba(248,248,242,0.65)", margin: 0, lineHeight: 1.6 }}>
                    Taking full ownership from initial requirement analysis and backend architecture planning to final production execution and release.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: "rgba(255,109,162,0.15)", border: "1px solid rgba(255,109,162,0.3)", padding: "0.5rem", borderRadius: "0.6rem", color: "#ff6da2", marginTop: "0.2rem" }}>
                  <Smartphone size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f8f8f2", margin: "0 0 0.25rem 0", fontFamily: "var(--font-outfit, Arial, sans-serif)" }}>
                    Scalable Mobile Architecture &amp; Micro-Frontends
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "rgba(248,248,242,0.65)", margin: 0, lineHeight: 1.6 }}>
                    Architected Life Insurance Endorsement suites, Annuity pension modules (Camera, ML Kit, Speech-to-Text), and Re.Pack micro-frontends.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{ background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.3)", padding: "0.5rem", borderRadius: "0.6rem", color: "#ffd700", marginTop: "0.2rem", cursor: "pointer" }}
                  onClick={() => setSelectedAward(awardsData.techtitan)}
                  title="Click to view awards"
                >
                  <Award size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f8f8f2", margin: "0 0 0.25rem 0", fontFamily: "var(--font-outfit, Arial, sans-serif)" }}>
                    Award-Winning Technical Leadership
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "rgba(248,248,242,0.65)", margin: 0, lineHeight: 1.6 }}>
                    Honored with the Master Mind Award &amp; 3 Honor Awards for outstanding ownership, technical guidance, and team collaboration.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>


      </div>

      {/* FULL INTERACTIVE STORY VIEWER MODAL */}
      <AnimatePresence>
        {activeStory && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              background: "rgba(0, 0, 0, 0.78)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
            onClick={closeStory}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "640px",
                maxHeight: "92vh",
                background: "linear-gradient(165deg, #151520 0%, #0d0d14 100%)",
                border: `1.5px solid ${activeProject.accent}77`,
                borderRadius: "1.5rem",
                overflow: "hidden",
                boxShadow: `0 30px 80px rgba(0,0,0,0.85), 0 0 45px ${activeProject.accent}30`,
                display: "flex",
                flexDirection: "column",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Segmented Story Progress Bar */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  padding: "0.9rem 1.35rem 0.6rem 1.35rem",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  {activeStory.projects.map((p, idx) => (
                    <div
                      key={p.title}
                      onClick={() => setCurrentProjectIndex(idx)}
                      style={{
                        flex: 1,
                        height: "4px",
                        borderRadius: "9999px",
                        background:
                          idx === currentProjectIndex
                            ? activeProject.accent
                            : idx < currentProjectIndex
                            ? "#ffffff"
                            : "rgba(255,255,255,0.22)",
                        cursor: "pointer",
                        boxShadow: idx === currentProjectIndex ? `0 0 12px ${activeProject.accent}` : "none",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    overflowX: "auto",
                    paddingTop: "0.2rem",
                    paddingBottom: "0.2rem",
                    scrollbarWidth: "none",
                  }}
                >
                  {activeStory.projects.map((p, idx) => {
                    const isSelected = idx === currentProjectIndex;
                    return (
                      <button
                        key={p.title}
                        onClick={() => setCurrentProjectIndex(idx)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          padding: "0.35rem 0.85rem",
                          borderRadius: "9999px",
                          border: isSelected ? "1.5px solid #ffd700" : "1px solid rgba(255,255,255,0.15)",
                          background: isSelected
                            ? "linear-gradient(135deg, #ffd700, #ffb700)"
                            : "rgba(255,255,255,0.06)",
                          color: isSelected ? "#000000" : "rgba(248,248,242,0.8)",
                          fontSize: "0.78rem",
                          fontWeight: isSelected ? 800 : 600,
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          boxShadow: isSelected ? "0 4px 15px rgba(255,215,0,0.4)" : "none",
                          transition: "all 0.25s ease",
                        }}
                      >
                        <span>{p.award ? p.award.split(" ").slice(-1)[0] : "📌"}</span>
                        <span>{p.title.split("—")[0].split(" ")[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Story Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.6rem 1.35rem 0.9rem 1.35rem",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: activeStory.logoBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.2rem",
                      overflow: "hidden",
                      border: `1.5px solid ${activeProject.accent}`,
                      boxShadow: `0 0 12px ${activeProject.accent}40`,
                    }}
                  >
                    <img
                      src={activeStory.logo}
                      alt={activeStory.companyName}
                      style={{ width: "92%", height: "92%", objectFit: "contain" }}
                    />
                  </div>

                  <div>
                    <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 800, color: "#ffffff" }}>
                      {activeStory.companyName}
                    </h4>
                    <span style={{ fontSize: "0.75rem", color: "rgba(248,248,242,0.65)", fontWeight: 500 }}>
                      Project {currentProjectIndex + 1} of {activeStory.projects.length} • {activeStory.role}
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <button
                    onClick={prevProject}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#ffffff",
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    onClick={nextProject}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#ffffff",
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <ChevronRight size={20} />
                  </button>

                  <button
                    onClick={closeStory}
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#ffffff",
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      marginLeft: "0.25rem",
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Story Content */}
              <div
                style={{
                  padding: "1.5rem 1.6rem 1.8rem 1.6rem",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.35rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div
                    style={{
                      background: "rgba(20, 20, 30, 0.95)",
                      border: `1.5px solid ${activeProject.accent}`,
                      boxShadow: `0 4px 18px ${activeProject.accent}35`,
                      color: "#ffffff",
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      padding: "0.45rem 1.1rem",
                      borderRadius: "9999px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                    }}
                  >
                    <Award size={16} style={{ color: activeProject.accent }} />
                    <span style={{ color: activeProject.accent }}>{activeProject.award}</span>
                  </div>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-outfit, Arial, sans-serif)",
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      margin: "0 0 0.6rem 0",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {activeProject.title}
                  </h3>
                  <p style={{ color: "#e2e2ec", lineHeight: 1.75, margin: 0, fontSize: "0.98rem", fontWeight: 400 }}>
                    {activeProject.description}
                  </p>
                </div>

                {activeProject.fullDetails && (
                  <div
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "1rem",
                      padding: "1.1rem 1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: activeProject.accent,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Key Deliverables &amp; Responsibilities:
                    </span>
                    <ul
                      style={{
                        margin: 0,
                        padding: 0,
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      {activeProject.fullDetails.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          style={{
                            color: "#d1d1e0",
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.55rem",
                          }}
                        >
                          <CheckCircle2
                            size={16}
                            style={{ color: activeProject.accent, flexShrink: 0, marginTop: "0.2rem" }}
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.3rem 0.85rem",
                        borderRadius: "9999px",
                        background: `${activeProject.accent}20`,
                        border: `1.5px solid ${activeProject.accent}50`,
                        color: "#ffffff",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render Interactive Award Viewer Modal */}
      <AwardModal award={selectedAward} onClose={() => setSelectedAward(null)} />

      <style>{`
        @keyframes gradientRotate {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </Section>
  );
}
