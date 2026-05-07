"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    period: "2025 — Present",
    title: "COO & Lead Engineer, RexiO",
    description:
      "Leading the RexiO AI companion platform as COO. Architected multi-agent systems, built 30+ MCP tools, implemented frontend security hardening (OWASP), and migrated infrastructure from Railway to Coolify with Traefik.",
    highlights: [
      "Multi-agent AI system architecture",
      "30+ MCP tools developed",
      "Frontend security audit & OWASP compliance",
      "Infrastructure migration (Railway → Coolify)",
    ],
  },
  {
    period: "2024 — 2025",
    title: "Frontend Engineering & Security",
    description:
      "Deep dive into advanced frontend development — Next.js, React 19, Tailwind CSS, Framer Motion. Focused on building premium UI/UX with glassmorphism, animations, and responsive design. Studied OWASP security standards.",
    highlights: [
      "Next.js + React 19 mastery",
      "Advanced CSS & animations",
      "OWASP security standards",
      "Performance optimization",
    ],
  },
  {
    period: "2023 — 2024",
    title: "Full-Stack Development",
    description:
      "Expanded into full-stack development — Node.js, API design, database architecture, Docker containerization. Built and deployed multiple web applications with modern tooling.",
    highlights: [
      "Node.js & API design",
      "Database architecture",
      "Docker & deployment",
      "CI/CD pipelines",
    ],
  },
  {
    period: "2022 — 2023",
    title: "The Beginning",
    description:
      "Started the journey into web development — HTML, CSS, JavaScript. Built first projects, discovered the power of code to create digital experiences. The foundation of everything that followed.",
    highlights: [
      "HTML/CSS/JavaScript fundamentals",
      "First web projects",
      "Git & version control",
      "Open source contributions",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-[0.3em]">
            Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f0ff]/30 via-[#a855f7]/20 to-transparent" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-[-5px] md:left-auto md:right-auto ${
                  index % 2 === 0 ? "md:right-[-5px]" : "md:left-[-5px]"
                } top-1 w-[11px] h-[11px] rounded-full bg-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.5)]`}
              />

              <div className="glass rounded-2xl p-6 ml-6 md:ml-0">
                <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold text-[#e2e8f0] mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#00f0ff]/5 text-[#00f0ff]/80 border border-[#00f0ff]/10"
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
