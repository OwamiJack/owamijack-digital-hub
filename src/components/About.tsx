const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a motivated digital professional passionate about leveraging technology to improve workflows 
            and support efficient systems. My experience bridges digital transformation and system support — 
            empowering organizations to work smarter, not harder.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <div className="px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary font-semibold">Tech-Savvy</span>
            </div>
            <div className="px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent font-semibold">Collaborative</span>
            </div>
            <div className="px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary font-semibold">Solution-Oriented</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
