import { motion } from "framer-motion";

export default function GlassButton({ children, onClick, as = "button", href = "#", className = "", icon: Icon }) {
  const Component = as === "a" ? motion.a : motion.button;
  return (
    <Component
      whileTap={{ scale: 0.97, y: 1 }}
      onClick={onClick}
      href={as === "a" ? href : undefined}
      className={`relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#3ba1ff] to-[#1e6dd8] px-5 py-3 text-white shadow-[inset_0_1px_0_#7fd0ff,0_8px_20px_rgba(30,109,216,0.45)] active:shadow-[inset_0_2px_0_#7fd0ff,0_4px_12px_rgba(30,109,216,0.35)] transition-shadow ${className}`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Shine */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute left-1/2 top-[-60%] h-40 w-[120%] -translate-x-1/2 rotate-12 rounded-full bg-white/25 blur-2xl" />
      </span>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      <span className="relative z-10 font-semibold tracking-tight">{children}</span>
    </Component>
  );
}
