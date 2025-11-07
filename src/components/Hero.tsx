import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
              Driving digital transformation and supporting efficient systems.
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
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border-4 border-primary/20">
                <div className="text-6xl">👤</div>
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
