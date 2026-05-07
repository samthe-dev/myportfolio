"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background gradient orbs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "25%", left: "-8rem", width: 384, height: 384,
          background: "rgba(0,240,255,0.1)", borderRadius: "50%", filter: "blur(120px)",
        }} />
        <div style={{
          position: "absolute", bottom: "25%", right: "-8rem", width: 384, height: 384,
          background: "rgba(168,85,247,0.1)", borderRadius: "50%", filter: "blur(120px)",
        }} />
      </div>

      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.5rem 1rem", borderRadius: "9999px",
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)", marginBottom: "2rem",
          }}
        >
          <span style={{
            width: 8, height: 8, borderRadius: "50%", background: "#00f0ff",
            animation: "pulse 2s infinite",
          }} />
          <span style={{
            fontSize: "0.75rem", fontFamily: "monospace", color: "#94a3b8",
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}>
            AI Engineer & Frontend Developer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 700,
            letterSpacing: "-0.025em", marginBottom: "1.5rem",
            background: "linear-gradient(135deg, #00f0ff, #a855f7)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Sam
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)", color: "#94a3b8",
            maxWidth: "42rem", margin: "0 auto 2.5rem", lineHeight: 1.75,
          }}
        >
          COO of{" "}
          <span style={{ color: "#00f0ff", fontWeight: 600 }}>RexiO</span> —
          Building AI-powered digital experiences, agentic workflows, and
          premium interfaces that push the boundaries of human-AI interaction.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            display: "flex", flexWrap: "wrap", alignItems: "center",
            justifyContent: "center", gap: "1rem",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: "0.875rem 2rem", borderRadius: "0.5rem",
              background: "linear-gradient(90deg, #00f0ff, #a855f7)",
              color: "#0a0a0f", fontWeight: 600, fontSize: "0.875rem",
              textTransform: "uppercase", letterSpacing: "0.05em",
              textDecoration: "none", display: "inline-block",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 30px rgba(0,240,255,0.3)"}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
          >
            View My Work
          </a>
          <a
            href="#contact"
            style={{
              padding: "0.875rem 2rem", borderRadius: "0.5rem",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#e2e8f0", fontWeight: 600, fontSize: "0.875rem",
              textTransform: "uppercase", letterSpacing: "0.05em",
              textDecoration: "none", display: "inline-block",
              transition: "all 0.3s",
            }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: "absolute", bottom: "2.5rem", left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div style={{
            width: 24, height: 40, borderRadius: 20,
            border: "2px solid rgba(255,255,255,0.2)",
            display: "flex", alignItems: "flex-start", justifyContent: "center",
            padding: "6px",
          }}>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: 6, height: 6, borderRadius: "50%", background: "#00f0ff",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
