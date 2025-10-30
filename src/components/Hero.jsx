import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import GlassButton from "./GlassButton";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative">
      {/* 3D Spline scene */}
      <div className="relative h-[420px] w-full">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Subtle edge fade that does not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40" />
      </div>

      {/* Textual content */}
      <div className="mx-auto max-w-5xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            First Design Agency
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
            We craft interfaces that are clear, fast to ship, and thoughtfully animated. A focused partner from first idea to final handoff.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <GlassButton as="a" href="#workflow" icon={Rocket}>
              Get Started
            </GlassButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
