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
    <section id="projects" style={{ padding: "8rem 0", position: "relative" }}>
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
          }}>Portfolio</span>
          <h2 style={{
            fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 700,
            marginTop: "0.75rem", letterSpacing: "-0.025em",
          }}>Featured Projects</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)", borderRadius: "1rem", padding: "1.5rem",
                transition: "border-color 0.3s",
              }}
            >
              {/* Status + Link */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{
                  fontSize: "0.75rem", fontFamily: "monospace", padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  background: project.status === "Active" ? "rgba(0,240,255,0.1)" : "rgba(168,85,247,0.1)",
                  color: project.status === "Active" ? "#00f0ff" : "#a855f7",
                }}>{project.status}</span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.75rem" }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: "0.75rem", fontFamily: "monospace",
                    padding: "0.25rem 0.625rem", borderRadius: "0.375rem",
                    background: "rgba(255,255,255,0.05)", color: "#94a3b8",
                  }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
