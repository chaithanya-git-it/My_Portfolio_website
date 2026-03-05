"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setIsScrolled(v > 50));

  return (
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

        {/* Desktop links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i + 0.3 }}
            >
              <Link
                href={link.href}
                style={{ textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, color: "rgba(248,248,242,0.7)", position: "relative" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#f8f8f2"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,248,242,0.7)"; }}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

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
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-outfit, Arial, sans-serif)",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#f8f8f2",
                textDecoration: "none",
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </motion.div>

      <style>{`
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
      `}</style>
    </motion.header>
  );
}
