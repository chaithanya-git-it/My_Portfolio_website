"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    color: "#9b6dff",
    label: "Email",
    value: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "chaithanya.avinash07@gmail.com",
    href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "chaithanya.avinash07@gmail.com"}`
  },
  {
    icon: Phone,
    color: "#ff6da2",
    label: "Phone",
    value: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 (Available on Request)",
    href: process.env.NEXT_PUBLIC_CONTACT_PHONE
      ? `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`
      : `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "chaithanya.avinash07@gmail.com"}?subject=Phone%20Number%20Request`
  },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chaithanya-a-2b75b31a3" },
  { label: "GitHub", href: "#" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "0.75rem",
  padding: "0.8rem 1rem",
  color: "#f8f8f2",
  fontSize: "0.95rem",
  outline: "none",
  transition: "border-color 0.3s, box-shadow 0.3s",
  fontFamily: "var(--font-inter, Arial, sans-serif)",
  boxSizing: "border-box",
};

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3500);
    }, 1500);
  };

  return (
    <Section id="contact">
      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
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
            Get in{" "}
            <span
              style={{
                background: "linear-gradient(to right, #9b6dff, #ff6da2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
            .
          </h2>
          <div style={{ width: "5rem", height: "3px", background: "linear-gradient(to right, #9b6dff, #ff6da2)", borderRadius: "9999px" }} />
          <p style={{ color: "rgba(248,248,242,0.55)", maxWidth: "34rem", lineHeight: 1.7, margin: 0, fontSize: "1rem" }}>
            Open to exciting React Native opportunities. Let&apos;s build something amazing together.
          </p>
        </div>

        {/* Two-column */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1.25rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-outfit, Arial, sans-serif)", fontWeight: 700, fontSize: "1.25rem", color: "#f8f8f2", margin: 0 }}>
              Contact Information
            </h3>
            {contactInfo.map(({ icon: Icon, color, label, value, href }) => (
              <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "0.75rem",
                    background: `${color}15`,
                    border: `1px solid ${color}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <p style={{ fontSize: "0.7rem", fontWeight: 500, color: "rgba(248,248,242,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
                    {label}
                  </p>
                  {href ? (
                    <a href={href} style={{ color: "#f8f8f2", textDecoration: "none", fontSize: "0.95rem" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = color; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#f8f8f2"; }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p style={{ color: "#f8f8f2", fontSize: "0.95rem", margin: 0 }}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 500, color: "rgba(248,248,242,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
                Socials
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                {socials.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.875rem",
                      color: "#f8f8f2",
                      textDecoration: "none",
                      borderBottom: "1px solid transparent",
                      transition: "color 0.2s, border-color 0.2s",
                      paddingBottom: "1px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#9b6dff";
                      (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#9b6dff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#f8f8f2";
                      (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent";
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1.25rem",
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: "200px", height: "200px",
              background: "rgba(155,109,255,0.08)",
              borderRadius: "50%", filter: "blur(60px)",
              pointerEvents: "none", zIndex: 0,
            }} />

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", position: "relative", zIndex: 1 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.8rem", color: "rgba(248,248,242,0.65)", fontWeight: 500 }}>Name</label>
                  <input type="text" required placeholder="Your name" style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "#9b6dff99"; e.target.style.boxShadow = "0 0 0 3px rgba(155,109,255,0.12)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.8rem", color: "rgba(248,248,242,0.65)", fontWeight: 500 }}>Email</label>
                  <input type="email" required placeholder="your@email.com" style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "#9b6dff99"; e.target.style.boxShadow = "0 0 0 3px rgba(155,109,255,0.12)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label style={{ fontSize: "0.8rem", color: "rgba(248,248,242,0.65)", fontWeight: 500 }}>Subject</label>
                <input type="text" required placeholder="Project Inquiry / Job Opportunity" style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "#9b6dff99"; e.target.style.boxShadow = "0 0 0 3px rgba(155,109,255,0.12)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label style={{ fontSize: "0.8rem", color: "rgba(248,248,242,0.65)", fontWeight: 500 }}>Message</label>
                <textarea required rows={5} placeholder="Tell me about the role or project..." style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => { e.target.style.borderColor = "#9b6dff99"; e.target.style.boxShadow = "0 0 0 3px rgba(155,109,255,0.12)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }} />
              </div>

              <motion.button
                type="submit"
                disabled={submitting || submitted}
                whileHover={!submitting && !submitted ? { scale: 1.03 } : {}}
                whileTap={!submitting && !submitted ? { scale: 0.97 } : {}}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.9rem",
                  borderRadius: "0.75rem",
                  background: submitted ? "#ff6da2" : "#9b6dff",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: "none",
                  cursor: submitting || submitted ? "default" : "pointer",
                  boxShadow: `0 0 24px ${submitted ? "rgba(255,109,162,0.4)" : "rgba(155,109,255,0.35)"}`,
                  transition: "background 0.5s, box-shadow 0.5s",
                  fontFamily: "var(--font-inter, Arial, sans-serif)",
                }}
              >
                {submitting ? "Sending…" : submitted ? "Message Sent! 🎉" : (<><Send size={18} /> Send Message</>)}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
