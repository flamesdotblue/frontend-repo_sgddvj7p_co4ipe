import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const testimonials = [
  { name: "Ava", role: "Product Designer", quote: "The liquid-glass look instantly elevated our brand." },
  { name: "Liam", role: "Frontend Lead", quote: "We shipped a polished landing in hours, not weeks." },
  { name: "Maya", role: "Founder", quote: "It feels premium without the usual complexity." },
  { name: "Ethan", role: "Engineer", quote: "Clean code, delightful motion, and great defaults." },
  { name: "Zoe", role: "PM", quote: "Stakeholders loved the clarity and flow." },
];

function Row({ reverse = false }) {
  const controls = useAnimation();
  useEffect(() => {
    const distance = 1000; // pixels to travel before looping
    controls.start({
      x: reverse ? [0, distance] : [0, -distance],
      transition: { repeat: Infinity, duration: 20, ease: "linear" },
    });
  }, [controls, reverse]);

  return (
    <motion.div animate={controls} className="flex shrink-0 items-stretch gap-4">
      {testimonials.concat(testimonials).map((t, i) => (
        <figure
          key={`${t.name}-${i}`}
          className="min-w-[280px] max-w-[320px] rounded-2xl border border-white/40 bg-white/40 p-5 backdrop-blur-xl shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
        >
          <blockquote className="text-slate-800">“{t.quote}”</blockquote>
          <figcaption className="mt-3 text-sm text-slate-600">— {t.name}, {t.role}</figcaption>
        </figure>
      ))}
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Loved by teams
        </h2>

        <div className="relative mt-10 overflow-hidden">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="flex flex-col gap-4">
            <Row />
            <Row reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
