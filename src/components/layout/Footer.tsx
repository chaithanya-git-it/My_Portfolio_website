"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        background: "#0f0f14",
        padding: "3rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-outfit, Arial, sans-serif)",
                fontWeight: 800,
                fontSize: "1.25rem",
                letterSpacing: "-0.03em",
                color: "#f8f8f2",
              }}
            >
              Chaithanya<span style={{ color: "#9b6dff" }}>.</span>
            </span>
            <p style={{ color: "rgba(248,248,242,0.4)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
              React Native · TypeScript
            </p>
          </div>

          <div style={{ display: "flex", gap: "1.25rem" }}>
            {[
              { Icon: Github, label: "GitHub", hoverColor: "#f8f8f2", href: "https://github.com/chaithanya-git-it" },
              { Icon: Linkedin, label: "LinkedIn", hoverColor: "#9b6dff", href: "https://www.linkedin.com/in/chaithanya-a-2b75b31a3" },
              { Icon: Twitter, label: "Twitter", hoverColor: "#ff6da2" },
            ].map(({ Icon, label, hoverColor, href }) => (
              <a
                key={label}
                href={href ?? "#"}
                aria-label={label}
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
                style={{ color: "rgba(248,248,242,0.4)", transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = hoverColor; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,248,242,0.4)"; }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "0.5rem",
          }}
        >
          <p style={{ color: "rgba(248,248,242,0.3)", fontSize: "0.75rem" }}>
            &copy; {new Date().getFullYear()} Chaithanya A. All rights reserved.
          </p>
          <p style={{ color: "rgba(248,248,242,0.3)", fontSize: "0.75rem" }}>
            Designed with <span style={{ color: "#ff6da2" }}>♥</span> using Next.js &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
