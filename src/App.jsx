import Hero from "./components/Hero";
import Workflow from "./components/Workflow";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* 1. Hero */}
      <Hero />

      {/* 3. Showreel / Workflow */}
      <Workflow />

      {/* 4. Services */}
      <Features />

      {/* 6. Vertical Testimonials with fade */}
      <Testimonials />

      {/* Simple CTA + Footer combined to stay within focused components */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h3 className="text-2xl font-semibold">Let’s build something iconic</h3>
          <p className="mt-2 text-slate-600">Tell us about your goals and timeline. We’ll propose a clear plan.</p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-900 hover:bg-slate-50"
          >
            Contact Us
          </a>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} First Design Agency. All rights reserved.
      </footer>
    </div>
  );
}
