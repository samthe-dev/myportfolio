"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const categories = [
  {
    title: "Frontend Engineering",
    icon: "◈",
    skills: [
      { name: "Next.js / React", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    title: "AI & Agent Systems",
    icon: "◇",
    skills: [
      { name: "Agentic Workflows", level: 90 },
      { name: "MCP Development", level: 88 },
      { name: "Prompt Engineering", level: 95 },
      { name: "Neural Memory", level: 80 },
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
      { name: "OWASP / Frontend Sec", level: 88 },
      { name: "CSP / Secure Headers", level: 85 },
      { name: "Core Web Vitals", level: 90 },
      { name: "Accessibility (a11y)", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-cyan-400/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.3em]">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Technical Skills
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-cyan-400/20 hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <span className="text-cyan-400 text-lg">{category.icon}</span>
                <h3 className="text-base md:text-lg font-semibold text-slate-200">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-400">{skill.name}</span>
                      <span className="text-cyan-400 font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          height: "100%",
                          borderRadius: "9999px",
                          background: "linear-gradient(90deg, #00f0ff, #a855f7)",
                          width: `${skill.level}%`,
                        }}
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
