import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    title: "Digital Associate Program",
    institution: "CAPACITI",
    icon: GraduationCap,
  },
  {
    title: "System Support Certificate",
    institution: "Masifunde Training and Development",
    icon: GraduationCap,
  },
  {
    title: "Google Digital Skills for Africa",
    institution: "Google",
    icon: Award,
    optional: true,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education & Certifications</h2>
        <div className="space-y-6">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
                {item.optional && (
                  <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                    Optional
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
