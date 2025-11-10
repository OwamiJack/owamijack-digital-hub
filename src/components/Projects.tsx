import { Rocket, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "CAPACITI AI Workflow Automation Pilot",
    description: "Designed and tested an automation process that reduced document processing time by 25%.",
    impact: "25% time reduction",
    icon: Rocket,
    tags: ["AI Integration", "Process Automation", "Workflow Optimization"],
    link: "#contact",
  },
  {
    title: "Masifunde Helpdesk Optimization",
    description: "Built a tracking tool that cut unresolved tickets by 40%.",
    impact: "40% fewer unresolved tickets",
    icon: TrendingUp,
    tags: ["System Optimization", "Helpdesk Management", "Problem Solving"],
    link: "#contact",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <a
                key={index}
                href={project.link}
                className="block bg-card rounded-2xl p-10 shadow-xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h3>
                <p className="text-foreground mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                <div className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-full text-base font-bold mb-6 shadow-lg">
                  {project.impact}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm px-4 py-2 bg-secondary rounded-full text-foreground font-medium border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
