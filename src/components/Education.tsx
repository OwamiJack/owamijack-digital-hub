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
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education & Certifications</h2>
        <div className="space-y-6">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-lg text-muted-foreground">{item.institution}</p>
                </div>
                {item.optional && (
                  <span className="text-sm px-4 py-2 bg-accent text-accent-foreground rounded-full font-semibold shadow">
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
