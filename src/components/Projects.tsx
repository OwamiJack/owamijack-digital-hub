import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "./ProjectManager";

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "CAPACITI AI Workflow Automation Pilot",
    description: "Designed and tested an automation process that reduced document processing time by 25%.",
    impact: "25% time reduction",
    tags: ["AI Integration", "Process Automation", "Workflow Optimization"],
  },
  {
    id: "2",
    title: "Masifunde Helpdesk Optimization",
    description: "Built a tracking tool that cut unresolved tickets by 40%.",
    impact: "40% fewer unresolved tickets",
    tags: ["System Optimization", "Helpdesk Management", "Problem Solving"],
  },
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-projects");
    if (saved) {
      setProjects(JSON.parse(saved));
    } else {
      setProjects(defaultProjects);
    }
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl p-10 shadow-xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {project.imageUrl && (
                <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h3>
              <p className="text-foreground mb-6 leading-relaxed text-lg">
                {project.description}
              </p>
              {project.impact && (
                <div className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-full text-base font-bold mb-6 shadow-lg">
                  {project.impact}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm px-4 py-2 bg-secondary rounded-full text-foreground font-medium border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
