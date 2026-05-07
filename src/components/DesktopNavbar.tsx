"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function DesktopNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/[0.06] transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,15,0.85)" : "rgba(10,10,15,0.6)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <a href="#" className="text-lg font-extrabold tracking-tight no-underline shrink-0">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">sam</span>
          <span className="text-white/30">.dev</span>
        </a>

        {/* Center: Nav Links */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 no-underline tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA */}
        <a
          href="#contact"
          className="text-sm font-semibold px-5 py-2 rounded-lg no-underline transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, rgba(0,240,255,0.15), rgba(168,85,247,0.15))",
            border: "1px solid rgba(0,240,255,0.3)",
            color: "#00f0ff",
          }}
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}
