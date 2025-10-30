import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import GlassButton from "./GlassButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Liquid glass blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-sky-300/50 to-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-300/50 to-purple-500/30 blur-3xl" />
      </div>

      {/* Content card */}
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/40 bg-white/30 p-10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
              <Sparkles className="h-4 w-4 text-blue-600" />
              Liquid-glass design system
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              First Design Agent
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Craft stunning interfaces with translucent glass panels, soft depth,
              and delightful motion. Let the agent turn ideas into production-ready designs.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <GlassButton as="a" href="#workflow" icon={Rocket}>
                Start Building
              </GlassButton>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200/60 bg-white/60 px-5 py-3 text-slate-800 backdrop-blur-md shadow-sm hover:bg-white/80"
              >
                <Sparkles className="h-4 w-4 text-blue-600" />
                Explore Features
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
