"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, ExternalLink, Award, Briefcase, GraduationCap, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { SiReact, SiTypescript, SiApple, SiAndroid } from "react-icons/si";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
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
          onClick={onClose}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(8, 8, 12, 0.85)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 25 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "850px",
            maxHeight: "90vh",
            overflowY: "auto",
            background: "rgba(15, 15, 22, 0.95)",
            border: "1.5px solid rgba(155, 109, 255, 0.4)",
            borderRadius: "1.75rem",
            padding: "2.25rem",
            boxShadow: "0 25px 60px rgba(0,0,0,0.7), 0 0 40px rgba(155,109,255,0.25)",
            zIndex: 1,
          }}
        >
          {/* Close X Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              width: "2.4rem",
              height: "2.4rem",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#f8f8f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,109,162,0.2)";
              e.currentTarget.style.borderColor = "#ff6da2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            <X size={18} />
          </button>

          {/* Modal Header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1.25rem", marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.35rem" }}>
                <FileText size={20} color="#9b6dff" />
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#9b6dff", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Curriculum Vitae / Resume
                </span>
              </div>
              <h2
                style={{
                  fontSize: "2rem",
                  fontFamily: "var(--font-outfit, Arial, sans-serif)",
                  fontWeight: 800,
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                Chaithanya A
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#d8b4e2", fontWeight: 600, margin: "0.2rem 0 0 0" }}>
                Senior Software Engineer · 3.9+ Years Experience
              </p>
            </div>

            {/* Actions: Download PDF & Print */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href="/Chaithanya_A_Resume.pdf"
                download="Chaithanya_A_Resume.pdf"
                style={{ textDecoration: "none" }}
              >
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(155,109,255,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.55rem",
                    padding: "0.7rem 1.4rem",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #9b6dff 0%, #ff6da2 100%)",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 0 15px rgba(155,109,255,0.3)",
                    fontFamily: "var(--font-outfit, Arial, sans-serif)",
                  }}
                >
                  <Download size={16} /> Download PDF
                </motion.button>
              </a>
            </div>
          </div>

          {/* Quick Contact & Details Strip */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1rem", padding: "1rem 1.25rem", marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.85rem", color: "rgba(248,248,242,0.8)" }}>
              <MapPin size={15} color="#9b6dff" /> Bangalore, IN
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.85rem", color: "rgba(248,248,242,0.8)" }}>
              <Mail size={15} color="#ff6da2" /> chaithanya.a@digitlife.com
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.85rem", color: "rgba(248,248,242,0.8)" }}>
              <Briefcase size={15} color="#61dafb" /> Digit Life Insurance (Current)
            </div>
          </div>

          {/* Executive Summary */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.1rem", color: "#9b6dff", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 800, marginBottom: "0.6rem" }}>
              Executive Summary
            </h3>
            <p style={{ fontSize: "0.95rem", color: "rgba(248,248,242,0.85)", lineHeight: 1.7, margin: 0 }}>
              Senior Software Engineer with <strong>3.9+ years of proven experience</strong> leading end-to-end technical execution for high-scale enterprise mobile and web applications. Expert in <strong>React Native, TypeScript, React, Re.Pack Micro-Frontends, iOS (Swift), and Android (Kotlin)</strong>. Awarded the <strong>Master Mind Award</strong> and <strong>3 Honor Awards</strong> for architecting high-impact financial & insurance automation platforms.
            </p>
          </div>

          {/* Work Experience */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.1rem", color: "#ff6da2", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 800, marginBottom: "1rem" }}>
              Work Experience
            </h3>

            {/* Digit Life Insurance */}
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem", padding: "1.25rem", marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>Senior Software Engineer</h4>
                  <span style={{ fontSize: "0.85rem", color: "#ffd700", fontWeight: 700 }}>Digit Life Insurance</span>
                </div>
                <span style={{ fontSize: "0.8rem", color: "rgba(248,248,242,0.5)", fontFamily: "monospace" }}>2022 — Present</span>
              </div>
              <ul style={{ margin: "0.75rem 0 0 1.25rem", padding: 0, color: "rgba(248,248,242,0.8)", fontSize: "0.88rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                <li>Led end-to-end planning & execution for <strong>Annuity & Liveliness Pension Payouts</strong> with biometric camera Liveliness AI verification.</li>
                <li>Architected <strong>Life Insurance Endorsement Suite</strong>, automating policy modifications across mobile & web apps.</li>
                <li>Guided backend API contract planning, micro-frontend module federation (Re.Pack), and payment gateway flows (Juspay).</li>
              </ul>
            </div>

            {/* PluginHive */}
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem", padding: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>Software Engineer</h4>
                  <span style={{ fontSize: "0.85rem", color: "#61dafb", fontWeight: 700 }}>PluginHive</span>
                </div>
                <span style={{ fontSize: "0.8rem", color: "rgba(248,248,242,0.5)", fontFamily: "monospace" }}>2020 — 2022</span>
              </div>
              <ul style={{ margin: "0.75rem 0 0 1.25rem", padding: 0, color: "rgba(248,248,242,0.8)", fontSize: "0.88rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                <li>Developed <strong>Barcode & QR Automation Suite</strong> for WooCommerce & Shopify logistics platforms.</li>
                <li>Built real-time order tracking and label generation native scanner modules.</li>
              </ul>
            </div>
          </div>

          {/* Honors & Awards */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", color: "#ffd700", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 800, marginBottom: "0.75rem" }}>
              Honors & Awards
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              <div style={{ background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)", borderRadius: "0.85rem", padding: "0.85rem 1rem" }}>
                <p style={{ fontSize: "0.95rem", fontWeight: 800, color: "#ffd700", margin: 0 }}>🏆 Master Mind Award</p>
                <p style={{ fontSize: "0.78rem", color: "rgba(248,248,242,0.7)", margin: "0.2rem 0 0 0" }}>Highest engineering honor at Digit Insurance</p>
              </div>
              <div style={{ background: "rgba(155,109,255,0.1)", border: "1px solid rgba(155,109,255,0.3)", borderRadius: "0.85rem", padding: "0.85rem 1rem" }}>
                <p style={{ fontSize: "0.95rem", fontWeight: 800, color: "#9b6dff", margin: 0 }}>🌟 3 Honor Awards</p>
                <p style={{ fontSize: "0.78rem", color: "rgba(248,248,242,0.7)", margin: "0.2rem 0 0 0" }}>Recognized for exceptional ownership & delivery</p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
