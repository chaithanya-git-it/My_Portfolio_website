"use client";

import { motion } from "framer-motion";

export function FloatingBackground() {
  return (
    <>
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "fixed",
          top: "-10%",
          left: "-10%",
          width: "40%",
          height: "40%",
          borderRadius: "50%",
          background: "rgba(155,109,255,0.18)",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        style={{
          position: "fixed",
          bottom: "-10%",
          right: "-10%",
          width: "40%",
          height: "40%",
          borderRadius: "50%",
          background: "rgba(255,109,162,0.15)",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 20, -50, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
        style={{
          position: "fixed",
          top: "40%",
          left: "20%",
          width: "30%",
          height: "30%",
          borderRadius: "50%",
          background: "rgba(216,180,226,0.08)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
