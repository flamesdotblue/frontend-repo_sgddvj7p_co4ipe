import { motion } from "framer-motion";
import { Palette, Layout, Film, Sparkles } from "lucide-react";

const services = [
  { icon: Palette, title: "Branding", desc: "Identity systems, guidelines, and voice." },
  { icon: Layout, title: "Web Design", desc: "Responsive sites with accessible, clear structure." },
  { icon: Film, title: "Motion Graphics", desc: "Micro‑interactions and product showreels." },
  { icon: Sparkles, title: "Design Systems", desc: "Component libraries and usage patterns." },
];

export default function Features() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Services
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
