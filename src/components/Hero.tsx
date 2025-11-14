import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import ResumeDownload from "@/components/ResumeDownload";

const Hero = () => {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 via-background to-primary/5 px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Photo */}
          <div className="flex justify-center md:justify-end animate-in fade-in slide-in-from-left duration-1000">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
              <div className="relative w-full h-full bg-background rounded-full flex items-center justify-center border-4 border-primary/30 overflow-hidden shadow-xl">
                <img src={profilePhoto} alt="Owami Jack - Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center md:text-left animate-in fade-in slide-in-from-right duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground leading-tight">
              I'm <span className="text-primary">Owami Jack</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-accent mb-4">
              Digital Associate & System Support Specialist
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Driving digital transformation and supporting efficient systems through technology and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 shadow-lg"
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get In Touch
              </Button>
              <ResumeDownload />
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
