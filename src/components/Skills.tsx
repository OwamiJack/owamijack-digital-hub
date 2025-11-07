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
                className="bg-card rounded-2xl p-8 shadow-xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-sm py-2 px-4 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-full font-medium border border-border"
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
