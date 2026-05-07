"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: "◈",
    skills: [
      { name: "Next.js / React", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion / GSAP", level: 88 },
    ],
  },
  {
    title: "AI & Agent Systems",
    icon: "◇",
    skills: [
      { name: "Agentic Workflows", level: 90 },
      { name: "MCP Development", level: 88 },
      { name: "Prompt Engineering", level: 95 },
      { name: "Neural Memory Systems", level: 80 },
    ],
  },
  {
    title: "Backend & Infrastructure",
    icon: "△",
    skills: [
      { name: "Node.js / API Design", level: 88 },
      { name: "Docker / Coolify", level: 85 },
      { name: "Database Design", level: 80 },
      { name: "Cloudflare / Traefik", level: 82 },
    ],
  },
  {
    title: "Security & Performance",
    icon: "⬡",
    skills: [
      { name: "OWASP / Frontend Security", level: 88 },
      { name: "CSP / Secure Headers", level: 85 },
      { name: "Core Web Vitals", level: 90 },
      { name: "Accessibility (a11y)", level: 85 },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-[0.3em]">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Technical Skills
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:border-[#00f0ff]/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#00f0ff] text-lg">{category.icon}</span>
                <h3 className="text-lg font-semibold text-[#e2e8f0]">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-[#94a3b8]">{skill.name}</span>
                      <span className="text-[#00f0ff] font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#00f0ff] to-[#a855f7] transition-all duration-1000 ease-out"
                        style={{ width: mounted ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
