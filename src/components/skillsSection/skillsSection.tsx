export default function SkillsSection() {
    const skills = [
    { name: "React", short: "React" },
    { name: "HTML5", short: "HTML" },
    { name: "CSS3", short: "CSS" },
    { name: "JavaScript", short: "JS" },
  ];

    return (
        <section id="skills" className="mb-14">
            <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((s, idx) => (
                <div key={idx} className="rounded-lg p-4 bg-gray-900 flex flex-col items-center justify-center border border-gray-700">
                  <div className="w-12 h-12 rounded-md bg-pink-200 flex items-center justify-center text-black font-bold">{s.short}</div>
                  <div className="mt-3 text-sm text-gray-200">{s.name}</div>
                </div>
              ))}
            </div>
          </section>
    )
}