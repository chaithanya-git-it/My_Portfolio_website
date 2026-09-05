"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { getAssetPath } from "@/lib/basePath";

export interface AwardDetail {
  id: string;
  title: string;
  badge: string;
  company: string;
  color: string;
  description: string;
  highlights: string[];
  imageUrl: string;
}

export const awardsData: Record<string, AwardDetail> = {
  mastermind: {
    id: "mastermind",
    title: "Master Mind Award",
    badge: "🧠 Master Mind",
    company: "Digit Insurance",
    color: "#9b6dff",
    description:
      "Honored with the prestigious Master Mind Award at Digit Insurance upon promotion to Senior Software Engineer (SSE) for end-to-end project ownership and successful deliveries.",
    highlights: [
      "Awarded upon promotion to SSE for end-to-end ownership.",
      "Engineered automated Annuity & Liveliness pension payout module.",
      "Successfully led backend API planning & production releases.",
    ],
    imageUrl: "/Digit_Mastermin.png",
  },
  techtitan: {
    id: "techtitan",
    title: "Tech Titan Award",
    badge: "🏆 Tech Titan",
    company: "Digit Insurance",
    color: "#ffd700",
    description:
      "Honored with the Tech Titan Award at Digit Insurance for zero-delay SuperApp deployment and micro-frontend architecture migration.",
    highlights: [
      "Awarded for zero-delay SuperApp deployment.",
      "Architected Re.Pack micro-frontend dynamic module loading.",
      "Handled production deployments & automated CI/CD builds.",
    ],
    imageUrl: "/Tech_Titan_Award.png",
  },
  empathy: {
    id: "empathy",
    title: "Empathy Eagle Award",
    badge: "🦅 Empathy Eagle",
    company: "Digit Insurance",
    color: "#ff6da2",
    description:
      "Recognized with the Empathy Eagle Award at Digit Insurance for guiding the team with technical mentorship and end-to-end ownership.",
    highlights: [
      "Recognized for guiding team with technical mentorship.",
      "Handled complete end-to-end ownership from analysis to release.",
      "Fostered strong cross-functional engineering collaboration.",
    ],
    imageUrl: "/Empathy_Eagle.png",
  },
};

const awardsList = [awardsData.techtitan, awardsData.mastermind, awardsData.empathy];

interface AwardModalProps {
  award: AwardDetail | null;
  onClose: () => void;
}

export function AwardModal({ award, onClose }: AwardModalProps) {
  const [activeAward, setActiveAward] = useState<AwardDetail>(award || awardsData.techtitan);

  const fireConfetti = () => {
    try {
      const count = 180;
      const defaults = {
        origin: { y: 0.65 },
        zIndex: 1000000,
      };

      const fire = (particleRatio: number, opts: confetti.Options) => {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      };

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    } catch (e) {
      console.error("Confetti error:", e);
    }
  };

  useEffect(() => {
    if (award) {
      setActiveAward(award);
      fireConfetti();
    }
  }, [award]);

  const handleTabSelect = (item: AwardDetail) => {
    if (item.id !== activeAward.id) {
      setActiveAward(item);
      fireConfetti();
    }
  };

  if (!award) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          background: "rgba(0, 0, 0, 0.82)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 25 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "640px",
            maxHeight: "90vh",
            background: "linear-gradient(165deg, #161622 0%, #0d0d14 100%)",
            border: `1.5px solid ${activeAward.color}88`,
            borderRadius: "1.5rem",
            overflow: "hidden",
            boxShadow: `0 30px 90px rgba(0,0,0,0.9), 0 0 50px ${activeAward.color}35`,
            display: "flex",
            flexDirection: "column",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1.1rem 1.4rem",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: `${activeAward.color}20`,
                  border: `1px solid ${activeAward.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                }}
              >
                <Award size={20} style={{ color: activeAward.color }} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  {activeAward.title} <Sparkles size={16} style={{ color: activeAward.color }} />
                </h3>
                <span style={{ fontSize: "0.78rem", color: "rgba(248,248,242,0.6)", fontWeight: 500 }}>
                  {activeAward.company} Official Recognition
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
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
              <X size={18} />
            </button>
          </div>

          {/* Award Selection Tabs */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              padding: "0.75rem 1.25rem",
              background: "rgba(0,0,0,0.3)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              overflowX: "auto",
            }}
          >
            {awardsList.map((item) => {
              const isActive = item.id === activeAward.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabSelect(item)}
                  style={{
                    background: isActive ? `${item.color}25` : "rgba(255,255,255,0.05)",
                    border: `1.2px solid ${isActive ? item.color : "rgba(255,255,255,0.1)"}`,
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                    borderRadius: "9999px",
                    padding: "0.35rem 0.85rem",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{item.badge.split(" ")[0]}</span>
                  <span>{item.title.replace(" Award", "")}</span>
                </button>
              );
            })}
          </div>

          {/* Modal Body */}
          <div
            style={{
              padding: "1.35rem",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "1.15rem",
            }}
          >
            {/* Award PNG Certificate Image */}
            <div
              style={{
                width: "100%",
                borderRadius: "1rem",
                overflow: "hidden",
                border: `1px solid ${activeAward.color}50`,
                background: "#ffffff",
                padding: "0.6rem",
                boxShadow: "0 10px 35px rgba(0,0,0,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={getAssetPath(activeAward.imageUrl)}
                alt={activeAward.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "360px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "0.6rem",
                  display: "block",
                }}
              />
            </div>

            {/* Description & Highlights Below Image */}
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1rem",
                padding: "1.1rem",
              }}
            >
              <p style={{ color: "#e2e2ec", lineHeight: 1.6, margin: "0 0 0.75rem 0", fontSize: "0.9rem" }}>
                {activeAward.description}
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {activeAward.highlights.map((item, idx) => (
                  <li key={idx} style={{ color: "#d1d1e0", fontSize: "0.85rem", display: "flex", alignItems: "flex-start", gap: "0.45rem" }}>
                    <CheckCircle2 size={15} style={{ color: activeAward.color, flexShrink: 0, marginTop: "0.15rem" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
