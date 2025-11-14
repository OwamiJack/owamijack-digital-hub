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
  {
    company: "KFC",
    role: "Front of House",
    period: "Sep 2024 – Present",
    description: [
      "Assisted customers with buying food and drinks",
      "Maintained cleanliness of the sitting area and restaurant lobby",
      "Provided excellent customer service in a fast-paced environment",
    ],
  },
  {
    company: "Rage",
    role: "Retail Assistant, Shop Assistant",
    period: "Mar 2024 – Aug 2024",
    description: [
      "Assisted customers with opening/paying accounts and purchasing goods",
      "Managed stock packing and displaying clothes as assigned",
      "Delivered quality customer service and met sales targets",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-10 shadow-xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-3xl font-bold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground font-semibold bg-secondary px-4 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <p className="text-xl text-accent font-bold mb-4">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-3 text-xl font-bold">•</span>
                        <span className="text-foreground text-lg">{item}</span>
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
