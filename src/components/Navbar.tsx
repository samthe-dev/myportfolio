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
        maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem",
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

        {/* Desktop Links */}
        <ul className="hidden md:flex" style={{
          display: "flex", alignItems: "center", gap: "2rem", listStyle: "none", margin: 0, padding: 0,
        }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  fontSize: "0.875rem", fontWeight: 500, color: "#94a3b8",
                  textDecoration: "none", textTransform: "uppercase",
                  letterSpacing: "0.1em", transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          style={{
            display: "none", background: "none", border: "none",
            color: "rgba(255,255,255,0.7)", cursor: "none", padding: 0,
          }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(10,10,15,0.95)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <ul style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: "1.5rem", padding: "2rem 0", listStyle: "none", margin: 0,
            }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontSize: "0.875rem", fontWeight: 500, color: "#94a3b8",
                      textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
