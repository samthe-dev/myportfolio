"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 rounded-full"
          style={{ background: "rgba(0,240,255,0.1)", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 rounded-full"
          style={{ background: "rgba(168,85,247,0.1)", filter: "blur(120px)" }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 md:mb-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#00f0ff", animation: "pulse 2s infinite" }}
          />
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            AI Engineer & Frontend Developer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Sam
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2"
        >
          COO of{" "}
          <span className="text-cyan-400 font-semibold">RexiO</span> —
          Building AI-powered digital experiences, agentic workflows, and
          premium interfaces that push the boundaries of human-AI interaction.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider text-center text-[#0a0a0f]"
            style={{
              background: "linear-gradient(90deg, #00f0ff, #a855f7)",
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider text-center text-slate-200"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div
            className="w-6 h-10 rounded-full flex items-start justify-center p-1.5"
            style={{ border: "2px solid rgba(255,255,255,0.2)" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
