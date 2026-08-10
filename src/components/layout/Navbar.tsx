"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { ResumeModal } from "@/components/ui/ResumeModal";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setIsScrolled(v > 50));

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (href === "#projects") {
        window.dispatchEvent(new CustomEvent("show-projects-section"));
      }
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "1rem 1.5rem",
          transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
          background: isScrolled ? "rgba(15,15,20,0.85)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: "80rem", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--font-outfit, Arial, sans-serif)",
                fontWeight: 800,
                fontSize: "1.15rem",
                letterSpacing: "-0.03em",
                color: "#f8f8f2",
              }}
            >
              Chaithanya<span style={{ color: "#9b6dff" }}>.</span>
            </span>
          </Link>

          {/* Desktop nav + CTA button */}
          <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{ textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, color: "rgba(248,248,242,0.7)", position: "relative", cursor: "pointer" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#f8f8f2"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,248,242,0.7)"; }}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Action CTA Pill Button: Resume */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => setResumeOpen(true)}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(155, 109, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.55rem 1.4rem",
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, rgba(155,109,255,0.15) 0%, rgba(255,109,162,0.15) 100%)",
                  border: "1.5px solid #9b6dff",
                  color: "#f8f8f2",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "var(--font-outfit, Arial, sans-serif)",
                }}
              >
                <FileText size={15} color="#9b6dff" /> Resume
              </motion.button>
            </motion.div>
          </div>

        {/* Mobile button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            color: "#f8f8f2",
            cursor: "pointer",
            padding: "0.4rem",
            display: "none",
          }}
          className="show-mobile"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0, height: mobileOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          overflow: "hidden",
          background: "rgba(15,15,20,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", padding: "1.5rem", gap: "1.25rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setMobileOpen(false);
                handleNavClick(e, link.href);
              }}
              style={{
                fontFamily: "var(--font-outfit, Arial, sans-serif)",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#f8f8f2",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </motion.div>

      <style>{`
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
      `}</style>
    </motion.header>
    <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
