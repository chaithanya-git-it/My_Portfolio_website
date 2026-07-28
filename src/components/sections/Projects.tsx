"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Sparkles, ChevronLeft, ChevronRight, X, Plus, Award, CheckCircle2, Maximize2 } from "lucide-react";
import { ProjectDetail } from "@/components/ui/ProjectModal";

export interface CompanyStory {
  id: string;
  companyName: string;
  shortName: string;
  role: string;
  logo: string;
  isSvgLogo?: boolean;
  logoBg: string;
  ringGradient: string;
  badge: string;
  projects: (ProjectDetail & { description: string })[];
}

export const companyStories: CompanyStory[] = [
  {
    id: "digit",
    companyName: "Digit Life Insurance",
    shortName: "Digit Life",
    role: "Senior Software Engineer (3.9 Yrs)",
    logo: "/digit-life-logo.svg",
    isSvgLogo: true,
    logoBg: "#ffffff",
    ringGradient: "linear-gradient(135deg, #9b6dff, #ff6da2, #00f2fe)",
    badge: "3 Projects",
    projects: [
      {
        title: "Annuity & Liveliness Pension Payout",
        company: "Digit Insurance",
        award: "Master Mind Award 🧠",
        description:
          "Engineered an automated pension payout and liveliness module for senior citizens that earned the Master Mind Award upon promotion to Senior Software Engineer (SSE). Took end-to-end ownership, leading requirements, custom Camera flows, Google ML Kit facial verification, Speech-to-Text recognition, and backend API contracts.",
        fullDetails: [
          "Awarded the prestigious Master Mind Award upon promotion to Senior Software Engineer (SSE).",
          "Took complete end-to-end ownership, leading backend & app requirements from analysis to deployment.",
          "Integrated custom native camera streams with Google ML Kit to prevent biometric spoofing during liveliness checks.",
          "Implemented Speech-to-Text recognition to assist senior citizens with hands-free verification.",
          "Planned API contracts and backend verification pipelines for instant pension payout approval.",
        ],
        image: "/pension.png",
        tags: ["React Native", "Google ML Kit", "Speech-to-Text", "Camera API", "Backend & API Planning"],
        metrics: [
          "Master Mind Award winning release",
          "ML Kit face & liveliness detection + Speech-to-Text",
          "Backend & API planning + automated payout validation",
        ],
        accent: "#9b6dff",
      },
      {
        title: "Life Insurance Endorsement Suite",
        company: "Digit Insurance",
        award: "Core Lead Platform 🛡️",
        description:
          "Handled end-to-end execution from requirement analysis to production release. Built a comprehensive Life Insurance Endorsement module covering Name, Email, Mobile number, Address updates, Bank Account detail modifications, and payment adjustments while planning backend & app requirements.",
        fullDetails: [
          "Guided 2 frontend & mobile developers through requirement analysis, sprint planning, and deployment.",
          "Architected backend & API requirements ensuring strict data validation and automated audit logging.",
          "Covered multi-step bank account detail modifications, payment gateway adjustments, and real-time policy update sync.",
          "Maintained 99.9% crash-free session stability across release cycles.",
        ],
        image: "/digit-life-logo.svg",
        tags: ["React Native", "Backend & API Planning", "TypeScript", "Redux", "Payment Gateway"],
        metrics: [
          "End-to-end ownership: Analysis to execution",
          "Full suite: Profile, Address & Bank info changes",
          "Guided 2 developers with on-time delivery",
        ],
        accent: "#ff6da2",
      },
      {
        title: "SuperApp — Micro-Frontend Platform",
        company: "Digit Insurance",
        award: "Tech Titan Award 🏆",
        description:
          "Migrated legacy Life Insurance journeys into a high-performance micro-frontend SuperApp architecture using Re.Pack. Improved application scalability, reduced bundle size, and enabled independent module releases across engineering teams.",
        fullDetails: [
          "Honored with the Tech Titan Award for zero-delay architecture migration and deployment.",
          "Leveraged Re.Pack (Webpack-based React Native bundler) for dynamic module loading and code splitting.",
          "Reduced main app bundle size significantly while accelerating feature release velocity across teams.",
          "Automated multi-module CI/CD pipelines in Jenkins for seamless app updates.",
        ],
        image: "/digit-life-logo.svg",
        tags: ["React Native", "Re.Pack", "Micro-Frontend", "Jenkins", "TypeScript"],
        metrics: [
          "↓ Modular loading & reduced bundle size",
          "99.9% crash-free session stability",
          "Automated Jenkins CI/CD deployment",
        ],
        accent: "#00f2fe",
      },
    ],
  },
  {
    id: "pluginhive",
    companyName: "PluginHive",
    shortName: "PluginHive",
    role: "Software Developer Intern",
    logo: "/pluginhive.png",
    isSvgLogo: true,
    logoBg: "#ffffff",
    ringGradient: "linear-gradient(135deg, #ffd700, #ff6da2)",
    badge: "1 Project",
    projects: [
      {
        title: "Barcode & QR + Shipping Automation",
        company: "PluginHive",
        award: "E-Commerce Suite 📦",
        description:
          "Developed barcode & QR code generation modules for an e-commerce platform, improving process speed by 30%. Built shipping carrier API integrations enabling automated label generation and reducing fulfillment time by 20%.",
        fullDetails: [
          "Built cross-platform Barcode and QR code scanning/generation engines for React Native.",
          "Integrated major shipping carrier APIs for automated label printing and real-time tracking.",
          "Streamlined warehouse fulfillment workflows resulting in a 20% drop in order processing time.",
        ],
        image: "/pluginhive.png",
        tags: ["React Native", "QR / Barcode", "Shipping APIs", "E-Commerce"],
        metrics: [
          "↑ 30% improvement in process speed",
          "↓ 20% reduction in fulfillment time",
          "Automated label generation",
        ],
        accent: "#ffd700",
      },
    ],
  },
];

export function Projects() {
  const [activeStory, setActiveStory] = useState<CompanyStory | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openStory = (story: CompanyStory, projectIndex: number = 0) => {
    setActiveStory(story);
    setCurrentProjectIndex(projectIndex);
  };

  const closeStory = () => {
    setActiveStory(null);
    setCurrentProjectIndex(0);
    setLightboxImage(null);
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

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImage) {
        if (e.key === "Escape") setLightboxImage(null);
        return;
      }
      if (!activeStory) return;
      if (e.key === "Escape") closeStory();
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeStory, currentProjectIndex, lightboxImage]);

  const activeProject = activeStory ? activeStory.projects[currentProjectIndex] : null;

  return (
    <Section id="projects" className="pt-16 pb-4 md:pt-24 md:pb-6">
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
            Project{" "}
            <span
              style={{
                background: "linear-gradient(to right, #9b6dff, #ff6da2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Highlights
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
          <p style={{ color: "rgba(248,248,242,0.65)", fontSize: "1.05rem", maxWidth: "38rem" }}>
            Tap on any <strong>Company Story circle</strong> to open work highlights &amp; project media.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CIRCLE STORY ROW */}
        {/* ========================================================================= */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.82rem",
              color: "#d8b4e2",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            <Sparkles size={15} style={{ color: "#9b6dff" }} /> Tap a story to view
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.25rem",
              overflowX: "auto",
              paddingBottom: "1rem",
              scrollbarWidth: "none",
            }}
          >
            {/* Render Company Stories */}
            {companyStories.map((story) => (
              <motion.div
                key={story.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openStory(story, 0)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.65rem",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                {/* Animated Story Ring Wrapper */}
                <div
                  style={{
                    position: "relative",
                    width: "86px",
                    height: "86px",
                    borderRadius: "50%",
                    padding: "3.5px",
                    background: story.ringGradient,
                    boxShadow: "0 6px 25px rgba(155,109,255,0.35)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {/* Inner Dark Background */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "#0d0d12",
                      padding: "3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Circle Image Avatar */}
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        overflow: "hidden",
                        background: story.logoBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.25rem",
                      }}
                    >
                      <img
                        src={story.logo}
                        alt={story.companyName}
                        style={{
                          width: "92%",
                          height: "92%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>

                  {/* Badge Counter overlay */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      right: "-2px",
                      background: "#9b6dff",
                      color: "#ffffff",
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      padding: "0.15rem 0.5rem",
                      borderRadius: "9999px",
                      border: "2.5px solid #0d0d12",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    }}
                  >
                    {story.projects.length}
                  </span>
                </div>

                {/* Company Name & Badge */}
                <div style={{ textAlign: "center" }}>
                  <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 700, color: "#ffffff" }}>
                    {story.shortName}
                  </p>
                  <span style={{ fontSize: "0.72rem", color: "rgba(248,248,242,0.55)", fontWeight: 500 }}>
                    {story.badge}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Future Stories Placeholder */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.65rem",
                opacity: 0.55,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "86px",
                  height: "86px",
                  borderRadius: "50%",
                  border: "2px dashed rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(248,248,242,0.6)",
                }}
              >
                <Plus size={26} />
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 600, color: "rgba(248,248,242,0.6)" }}>
                  More Soon
                </p>
                <span style={{ fontSize: "0.72rem", color: "rgba(248,248,242,0.35)" }}>
                  Future Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* HIGH-CONTRAST TRANSPARENT BACKDROP STORY MODAL */}
      {/* ========================================================================= */}
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
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
            onClick={closeStory}
          >
            {/* Modal Container */}
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
              {/* Top Segmented Story Progress Bar & Prominent Yellow Tabs */}
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
                {/* Segmented Progress Lines */}
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

                {/* Prominent Clickable Project Tabs */}
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
                {/* Left: Avatar + Title */}
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
                      style={{
                        width: "92%",
                        height: "92%",
                        objectFit: "contain",
                      }}
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

                {/* Right Controls */}
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
                      transition: "background 0.2s",
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
                      transition: "background 0.2s",
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

              {/* Story Body Content */}
              <div
                style={{
                  padding: "1.5rem 1.6rem 1.8rem 1.6rem",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.35rem",
                }}
              >


                {/* PROMINENT HIGH-CONTRAST AWARD BADGE */}
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

                {/* Project Title & Description */}
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

                {/* Key Deliverables Bullet Points */}
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

                {/* Tech Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.3rem 0.85rem",
                        borderRadius: "9999px",
                        background: `${activeProject.accent}20`,
                        border: `1px solid ${activeProject.accent}50`,
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

      {/* ========================================================================= */}
      {/* FULL-SCREEN IMAGE LIGHTBOX OVERLAY (OPEN DIRECTLY ON HOVER / CLICK) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999999,
              background: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#ffffff",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                maxWidth: "90vw",
                maxHeight: "88vh",
                background: "#ffffff",
                borderRadius: "1.5rem",
                padding: lightboxImage.endsWith(".svg") ? "3rem" : "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 25px 80px rgba(0,0,0,0.85)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Full resolution project media"
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  borderRadius: "1rem",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
