"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "RexiO AI Companion",
    description:
      "Bangladesh-local AI companion with multi-agent system, voice interaction, and personalized neural memory. Built with Next.js, Python, and custom agentic workflows.",
    tags: ["Next.js", "Python", "AI", "Agentic Workflows", "NLP"],
    status: "Active",
    link: "https://rexioproject.shop",
    featured: true,
  },
  {
    title: "MCP Server Development",
    description:
      "Built and deployed 30+ MCP (Model Context Protocol) tools including chart generation, PDF manipulation, and Supabase-integrated reminder systems for the RexiO ecosystem.",
    tags: ["MCP", "TypeScript", "Supabase", "API Design"],
    status: "Completed",
    link: "https://github.com/samthe-dev/rexiobackendboss",
    featured: true,
  },
  {
    title: "Frontend Security Hardening",
    description:
      "Comprehensive security audit and implementation for RexiO frontend — CSP headers, XSS prevention, CSRF protection, secure authentication flows, and OWASP compliance.",
    tags: ["Security", "OWASP", "CSP", "XSS", "CSRF"],
    status: "Completed",
    link: "https://github.com/samthe-dev/rexiobackendboss",
    featured: true,
  },
  {
    title: "SijanList",
    description:
      "A professional bookmark dashboard that transforms Chrome New Tab into a high-performance productivity hub with glassmorphism UI and privacy-first design.",
    tags: ["Vanilla JS", "Extension APIs", "Productivity", "Glass UI"],
    status: "Active",
    link: "https://sijanlist.pro.bd",
    featured: false,
  },
  {
    title: "Coolify Infrastructure",
    description:
      "Migrated RexiO backend from Railway to Coolify (self-hosted). Configured Traefik reverse proxy, SSL certificates, Docker containers, and automated deployments.",
    tags: ["Docker", "Coolify", "Traefik", "DevOps"],
    status: "Completed",
    link: null,
    featured: false,
  },
  {
    title: "VPS Security Hardening",
    description:
      "Full security audit and hardening of production VPS — fail2ban, UFW firewall, SSH key-only auth, automatic updates, noVNC tunnel, and encrypted backups.",
    tags: ["Linux", "Security", "Fail2ban", "UFW", "SSH"],
    status: "Completed",
    link: null,
    featured: false,
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
    <section id="projects" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-[0.3em]">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`glass rounded-2xl p-6 group hover:border-[#00f0ff]/20 transition-all duration-300 ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-mono px-3 py-1 rounded-full ${
                    project.status === "Active"
                      ? "bg-[#00f0ff]/10 text-[#00f0ff]"
                      : "bg-[#a855f7]/10 text-[#a855f7]"
                  }`}
                >
                  {project.status}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors"
                    aria-label={`Visit ${project.title}`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#e2e8f0] mb-3 group-hover:text-[#00f0ff] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-[#94a3b8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
