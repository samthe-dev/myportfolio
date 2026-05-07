"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Navbar Container */}
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          width: "100%", boxSizing: "border-box",
          background: scrolled ? "rgba(10,10,15,0.85)" : "rgba(10,10,15,0.6)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            width: "100%", margin: "0 auto",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0.75rem 1rem",
            boxSizing: "border-box",
          }}
        >
          {/* Left: Logo */}
          <a href="#" style={{
            fontSize: "1.125rem", fontWeight: 800, letterSpacing: "0.02em",
            textDecoration: "none", flexShrink: 0,
          }}>
            <span style={{
              background: "linear-gradient(135deg, #00f0ff, #a855f7)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>sam</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>.dev</span>
          </a>

          {/* Right: Theme Toggle + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Theme Toggle (Moon icon) */}
            <button
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "#94a3b8", padding: "0.375rem", display: "flex",
                alignItems: "center", justifyContent: "center",
              }}
              aria-label="Toggle theme"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", flexDirection: "column", justifyContent: "center",
                alignItems: "center", gap: "5px", padding: "0.375rem",
              }}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: 22, height: 2, background: "#e2e8f0",
                  borderRadius: 2, display: "block", transformOrigin: "center",
                }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: 22, height: 2, background: "#e2e8f0",
                  borderRadius: 2, display: "block",
                }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: 22, height: 2, background: "#e2e8f0",
                  borderRadius: 2, display: "block", transformOrigin: "center",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay — fixed inset-0, full screen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 55,
              width: "100%", height: "100vh",
              background: "rgba(10,10,15,0.97)",
              backdropFilter: "blur(24px)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: "1.5rem", fontWeight: 700, color: "#e2e8f0",
                  textDecoration: "none", textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ display: "flex", gap: "1.5rem", marginTop: "2rem" }}
            >
              <a href="https://github.com/samthe-dev" target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              </a>
              <a href="mailto:sammiahmedsam@gmail.com" style={{ color: "#94a3b8" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13L2 4"/></svg>
              </a>
              <a href="https://t.me/seiz_1_e" target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
