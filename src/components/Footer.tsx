"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[#94a3b8]">
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">Sam</span> — COO of{" "}
          <span className="text-[#00f0ff]">RexiO</span>
        </div>
        <div className="text-xs text-[#94a3b8]/50 font-mono">
          Built with Next.js · React · Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
