"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/samthe-dev", icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" },
  { label: "Email", href: "mailto:sammiahmedsam@gmail.com", icon: "M2 4h20v16H2V4zm2 2v12h16V6H4zm0 0l8 7 8-7" },
  { label: "Telegram", href: "https://t.me/seiz_1_e", icon: "M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sammiahmedsam@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: "8rem 0", position: "relative" }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span style={{
            fontSize: "0.75rem", fontFamily: "monospace", color: "#00f0ff",
            letterSpacing: "0.3em", textTransform: "uppercase",
          }}>Contact</span>
          <h2 style={{
            fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 700,
            marginTop: "0.75rem", marginBottom: "1.5rem", letterSpacing: "-0.025em",
          }}>Let's Connect</h2>
          <p style={{ color: "#94a3b8", fontSize: "1.125rem", maxWidth: "36rem", margin: "0 auto 3rem" }}>
            Interested in collaboration, have a project idea, or just want to say hello? I'd love to hear from you.
          </p>

          {/* Email copy */}
          <button
            onClick={copyEmail}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.75rem",
              padding: "0.875rem 1.5rem", borderRadius: "0.75rem",
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)", color: "#e2e8f0", cursor: "pointer",
              fontSize: "0.875rem", marginBottom: "2.5rem",
            }}
          >
            <span>sammiahmedsam@gmail.com</span>
            <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
              {copied ? "✓ Copied!" : "Click to copy"}
            </span>
          </button>

          {/* Social links */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  width: 48, height: 48, borderRadius: "0.75rem",
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)", display: "flex", alignItems: "center",
                  justifyContent: "center", color: "#94a3b8", textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
