export default function AboutSection() {
    return (
        <section id="about" className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">About Me</h3>
            <p className="text-gray-300 max-w-2xl">I’m a frontend developer specializing in building interactive and responsive web applications. I focus on component-driven development, strong accessibility, and pragmatic performance improvements.</p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <span className="inline-flex items-center gap-2 text-pastel-purple px-3 py-1 bg-gray-800 rounded">React</span>
              <span className="inline-flex items-center gap-2 text-pastel-green px-3 py-1 bg-gray-800 rounded">TypeScript</span>
              <span className="inline-flex items-center gap-2 text-pastel-pink px-3 py-1 bg-gray-800 rounded">Tailwind CSS</span>
            </div>
        </section>
    )
}