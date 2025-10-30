import { motion } from "framer-motion";
import { Lightbulb, PencilRuler, MessageSquare, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Concept", desc: "Define goals, constraints, and success metrics." },
  { icon: PencilRuler, title: "Prototype", desc: "Translate ideas into interactive flows and screens." },
  { icon: MessageSquare, title: "Feedback", desc: "Iterate quickly with clear comments and revisions." },
  { icon: Rocket, title: "Launch", desc: "Ship with confidence and measure outcomes." },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Showreel: Our Workflow
        </motion.h2>

        <div className="relative mt-10 grid gap-6 sm:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
