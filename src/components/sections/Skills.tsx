"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import {
  SiReact,
  SiSwift,
  SiKotlin,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiRedux,
  SiFirebase,
  SiAndroidstudio,
  SiXcode,
  SiPostman,
  SiBitbucket,
  SiJavascript,
  SiTailwindcss,
  SiApple,
  SiAndroid,
  SiFastlane,
  SiDynatrace,
} from "react-icons/si";
import { Cpu, Terminal, Code2, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { IconType } from "react-icons";

interface TechSkill {
  name: string;
  category: string;
  Icon: IconType;
  level: number;
  description: string;
  color: string;
  tag: string;
}

const techSkills: TechSkill[] = [
  {
    name: "React Native",
    category: "Mobile Core",
    Icon: SiReact,
    level: 95,
    description: "3.9+ yrs building enterprise iOS & Android apps with cross-platform React Native bridges.",
    color: "#61dafb",
    tag: "Core Framework",
  },
  {
    name: "TypeScript",
    category: "Languages",
    Icon: SiTypescript,
    level: 94,
    description: "Strict typing, OOP, async patterns, generics & enterprise state synchronization architectures.",
    color: "#3178c6",
    tag: "Type System",
  },
  {
    name: "React",
    category: "Web & UI Core",
    Icon: SiReact,
    level: 92,
    description: "Component architecture, React Hooks, virtual DOM optimization & high-performance UI systems.",
    color: "#00d8ff",
    tag: "UI Core",
  },
  {
    name: "Re.Pack (Micro-Frontend)",
    category: "Architecture",
    Icon: Code2,
    level: 90,
    description: "Micro-frontends bundle splitting, Webpack / Rspack integration & dynamic module federation.",
    color: "#9b6dff",
    tag: "Module Federation",
  },
  {
    name: "Android",
    category: "Mobile Native",
    Icon: SiAndroid,
    level: 90,
    description: "Kotlin, Android SDK, Jetpack, background services, biometric authentication & Play Store pipelines.",
    color: "#a4c639",
    tag: "Native Android",
  },
  {
    name: "iOS",
    category: "Mobile Native",
    Icon: SiApple,
    level: 88,
    description: "Swift, Xcode, CoreAnimation, native iOS modules & App Store automated CI/CD releases.",
    color: "#ff6da2",
    tag: "Native iOS",
  },
];

interface CoderGroup {
  category: string;
  badge: string;
  color: string;
  Icon: IconType | any;
  items: { name: string; Icon: IconType | any; detail: string }[];
}

const coderSkillGroups: CoderGroup[] = [
  {
    category: "Mobile & Frontend Stack",
    badge: "Core Stack",
    color: "#61dafb",
    Icon: Layers,
    items: [
      { name: "React Native", Icon: SiReact, detail: "Cross-platform core" },
      { name: "TypeScript", Icon: SiTypescript, detail: "Strict architecture" },
      { name: "Re.Pack Micro-Frontend", Icon: Code2, detail: "Bundle splitting" },
      { name: "Redux & Zustand", Icon: SiRedux, detail: "State management" },
      { name: "React Navigation", Icon: Terminal, detail: "Deep linking & routing" },
      { name: "Tailwind / CSS", Icon: SiTailwindcss, detail: "Design systems" },
    ],
  },
  {
    category: "AI, Vision & Native APIs",
    badge: "AI & Native",
    color: "#ff6da2",
    Icon: Sparkles,
    items: [
      { name: "Google ML Kit", Icon: Cpu, detail: "On-device OCR scanner" },
      { name: "iOS Native (Swift)", Icon: SiApple, detail: "CoreAnimation & Bridge" },
      { name: "Android Native (Kotlin)", Icon: SiAndroid, detail: "Services & Jetpack" },
      { name: "Biometric Liveliness AI", Icon: ShieldCheck, detail: "Facial detection" },
      { name: "Juspay Payment Gateway", Icon: Terminal, detail: "SDK integration" },
      { name: "Speech-to-Text", Icon: Cpu, detail: "Voice recognition" },
    ],
  },
  {
    category: "DevOps & Developer Tools",
    badge: "Tooling",
    color: "#9b6dff",
    Icon: Terminal,
    items: [
      { name: "Xcode", Icon: SiXcode, detail: "iOS build & profiling" },
      { name: "Android Studio", Icon: SiAndroidstudio, detail: "Gradle & Logcat" },
      { name: "Postman", Icon: SiPostman, detail: "API contract testing" },
      { name: "Firebase", Icon: SiFirebase, detail: "Crashlytics & Push" },
      { name: "Bitbucket & Git", Icon: SiBitbucket, detail: "VCS & code review" },
      { name: "Dynatrace & Profiling", Icon: SiDynatrace, detail: "Performance & APM" },
    ],
  },
];

export function Skills() {
  const [activeSkill, setActiveSkill] = useState<TechSkill | null>(null);

  return (
    <Section id="skills">
      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
        
        {/* Section Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
            Technical{" "}
            <span
              style={{
                background: "linear-gradient(to right, #61dafb, #9b6dff, #ff6da2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Arsenal
            </span>
            .
          </h2>
          <div
            style={{
              width: "5rem",
              height: "3px",
              background: "linear-gradient(to right, #61dafb, #9b6dff, #ff6da2)",
              borderRadius: "9999px",
            }}
          />
          <p style={{ color: "rgba(248,248,242,0.65)", fontSize: "1.05rem", maxWidth: "42rem", margin: "0.25rem 0 0 0" }}>
            Production-proven tech stack and dev environment I use daily to architect high-scale mobile platforms.
          </p>
        </div>

        {/* HIGH-TECH IDE / TERMINAL CODER WINDOW CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          style={{
            background: "rgba(12, 12, 18, 0.92)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1.5px solid rgba(155, 109, 255, 0.4)",
            borderRadius: "1.75rem",
            overflow: "hidden",
            boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 35px rgba(155,109,255,0.18)",
          }}
        >
          {/* macOS IDE Window Header Bar */}
          <div
            style={{
              background: "rgba(20, 20, 30, 0.95)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "0.8rem 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {/* Left: Window Controls (🔴 🟡 🟢) + Tab */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ff5f56" }} />
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ffbd2e" }} />
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#27c93f" }} />
              </div>

              {/* IDE Breadcrumbs / File Tab */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(155,109,255,0.12)",
                  border: "1px solid rgba(155,109,255,0.3)",
                  borderRadius: "0.5rem",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.8rem",
                  fontFamily: "monospace",
                  color: "#d8b4e2",
                }}
              >
                <SiTypescript color="#3178c6" size={14} />
                <span>tech_stack.config.ts</span>
                <span style={{ opacity: 0.5, marginLeft: "0.2rem" }}>✓</span>
              </div>
            </div>

            {/* Right: Environment Info */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.75rem", fontFamily: "monospace", color: "rgba(248,248,242,0.5)" }}>
              <span style={{ color: "#61dafb" }}>● Node.js</span>
              <span>•</span>
              <span style={{ color: "#a4c639" }}>React Native</span>
              <span>•</span>
              <span style={{ color: "#ff6da2" }}>Swift & Kotlin</span>
            </div>
          </div>

          {/* Inner Content Area */}
          <div style={{ padding: "2.25rem" }}>
            
            {/* Title & Instructions */}
            <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <Terminal size={14} color="#61dafb" />
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#61dafb", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "monospace" }}>
                    $ npx inspect --core-proficiencies
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontFamily: "var(--font-outfit, Arial, sans-serif)",
                    fontWeight: 800,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Core Proficiency Badges
                </h3>
              </div>
              <p style={{ color: "rgba(248,248,242,0.55)", fontSize: "0.85rem", margin: 0, maxWidth: "420px", fontFamily: "monospace" }}>
                // Hover or tap any tech logo to inspect real production metrics!
              </p>
            </div>

            {/* CIRCULAR SKILLS GRID WITH OFFICIAL TECH LOGOS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "1.75rem",
                justifyItems: "center",
              }}
            >
              {techSkills.map((skill, index) => {
                const isSelected = activeSkill?.name === skill.name;
                const IconComponent = skill.Icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -6 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSkill(isSelected ? null : skill)}
                    onMouseEnter={() => setActiveSkill(skill)}
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    {/* Circular Tech Logo Container */}
                    <div
                      style={{
                        position: "relative",
                        width: "86px",
                        height: "86px",
                        borderRadius: "50%",
                        background: isSelected ? `${skill.color}20` : "rgba(255,255,255,0.03)",
                        border: `2px solid ${isSelected ? skill.color : "rgba(255,255,255,0.1)"}`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: isSelected
                          ? `0 0 30px ${skill.color}80, 0 0 15px ${skill.color}`
                          : "0 8px 25px rgba(0,0,0,0.4)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <IconComponent
                        size={32}
                        color={isSelected ? "#ffffff" : skill.color}
                        style={{ filter: isSelected ? `drop-shadow(0 0 8px ${skill.color})` : "none", transition: "all 0.3s ease" }}
                      />

                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          color: isSelected ? "#ffffff" : "rgba(248,248,242,0.85)",
                          fontFamily: "monospace",
                          marginTop: "0.25rem",
                        }}
                      >
                        {skill.level}%
                      </span>

                      {/* SVG Circular Progress Track */}
                      <svg
                        style={{
                          position: "absolute",
                          inset: "-4px",
                          width: "calc(100% + 8px)",
                          height: "calc(100% + 8px)",
                          transform: "rotate(-90deg)",
                          pointerEvents: "none",
                        }}
                      >
                        <circle
                          cx="47"
                          cy="47"
                          r="42"
                          fill="none"
                          stroke={isSelected ? skill.color : "rgba(255,255,255,0.08)"}
                          strokeWidth="2.5"
                          strokeDasharray="264"
                          strokeDashoffset={264 - (264 * skill.level) / 100}
                          strokeLinecap="round"
                          style={{ transition: "stroke-dashoffset 1s ease" }}
                        />
                      </svg>
                    </div>

                    {/* Skill Label below circle */}
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: isSelected ? skill.color : "#ffffff",
                        marginTop: "0.65rem",
                        textAlign: "center",
                        fontFamily: "var(--font-outfit, Arial, sans-serif)",
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        color: "rgba(248,248,242,0.45)",
                        fontFamily: "monospace",
                        marginTop: "0.1rem",
                      }}
                    >
                      {skill.tag}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* ACTIVE SKILL INTERACTIVE DETAIL CARD - SHOWS ONLY ON HOVER / CLICK */}
            <AnimatePresence>
              {activeSkill && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: "2rem" }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${activeSkill.color}18, rgba(15,15,22,0.98))`,
                      border: `1.5px solid ${activeSkill.color}`,
                      borderRadius: "1.25rem",
                      padding: "1.25rem 1.6rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "1.25rem",
                      boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${activeSkill.color}30`,
                      transition: "background 0.3s ease, border-color 0.3s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "0.85rem",
                          background: "rgba(12,12,18,0.9)",
                          border: `1.5px solid ${activeSkill.color}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: `0 0 12px ${activeSkill.color}40`,
                          flexShrink: 0,
                        }}
                      >
                        {(() => {
                          const ActiveIcon = activeSkill.Icon;
                          return <ActiveIcon size={26} color={activeSkill.color} />;
                        })()}
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
                          <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff", margin: 0, fontFamily: "var(--font-outfit, Arial, sans-serif)" }}>
                            {activeSkill.name}
                          </h4>
                          <span style={{ fontSize: "0.72rem", background: `${activeSkill.color}22`, border: `1px solid ${activeSkill.color}50`, color: activeSkill.color, padding: "0.15rem 0.65rem", borderRadius: "9999px", fontWeight: 700, fontFamily: "monospace" }}>
                            {activeSkill.category}
                          </span>
                        </div>
                        <p style={{ fontSize: "0.88rem", color: "rgba(248,248,242,0.85)", margin: "0.25rem 0 0", lineHeight: 1.5 }}>
                          {activeSkill.description}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)", padding: "0.45rem 0.95rem", borderRadius: "0.75rem" }}>
                      <span style={{ fontSize: "1.3rem", fontWeight: 800, color: activeSkill.color, fontFamily: "monospace" }}>
                        {activeSkill.level}%
                      </span>
                      <span style={{ fontSize: "0.72rem", color: "rgba(248,248,242,0.6)", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "monospace" }}>
                        Proficiency
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

        {/* CODER CATEGORY STACK CARDS GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {coderSkillGroups.map((group, index) => {
            const GroupIcon = group.Icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                style={{
                  background: "rgba(15, 15, 22, 0.9)",
                  border: "1.5px solid rgba(255,255,255,0.1)",
                  borderRadius: "1.5rem",
                  padding: "1.75rem",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = group.color;
                  e.currentTarget.style.boxShadow = `0 15px 40px rgba(0,0,0,0.5), 0 0 25px ${group.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
                }}
              >
                {/* Header: Icon + Category Badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.35rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "0.75rem",
                        background: `${group.color}18`,
                        border: `1.5px solid ${group.color}35`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: group.color,
                      }}
                    >
                      <GroupIcon size={20} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-outfit, Arial, sans-serif)",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "#ffffff",
                        margin: 0,
                      }}
                    >
                      {group.category}
                    </h3>
                  </div>

                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      color: group.color,
                      background: `${group.color}15`,
                      border: `1px solid ${group.color}35`,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "9999px",
                      fontFamily: "monospace",
                    }}
                  >
                    {group.badge}
                  </span>
                </div>

                {/* Tech Skills Grid with Real Logos */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {group.items.map((item) => {
                    const ItemIcon = item.Icon;
                    return (
                      <div
                        key={item.name}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          background: "rgba(255,255,255,0.025)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          borderRadius: "0.75rem",
                          padding: "0.6rem 0.85rem",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <ItemIcon size={18} color={group.color} />
                          <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f8f8f2", fontFamily: "var(--font-outfit, Arial, sans-serif)" }}>
                            {item.name}
                          </span>
                        </div>
                        <span style={{ fontSize: "0.72rem", color: "rgba(248,248,242,0.45)", fontFamily: "monospace" }}>
                          {item.detail}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
