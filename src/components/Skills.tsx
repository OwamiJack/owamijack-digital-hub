import { Code, Wrench, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    skills: [
      "Microsoft 365",
      "Google Workspace",
      "Troubleshooting",
      "CRM Systems",
      "IT Support",
      "Data Entry",
    ],
  },
  {
    title: "Digital Tools",
    icon: Wrench,
    skills: [
      "Notion",
      "Canva",
      "Trello",
      "ChatGPT",
      "Power BI (Basic)",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Communication",
      "Collaboration",
      "Time Management",
      "Problem Solving",
      "Adaptability",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-sm py-1 px-3 bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
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

export default Skills;
