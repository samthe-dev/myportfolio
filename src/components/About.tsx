"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" style={{ padding: "8rem 0", position: "relative" }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} style={{ marginBottom: "4rem" }}>
            <span style={{
              fontSize: "0.75rem", fontFamily: "monospace", color: "#00f0ff",
              letterSpacing: "0.3em", textTransform: "uppercase",
            }}>About</span>
            <h2 style={{
              fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 700,
              marginTop: "0.75rem", letterSpacing: "-0.025em",
            }}>Who I Am</h2>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{ color: "#94a3b8", fontSize: "1.125rem", lineHeight: 1.75 }}>
              I'm <span style={{ color: "#e2e8f0", fontWeight: 600 }}>Sam</span>, the
              Chief Operating Officer of{" "}
              <span style={{ color: "#00f0ff", fontWeight: 600 }}>RexiO</span> — an
              advanced AI companion platform based in Bangladesh. I operate at
              the intersection of artificial intelligence, frontend engineering,
              and system architecture.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "1.125rem", lineHeight: 1.75 }}>
              My expertise spans the full stack — from building{" "}
              <span style={{ color: "#e2e8f0" }}>agentic AI workflows</span> and{" "}
              <span style={{ color: "#e2e8f0" }}>neural memory systems</span> to
              crafting{" "}
              <span style={{ color: "#e2e8f0" }}>premium, pixel-perfect user interfaces</span>.
              I specialize in Next.js, React, TypeScript, and modern CSS architecture.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "1.125rem", lineHeight: 1.75 }}>
              Beyond code, I'm deeply invested in{" "}
              <span style={{ color: "#e2e8f0" }}>AI safety</span>,{" "}
              <span style={{ color: "#e2e8f0" }}>frontend security</span> (OWASP standards),
              and building systems that are both powerful and responsible.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1.5rem", marginTop: "4rem",
            }}
          >
            {[
              { label: "Years Active", value: "3+" },
              { label: "Projects", value: "10+" },
              { label: "MCP Tools", value: "30" },
              { label: "Cups of Tea", value: "∞" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)", borderRadius: "1rem", padding: "1.25rem",
                  textAlign: "center",
                }}
              >
                <div style={{
                  fontSize: "1.5rem", fontWeight: 700,
                  background: "linear-gradient(135deg, #00f0ff, #a855f7)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  marginBottom: "0.25rem",
                }}>{stat.value}</div>
                <div style={{
                  fontSize: "0.75rem", color: "#94a3b8",
                  textTransform: "uppercase", letterSpacing: "0.05em",
                }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
