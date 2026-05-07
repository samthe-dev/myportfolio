"use client";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.05] py-8"
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-400 text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Sam
          </span>{" "}
          — COO of{" "}
          <span className="text-cyan-400">RexiO</span>
        </div>
        <div className="text-xs text-slate-500 font-mono">
          Built with Next.js · React · Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
