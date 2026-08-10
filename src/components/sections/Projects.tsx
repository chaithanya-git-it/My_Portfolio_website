"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Sparkles, ChevronLeft, ChevronRight, X, Plus, Award, CheckCircle2, Maximize2 } from "lucide-react";
import { ProjectDetail } from "@/components/ui/ProjectModal";
import { getAssetPath } from "@/lib/basePath";

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
  const [isVisible, setIsVisible] = useState(false);
  const [activeTreeCompany, setActiveTreeCompany] = useState<CompanyStory | null>(null);

  const openTreeModal = (story: CompanyStory) => {
    setActiveTreeCompany(story);
  };

  const closeTreeModal = () => {
    setActiveTreeCompany(null);
  };

  useEffect(() => {
    const handleShow = () => setIsVisible(true);
    window.addEventListener("show-projects-section", handleShow);
    if (typeof window !== "undefined" && window.location.hash === "#projects") {
      setIsVisible(true);
    }
    return () => window.removeEventListener("show-projects-section", handleShow);
  }, []);

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
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
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
                  Featured{" "}
                  <span
                    style={{
                      background: "linear-gradient(to right, #9b6dff, #ff6da2)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Projects
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
            Click on any project card to open full deliverables, metrics &amp; media.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* COMPANY CARDS GRID (CLICK TO OPEN POP-UP TREE MODAL) */}
        {/* ========================================================================= */}
        <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.75rem" }}>
          {companyStories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openTreeModal(story)}
              style={{
                background: "rgba(15, 15, 20, 0.92)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1.5px solid rgba(155, 109, 255, 0.35)",
                borderRadius: "1.75rem",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1.5rem",
                cursor: "pointer",
                boxShadow: "0 12px 35px rgba(0,0,0,0.4), 0 0 25px rgba(155,109,255,0.15)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#9b6dff";
                e.currentTarget.style.boxShadow = "0 18px 45px rgba(0,0,0,0.6), 0 0 35px rgba(155,109,255,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(155, 109, 255, 0.35)";
                e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,0,0,0.4), 0 0 25px rgba(155,109,255,0.15)";
              }}
            >
              {/* Header: Logo, Title, Role, Badge */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      padding: "2.5px",
                      background: story.ringGradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background: story.logoBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "3px",
                        overflow: "hidden",
                      }}
                    >
                      <img src={getAssetPath(story.logo)} alt={story.companyName} style={{ width: "90%", height: "90%", objectFit: "contain" }} />
                    </div>
                  </div>

                  <div>
                    <h3 style={{ margin: "0 0 0.2rem 0", fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-outfit, Arial, sans-serif)" }}>
                      {story.companyName}
                    </h3>
                    <span style={{ fontSize: "0.82rem", color: "rgba(248,248,242,0.65)", fontWeight: 500 }}>
                      {story.role}
                    </span>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "#ffd700",
                    background: "rgba(255,215,0,0.12)",
                    border: "1px solid rgba(255,215,0,0.35)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {story.projects.length} {story.projects.length === 1 ? "Project" : "Projects"}
                </span>
              </div>

              {/* Compact Project Pills Preview */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <span style={{ fontSize: "0.72rem", color: "rgba(248,248,242,0.45)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Featured Projects:
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {story.projects.map((p, pIdx) => (
                    <span
                      key={pIdx}
                      style={{
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        color: p.accent || "#9b6dff",
                        background: `${p.accent}18`,
                        border: `1px solid ${p.accent}40`,
                        padding: "0.25rem 0.75rem",
                        borderRadius: "0.5rem",
                      }}
                    >
                      {p.title.split("—")[0].trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.88rem",
                  fontWeight: 800,
                  color: "#9b6dff",
                  paddingTop: "0.85rem",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span>{story.projects.length === 1 ? "View Project" : "View Projects"}</span>
                <span style={{ fontSize: "1.1rem" }}>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* POP-UP TREE MODAL FOR COMPANY PROJECTS */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeTreeCompany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99990,
              background: "rgba(10, 10, 15, 0.88)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
            }}
            onClick={closeTreeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                maxWidth: "52rem",
                maxHeight: "85vh",
                background: "rgba(18, 18, 26, 0.98)",
                border: "1.5px solid rgba(155, 109, 255, 0.4)",
                borderRadius: "2rem",
                padding: "2rem",
                overflowY: "auto",
                boxShadow: "0 25px 80px rgba(0,0,0,0.8), 0 0 50px rgba(155,109,255,0.25)",
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Pop-up Modal Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      padding: "2.5px",
                      background: activeTreeCompany.ringGradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background: activeTreeCompany.logoBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2px",
                        overflow: "hidden",
                      }}
                    >
                      <img src={getAssetPath(activeTreeCompany.logo)} alt={activeTreeCompany.companyName} style={{ width: "90%", height: "90%", objectFit: "contain" }} />
                    </div>
                  </div>

                  <div>
                    <h3 style={{ margin: 0, fontSize: "1.4rem", fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-outfit, Arial, sans-serif)" }}>
                      {activeTreeCompany.companyName} <span style={{ color: "#9b6dff" }}>Tree</span>
                    </h3>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(248,248,242,0.6)" }}>
                      {activeTreeCompany.role} • {activeTreeCompany.projects.length} {activeTreeCompany.projects.length === 1 ? "Project" : "Projects"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeTreeModal}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#f8f8f2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Pop-up Tree Branches */}
              <div
                style={{
                  position: "relative",
                  paddingLeft: "2.2rem",
                  marginLeft: "1rem",
                  borderLeft: "2.5px dashed rgba(155, 109, 255, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.75rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                }}
              >
                {activeTreeCompany.projects.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "stretch",
                    }}
                  >
                    {/* Horizontal Branch Stem & Connector Node */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-2.2rem",
                        top: "2rem",
                        width: "2.2rem",
                        height: "2px",
                        background: "linear-gradient(to right, rgba(155, 109, 255, 0.6), " + (proj.accent || "#9b6dff") + ")",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "-2.55rem",
                        top: "1.75rem",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: proj.accent || "#9b6dff",
                        boxShadow: `0 0 10px ${proj.accent || "#9b6dff"}`,
                      }}
                    />

                    {/* Project Card Node in Modal */}
                    <motion.div
                      whileHover={{ x: 6, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => openStory(activeTreeCompany, pIdx)}
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.03)",
                        border: `1.5px solid ${proj.accent}55`,
                        borderRadius: "1.35rem",
                        padding: "1.35rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.9rem",
                        cursor: "pointer",
                        boxShadow: `0 8px 25px rgba(0,0,0,0.3), 0 0 15px ${proj.accent}15`,
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = proj.accent || "#9b6dff";
                        e.currentTarget.style.boxShadow = `0 12px 35px rgba(0,0,0,0.5), 0 0 25px ${proj.accent}35`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${proj.accent}55`;
                        e.currentTarget.style.boxShadow = `0 8px 25px rgba(0,0,0,0.3), 0 0 15px ${proj.accent}15`;
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                        <span style={{ fontSize: "0.72rem", color: "rgba(248,248,242,0.5)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          Branch Node 0{pIdx + 1}
                        </span>

                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            color: proj.accent || "#9b6dff",
                            background: `${proj.accent}18`,
                            border: `1px solid ${proj.accent}45`,
                            padding: "0.22rem 0.75rem",
                            borderRadius: "9999px",
                          }}
                        >
                          {proj.award}
                        </span>
                      </div>

                      <div>
                        <h4
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: 800,
                            color: "#ffffff",
                            margin: "0 0 0.4rem 0",
                            fontFamily: "var(--font-outfit, Arial, sans-serif)",
                          }}
                        >
                          {proj.title}
                        </h4>
                        <p style={{ fontSize: "0.9rem", color: "rgba(248,248,242,0.75)", margin: 0, lineHeight: 1.55 }}>
                          {proj.description}
                        </p>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", paddingTop: "0.65rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                          {proj.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              style={{
                                fontSize: "0.68rem",
                                fontWeight: 600,
                                color: "#d8b4e2",
                                background: "rgba(155,109,255,0.12)",
                                border: "1px solid rgba(155,109,255,0.25)",
                                padding: "0.15rem 0.55rem",
                                borderRadius: "0.4rem",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.82rem", fontWeight: 800, color: proj.accent || "#9b6dff" }}>
                          <span>Open Deliverables &amp; Metrics</span>
                          <span>→</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )}
</AnimatePresence>

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
                      src={getAssetPath(activeStory.logo)}
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
