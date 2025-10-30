import Hero from "./components/Hero";
import Workflow from "./components/Workflow";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-50 text-slate-900">
      <Hero />
      <Workflow />
      <Features />
      <Testimonials />
      <footer className="px-6 py-12 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} First Design Agent. All rights reserved.
      </footer>
    </div>
  );
}
