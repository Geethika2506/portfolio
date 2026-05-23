export default function Experience() {
  const experiences = [
    {
      role: "AI and Software Engineering Intern",
      company: "SILK Cashback",
      location: "Madrid, Spain",
      date: "Feb 2026 – Present",
      description: "Diagnosed and resolved bugs across a Python/FastAPI backend and Flutter frontend. Built and deployed an AI-powered product recommendation chatbot using LangChain and LLMs.",
    },
    {
      role: "Technical Coordinator",
      company: "IE Coding Club",
      location: "Madrid, Spain",
      date: "Oct 2025 – Present",
      description: "Coordinated technical workshops focusing on AI and programming. Supported peer project development and debugging initiatives.",
    },
    {
      role: "Data Sourcing & AI Development Intern",
      company: "Exprs Techno Logistics",
      location: "Hyderabad, India",
      date: "Jun 2025 – Aug 2025",
      description: "Improved search by organizing sponsor data and using prompt engineering. Refined UI content flows based on user feedback to increase usability.",
    }
  ];

  const skills = [
    "Python", "SQL", "Java", "C", "Machine Learning", "Deep Learning", "Generative AI",
    "Prompt Engineering", "NLP", "Computer Vision", "Recommendation Systems",
    "FastAPI", "Flutter", "Git", "AWS", "Azure"
  ];

  return (
    <section id="experience" className="bg-[#121212] text-white py-24 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-6 border-l border-white/20">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-2" />
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="text-lg text-gray-300 mt-1">{exp.company} — {exp.location}</p>
                <p className="text-sm font-mono text-gray-500 mt-2 mb-4 uppercase tracking-wider">{exp.date}</p>
                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Skills & Tech</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
