import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const testimonials = [
  { name: "Ava", role: "Product Designer", quote: "Clear process, smooth delivery, great results." },
  { name: "Liam", role: "Frontend Lead", quote: "We shipped in days instead of weeks." },
  { name: "Maya", role: "Founder", quote: "Strong storytelling and crisp execution." },
  { name: "Ethan", role: "Engineer", quote: "Thoughtful details and reliable handoff." },
  { name: "Zoe", role: "PM", quote: "The cadence and communication were excellent." },
];

function VerticalColumn() {
  const controls = useAnimation();
  useEffect(() => {
    // Loop a vertical marquee effect
    const distance = 800; // pixels to travel before looping
    controls.start({
      y: [0, -distance],
      transition: { repeat: Infinity, duration: 24, ease: "linear" },
    });
  }, [controls]);

  const doubled = testimonials.concat(testimonials);

  return (
    <motion.div animate={controls} className="flex shrink-0 flex-col gap-4">
      {doubled.map((t, i) => (
        <figure
          key={`${t.name}-${i}`}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <blockquote className="text-slate-900">“{t.quote}”</blockquote>
          <figcaption className="mt-3 text-sm text-slate-600">— {t.name}, {t.role}</figcaption>
        </figure>
      ))}
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Testimonials</h2>

        <div className="relative mt-10 h-[380px] overflow-hidden">
          {/* Top/Bottom gradient fades that do not block interaction */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />

          <div className="flex h-full items-start gap-6">
            <VerticalColumn />
            <VerticalColumn />
          </div>
        </div>
      </div>
    </section>
  );
}
