"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-[0.3em]">
              About
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
              Who I Am
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6 text-[#94a3b8] text-lg leading-relaxed">
            <p>
              I'm <span className="text-[#e2e8f0] font-semibold">Sam</span>, the
              Chief Operating Officer of{" "}
              <span className="text-[#00f0ff] font-semibold">RexiO</span> — an
              advanced AI companion platform based in Bangladesh. I operate at
              the intersection of artificial intelligence, frontend engineering,
              and system architecture.
            </p>
            <p>
              My expertise spans the full stack — from building{" "}
              <span className="text-[#e2e8f0]">agentic AI workflows</span> and{" "}
              <span className="text-[#e2e8f0]">neural memory systems</span> to
              crafting{" "}
              <span className="text-[#e2e8f0]">
                premium, pixel-perfect user interfaces
              </span>
              . I specialize in Next.js, React, TypeScript, and modern CSS
              architecture.
            </p>
            <p>
              Beyond code, I'm deeply invested in{" "}
              <span className="text-[#e2e8f0]">AI safety</span>,{" "}
              <span className="text-[#e2e8f0]">frontend security</span> (OWASP
              standards), and building systems that are both powerful and
              responsible. I believe technology should enhance human capability,
              not replace it.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: "Years Active", value: "3+" },
              { label: "Projects", value: "10+" },
              { label: "MCP Tools", value: "30" },
              { label: "Cups of Tea", value: "∞" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-5 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#94a3b8] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
