"use client";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.05)", padding: "2rem 0",
    }}>
      <div style={{
        maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem",
        display: "flex", flexWrap: "wrap", alignItems: "center",
        justifyContent: "space-between", gap: "1rem",
      }}>
        <div style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
          © {new Date().getFullYear()}{" "}
          <span style={{
            background: "linear-gradient(135deg, #00f0ff, #a855f7)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            fontWeight: 600,
          }}>Sam</span> — COO of{" "}
          <span style={{ color: "#00f0ff" }}>RexiO</span>
        </div>
        <div style={{ fontSize: "0.75rem", color: "rgba(148,163,184,0.5)", fontFamily: "monospace" }}>
          Built with Next.js · React · Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
