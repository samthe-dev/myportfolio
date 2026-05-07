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

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative" style={{ padding: "8rem 0", position: "relative" }}>
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/5 rounded-full blur-[150px]" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, background: "rgba(0,240,255,0.05)", borderRadius: "50%", filter: "blur(150px)" }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10" style={{ maxWidth: "64rem", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
          style={{ marginBottom: "4rem" }}
        >
          <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-[0.3em]" style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#00f0ff", letterSpacing: "0.3em", textTransform: "uppercase" }}>
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight" style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 700, marginTop: "0.75rem", letterSpacing: "-0.025em" }}>
            Technical Skills
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}
        >
          {[
            { title: "Frontend Engineering", icon: "◈", skills: [
              { name: "Next.js / React", level: 95 },
              { name: "TypeScript", level: 92 },
              { name: "Tailwind CSS", level: 95 },
              { name: "Framer Motion", level: 88 },
            ]},
            { title: "AI & Agent Systems", icon: "◇", skills: [
              { name: "Agentic Workflows", level: 90 },
              { name: "MCP Development", level: 88 },
              { name: "Prompt Engineering", level: 95 },
              { name: "Neural Memory", level: 80 },
            ]},
            { title: "Backend & Infrastructure", icon: "△", skills: [
              { name: "Node.js / API Design", level: 88 },
              { name: "Docker / Coolify", level: 85 },
              { name: "Database Design", level: 80 },
              { name: "Cloudflare / Traefik", level: 82 },
            ]},
            { title: "Security & Performance", icon: "⬡", skills: [
              { name: "OWASP / Frontend Sec", level: 88 },
              { name: "CSP / Secure Headers", level: 85 },
              { name: "Core Web Vitals", level: 90 },
              { name: "Accessibility (a11y)", level: 85 },
            ]},
          ].map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:border-[#00f0ff]/20 transition-colors duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                borderRadius: "1rem",
                padding: "1.5rem",
                transition: "border-color 0.3s",
              }}
            >
              <div className="flex items-center gap-3 mb-6" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <span className="text-[#00f0ff] text-lg" style={{ color: "#00f0ff", fontSize: "1.125rem" }}>{category.icon}</span>
                <h3 className="text-lg font-semibold text-[#e2e8f0]" style={{ fontSize: "1.125rem", fontWeight: 600, color: "#e2e8f0" }}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5" style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", marginBottom: "0.375rem" }}>
                      <span className="text-[#94a3b8]" style={{ color: "#94a3b8" }}>{skill.name}</span>
                      <span className="text-[#00f0ff] font-mono text-xs" style={{ color: "#00f0ff", fontFamily: "monospace", fontSize: "0.75rem" }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden" style={{ height: "0.375rem", background: "rgba(255,255,255,0.05)", borderRadius: "9999px", overflow: "hidden" }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          height: "100%",
                          borderRadius: "9999px",
                          background: "linear-gradient(90deg, #00f0ff, #a855f7)",
                          width: `${skill.level}%`,
                          transition: "width 1s ease-out",
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
