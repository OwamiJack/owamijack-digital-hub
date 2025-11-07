import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "CAPACITI",
    role: "Digital Associate",
    period: "2025 – Present",
    description: [
      "Supported digital adoption and transformation projects",
      "Tested and deployed AI-powered productivity tools",
      "Assisted in analyzing workflow data to optimize team performance",
    ],
  },
  {
    company: "Masifunde Training & Development",
    role: "System Support",
    period: "2023 – 2024",
    description: [
      "Provided IT and system support to staff and learners",
      "Resolved technical issues and documented common solutions",
      "Improved helpdesk response times and system performance",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-lg text-accent font-semibold mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
