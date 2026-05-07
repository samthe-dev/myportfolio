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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
        background: scrolled ? "rgba(10,10,15,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        padding: scrolled ? "0.75rem 0" : "1.25rem 0",
        transition: "all 0.3s",
      }}
    >
      <div style={{
        maxWidth: "72rem", margin: "0 auto", padding: "0 1rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#" style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.05em", textDecoration: "none" }}>
          <span style={{
            background: "linear-gradient(135deg, #00f0ff, #a855f7)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>sam</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>.dev</span>
        </a>

        {/* Mobile Nav Links — horizontal scroll */}
        <div style={{
          display: "flex", alignItems: "center", gap: "1rem",
          overflowX: "auto", scrollbarWidth: "none", flex: 1, justifyContent: "flex-end",
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.75rem", fontWeight: 600, color: "#94a3b8",
                textDecoration: "none", textTransform: "uppercase",
                letterSpacing: "0.05em", whiteSpace: "nowrap",
                padding: "0.375rem 0.5rem",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
