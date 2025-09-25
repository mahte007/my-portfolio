import { motion } from "framer-motion";

export default function ProjectsSection() {
    const projects = [
    {
      title: "Weather App",
      desc: "A weather forecasting SPA with live API integration.",
      tags: ["React", "Tailwind", "OpenWeather API"],
    },
    {
      title: "Todo App",
      desc: "A small productivity app with local persistence and animations.",
      tags: ["React", "TypeScript", "LocalStorage"],
    },
    {
      title: "E‑commerce Site",
      desc: "A demo store with product pages and cart flow.",
      tags: ["Next.js", "Stripe"]
    }
  ];

    return (
        <section id="projects" className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">Projects</h3>
              <a href="#projects" className="text-sm text-pink-300">See all →</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <motion.article key={i} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.07 }} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="h-40 rounded-md bg-gray-800 mb-4 flex items-center justify-center text-sm text-gray-500">Screenshot</div>
                  <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                  <p className="mt-2 text-gray-400 text-sm">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t, j) => <span key={j} className="text-xs px-2 py-1 bg-gray-800 rounded text-pink-200">{t}</span>)}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <a href="#" className="text-sm text-pink-300">Live →</a>
                    <a href="#" className="text-sm text-gray-400">Case study</a>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
    )
}