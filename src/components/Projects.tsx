"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "RexiO AI Companion",
    description: "Bangladesh-local AI companion with multi-agent system, voice interaction, and personalized neural memory.",
    tags: ["Next.js", "Python", "AI", "Agentic Workflows", "NLP"],
    status: "Active",
    link: "https://rexioproject.shop",
  },
  {
    title: "MCP Server Development",
    description: "Built and deployed 30+ MCP tools including chart generation, PDF manipulation, and Supabase-integrated reminder systems.",
    tags: ["MCP", "TypeScript", "Supabase", "API Design"],
    status: "Completed",
    link: "https://github.com/samthe-dev/rexiobackendboss",
  },
  {
    title: "Frontend Security Hardening",
    description: "Comprehensive security audit — CSP headers, XSS prevention, CSRF protection, secure auth flows, OWASP compliance.",
    tags: ["Security", "OWASP", "CSP", "XSS", "CSRF"],
    status: "Completed",
    link: "https://github.com/samthe-dev/rexiobackendboss",
  },
  {
    title: "SijanList",
    description: "Professional bookmark dashboard transforming Chrome New Tab into a productivity hub with glassmorphism UI.",
    tags: ["Vanilla JS", "Extension APIs", "Productivity"],
    status: "Active",
    link: "https://sijanlist.pro.bd",
  },
  {
    title: "Coolify Infrastructure",
    description: "Migrated RexiO backend from Railway to Coolify. Configured Traefik, SSL, Docker, and automated deployments.",
    tags: ["Docker", "Coolify", "Traefik", "DevOps"],
    status: "Completed",
    link: null,
  },
  {
    title: "VPS Security Hardening",
    description: "Full security audit — fail2ban, UFW firewall, SSH key-only auth, automatic updates, encrypted backups.",
    tags: ["Linux", "Security", "Fail2ban", "UFW"],
    status: "Completed",
    link: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.3em]">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="rounded-xl p-5 md:p-6 transition-all duration-300 hover:border-cyan-400/20 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Status + Link */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-mono px-3 py-1 rounded-full"
                  style={{
                    background: project.status === "Active" ? "rgba(0,240,255,0.1)" : "rgba(168,85,247,0.1)",
                    color: project.status === "Active" ? "#00f0ff" : "#a855f7",
                  }}
                >
                  {project.status}
                </span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
