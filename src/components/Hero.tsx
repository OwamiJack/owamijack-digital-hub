import { Button } from "@/components/ui/button";
import { ArrowDown, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        toast({
          title: "Photo updated!",
          description: "Your profile photo has been updated successfully.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Owami Jack
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Digital Associate & System Support Specialist
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Driving digital transformation and supporting efficient systems through technology and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90"
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border-4 border-primary/20 overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-6xl text-muted-foreground">👤</div>
                )}
                <label
                  htmlFor="profile-upload"
                  className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                    <span className="text-sm text-primary-foreground font-medium">
                      Upload Photo
                    </span>
                  </div>
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-bounce">
          <ArrowDown 
            className="w-6 h-6 text-muted-foreground cursor-pointer" 
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
