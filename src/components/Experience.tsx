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
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.3em]">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{
              background: "linear-gradient(to bottom, rgba(0,240,255,0.3), rgba(168,85,247,0.2), transparent)",
            }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-8 md:mb-10 md:pl-8"
            >
              {/* Dot — desktop only */}
              <div
                className="absolute left-[-5px] top-1 w-[11px] h-[11px] rounded-full hidden md:block"
                style={{
                  background: "#00f0ff",
                  boxShadow: "0 0 12px rgba(0,240,255,0.5)",
                }}
              />

              {/* Mobile dot */}
              <div
                className="absolute left-0 top-1 w-2 h-2 rounded-full md:hidden"
                style={{ background: "#00f0ff" }}
              />

              <div
                className="rounded-xl p-5 md:p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {item.period}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-slate-200 mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{
                        background: "rgba(0,240,255,0.05)",
                        color: "rgba(0,240,255,0.8)",
                        border: "1px solid rgba(0,240,255,0.1)",
                      }}
                    >
                      {h}
                    </span>
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
