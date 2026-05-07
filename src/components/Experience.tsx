"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    period: "2025 — Present",
    title: "COO & Lead Engineer, RexiO",
    description: "Leading the RexiO AI companion platform. Architected multi-agent systems, built 30+ MCP tools, implemented frontend security hardening, and migrated infrastructure to Coolify.",
    highlights: ["Multi-agent AI", "30+ MCP tools", "OWASP compliance", "Coolify migration"],
  },
  {
    period: "2024 — 2025",
    title: "Frontend Engineering & Security",
    description: "Deep dive into Next.js, React 19, Tailwind CSS, Framer Motion. Focused on premium UI/UX with glassmorphism and animations.",
    highlights: ["Next.js + React 19", "Advanced CSS", "OWASP security", "Performance"],
  },
  {
    period: "2023 — 2024",
    title: "Full-Stack Development",
    description: "Expanded into full-stack — Node.js, API design, database architecture, Docker containerization.",
    highlights: ["Node.js & APIs", "Database design", "Docker", "CI/CD"],
  },
  {
    period: "2022 — 2023",
    title: "The Beginning",
    description: "Started the journey into web development — HTML, CSS, JavaScript. Built first projects.",
    highlights: ["HTML/CSS/JS", "First projects", "Git", "Open source"],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "8rem 0", position: "relative" }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}
        >
          <span style={{
            fontSize: "0.75rem", fontFamily: "monospace", color: "#00f0ff",
            letterSpacing: "0.3em", textTransform: "uppercase",
          }}>Journey</span>
          <h2 style={{
            fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 700,
            marginTop: "0.75rem", letterSpacing: "-0.025em",
          }}>Experience</h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 1,
            background: "linear-gradient(to bottom, rgba(0,240,255,0.3), rgba(168,85,247,0.2), transparent)",
          }} />

          {timeline.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ position: "relative", marginBottom: "3rem", paddingLeft: "2rem" }}
            >
              {/* Dot */}
              <div style={{
                position: "absolute", left: -5, top: 4, width: 11, height: 11,
                borderRadius: "50%", background: "#00f0ff",
                boxShadow: "0 0 12px rgba(0,240,255,0.5)",
              }} />

              <div style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)", borderRadius: "1rem", padding: "1.5rem",
              }}>
                <span style={{
                  fontSize: "0.75rem", fontFamily: "monospace", color: "#00f0ff",
                  textTransform: "uppercase", letterSpacing: "0.05em",
                }}>{item.period}</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#e2e8f0", marginTop: "0.5rem", marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {item.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {item.highlights.map((h) => (
                    <span key={h} style={{
                      fontSize: "0.75rem", padding: "0.25rem 0.625rem",
                      borderRadius: "0.375rem", background: "rgba(0,240,255,0.05)",
                      color: "rgba(0,240,255,0.8)", border: "1px solid rgba(0,240,255,0.1)",
                    }}>{h}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
