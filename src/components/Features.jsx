import { motion } from "framer-motion";
import { Check, Star, Cpu, Layers } from "lucide-react";

const featureList = [
  { icon: Star, title: "Liquid Glass Aesthetic", desc: "Translucent surfaces, soft depth, and gentle bloom." },
  { icon: Layers, title: "Composable Blocks", desc: "Focused components that snap together cleanly." },
  { icon: Cpu, title: "Agent-Powered", desc: "Automates layout, motion, and polish with best practices." },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Features
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {featureList.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-white/40 bg-white/40 p-6 backdrop-blur-xl shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{f.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> Smooth motion primitives</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> Accessible and responsive</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> Production-ready code</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
