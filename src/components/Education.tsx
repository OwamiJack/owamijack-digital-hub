import { GraduationCap, Award, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

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
  const { toast } = useToast();
  const [certificate, setCertificate] = useState<string | null>(null);

  const handleCertificateUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a certificate under 5MB.",
          variant: "destructive",
        });
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setCertificate(reader.result as string);
        toast({
          title: "Certificate uploaded!",
          description: "Your System Support Certificate has been uploaded successfully.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education & Certifications</h2>
        <div className="space-y-6">
          {education.map((item, index) => {
            const Icon = item.icon;
            const isSystemSupport = item.title === "System Support Certificate";
            
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
                  {isSystemSupport && certificate && (
                    <a 
                      href={certificate} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline mt-2 inline-block"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
                {item.optional && (
                  <span className="text-sm px-4 py-2 bg-accent text-accent-foreground rounded-full font-semibold shadow">
                    Optional
                  </span>
                )}
                {isSystemSupport && (
                  <label htmlFor="certificate-upload">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                      onClick={() => document.getElementById('certificate-upload')?.click()}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {certificate ? "Change" : "Upload"}
                    </Button>
                    <input
                      id="certificate-upload"
                      type="file"
                      accept="image/*,.pdf"
                      className="hidden"
                      onChange={handleCertificateUpload}
                    />
                  </label>
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
