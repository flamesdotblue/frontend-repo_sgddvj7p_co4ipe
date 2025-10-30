import { motion } from "framer-motion";
import { Layers, Cpu, Shield } from "lucide-react";

const steps = [
  {
    icon: Layers,
    title: "Ideate",
    desc: "Describe your vision in plain language and select a style preset.",
  },
  {
    icon: Cpu,
    title: "Generate",
    desc: "The agent composes layouts, motion, and visuals using best practices.",
  },
  {
    icon: Shield,
    title: "Ship",
    desc: "Get clean, production-ready UI you can use immediately.",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Workflow
        </motion.h2>

        {/* Connector line */}
        <div className="relative mt-12 grid gap-6 sm:grid-cols-3">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-0.5 w-full -translate-x-1/2 -translate-y-1/2 sm:block bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-2xl border border-white/40 bg-white/40 p-6 text-center backdrop-blur-xl shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
