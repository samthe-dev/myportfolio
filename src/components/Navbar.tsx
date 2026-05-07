"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Exp", href: "#experience" },
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

  if (!mounted) {
    return (
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        width: "100%", height: "52px",
        background: "rgba(10,10,15,0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }} />
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          width: "100%", boxSizing: "border-box",
          background: scrolled ? "rgba(10,10,15,0.85)" : "rgba(10,10,15,0.6)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{
          width: "100%", margin: "0 auto",
          padding: "0 0.75rem", display: "flex", alignItems: "center",
          justifyContent: "space-between", height: "52px", boxSizing: "border-box",
        }}>
          {/* Logo */}
          <a href="#" style={{
            fontSize: "1rem", fontWeight: 800, letterSpacing: "0.02em",
            textDecoration: "none", flexShrink: 0, marginRight: "0.5rem",
          }}>
            <span style={{
              background: "linear-gradient(135deg, #00f0ff, #a855f7)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>sam</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>.dev</span>
          </a>

          {/* Nav Links — horizontal, scrollable on mobile */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0.875rem",
            flex: 1, justifyContent: "flex-end",
            overflowX: "auto", scrollbarWidth: "none",
          }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "0.65rem", fontWeight: 600, color: "#94a3b8",
                  textDecoration: "none", textTransform: "uppercase",
                  letterSpacing: "0.06em", whiteSpace: "nowrap",
                  flexShrink: 0, padding: "0.25rem 0",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed", inset: 0, zIndex: 55,
              background: "rgba(10,10,15,0.97)",
              backdropFilter: "blur(24px)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "2rem",
            }}
            onClick={() => setMobileOpen(false)}
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
                  fontSize: "1.25rem", fontWeight: 700, color: "#e2e8f0",
                  textDecoration: "none", textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
