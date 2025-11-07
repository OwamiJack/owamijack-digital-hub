import { Rocket, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "CAPACITI AI Workflow Automation Pilot",
    description: "Led the implementation of an AI-powered workflow automation system that streamlined internal document processing, resulting in a 25% improvement in efficiency.",
    impact: "25% efficiency improvement",
    icon: Rocket,
    tags: ["AI Integration", "Process Automation", "Digital Transformation"],
  },
  {
    title: "Masifunde Helpdesk Optimization",
    description: "Redesigned and optimized the IT helpdesk tracking system, implementing better categorization and priority systems that significantly reduced resolution times.",
    impact: "40% reduction in unresolved issues",
    icon: TrendingUp,
    tags: ["System Optimization", "IT Support", "Process Improvement"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                  {project.impact}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
