"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stats = [
  { label: "Years Active", value: "3+" },
  { label: "Projects", value: "10+" },
  { label: "MCP Tools", value: "30" },
  { label: "Cups of Tea", value: "∞" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.3em]">
              About
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 tracking-tight">
              Who I Am
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5 md:gap-6">
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              I&apos;m <span className="text-slate-200 font-semibold">Sam</span>, the
              Chief Operating Officer of{" "}
              <span className="text-cyan-400 font-semibold">RexiO</span> — an
              advanced AI companion platform based in Bangladesh. I operate at
              the intersection of artificial intelligence, frontend engineering,
              and system architecture.
            </p>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              My expertise spans the full stack — from building{" "}
              <span className="text-slate-200">agentic AI workflows</span> and{" "}
              <span className="text-slate-200">neural memory systems</span> to
              crafting{" "}
              <span className="text-slate-200">premium, pixel-perfect user interfaces</span>.
              I specialize in Next.js, React, TypeScript, and modern CSS architecture.
            </p>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Beyond code, I&apos;m deeply invested in{" "}
              <span className="text-slate-200">AI safety</span>,{" "}
              <span className="text-slate-200">frontend security</span> (OWASP standards),
              and building systems that are both powerful and responsible.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10 md:mt-12"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-4 md:p-5 text-center hover:border-cyan-400/20 transition-colors duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="text-xl md:text-2xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">
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
