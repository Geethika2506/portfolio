import { ArrowUpRight, Code2, Cpu, Brain, Zap } from "lucide-react";

const PROJECTS = [
  {
    title: "AI Skincare Recommendation",
    category: "Machine Learning",
    description: "ML system with a chatbot delivering personalized skincare suggestions using user behavior analysis and predictive modeling.",
    year: "2026",
    link: "https://github.com/Geethika2506/SkinCares",
    icon: Brain,
  },
  {
    title: "Intelligent Exam Proctoring",
    category: "Computer Vision",
    description: "CV-based system using object detection and head-pose estimation to detect unauthorized electronic devices and gaze deviations.",
    year: "2026",
    link: "https://github.com/Geethika2506/-Computer-Vision-Proctoring-System",
    icon: Cpu,
  },
  {
    title: "NLP Research",
    category: "LLMs & Transformers",
    description: "Analyzed alignment drift and failure modes in large language models to improve reliability and robustness.",
    year: "2026",
    link: "https://github.com/Geethika2506/NLP-project",
    icon: Zap,
  },
  {
    title: "Geopolitical News Classifier",
    category: "NLP & Classification",
    description: "Built a Natural Language Processing classifier to categorize geopolitical news articles.",
    year: "2026",
    link: "https://github.com/Geethika2506/Geopolictical-news-classifier",
    icon: Zap,
  },
  {
    title: "Pet Symptoms Analyzer Chatbot",
    category: "AI Chatbot",
    description: "Developed an AI-powered chatbot to analyze pet symptoms and provide initial guidance.",
    year: "2026",
    link: "https://github.com/Geethika2506/pet-symptoms-chatbot",
    icon: Brain,
  },
  {
    title: "Recipe Finder App",
    category: "Full-Stack & APIs",
    description: "Full-stack application integrating external APIs for real-time data retrieval and interactive user functionality.",
    year: "2025",
    link: "https://github.com/Geethika2506/recipe-app",
    icon: Code2,
  },
  {
    title: "E-Commerce Platform",
    category: "Agile CI/CD",
    description: "Built a full-stack platform using Agile methodologies, Git, CI/CD pipelines, and automated tests.",
    year: "2025",
    link: "https://github.com/Geethika2506/Devopsfinalproject",
    icon: Code2,
  },
  {
    title: "UNO Game Agents",
    category: "Reinforcement Learning",
    description: "Developed an UNO agent using Information Set Monte Carlo Tree Search (ISMCTS) for imperfect-information environments.",
    year: "2024",
    link: "https://github.com/Geethika2506/UnoAgent",
    icon: Brain,
  },
  {
    title: "HPC Mini Weather",
    category: "High Performance Computing",
    description: "Developed a mini weather simulation project focusing on High Performance Computing and optimization techniques.",
    year: "2024",
    link: "https://github.com/Geethika2506/HPC_MiniWeather_Project",
    icon: Cpu,
  },
  {
    title: "Credit Card Fraud Detection",
    category: "Machine Learning",
    description: "Developed a machine learning model to detect fraudulent credit card transactions accurately.",
    year: "2023",
    link: "https://github.com/Geethika2506/Creditcard-fraud-detection-Machine-Learning-final-project",
    icon: Brain,
  },
  {
    title: "Pokémon Catcher",
    category: "Flutter App",
    description: "Built a mobile application using Flutter for a Pokémon catching and management experience.",
    year: "2023",
    link: "https://github.com/Geethika2506/pokemoncatcher",
    icon: Code2,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#121212] text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Selected Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A showcase of my recent projects focusing on Artificial Intelligence, Full-Stack Development, and Data Engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            const IconComponent = project.icon;
            return (
              <a 
                key={idx} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col h-[420px] p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-0" />
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none" />

                {/* Icon at top right */}
                <div className="relative z-10 flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                    <IconComponent className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-mono text-gray-300 bg-white/5 border border-white/10">
                    {project.year}
                  </div>
                </div>

                {/* Main content */}
                <div className="relative z-10 flex flex-col flex-grow justify-between">
                  <div>
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {project.category}
                    </p>
                    
                    <h3 className="text-2xl font-semibold tracking-tight mb-4 group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-4 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer with arrow */}
                  <div className="flex justify-between items-end mt-6 pt-6 border-t border-white/10">
                    <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">View Project</span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:border-white">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
