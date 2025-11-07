const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="bg-card rounded-2xl p-10 shadow-xl border-2 border-border">
          <p className="text-xl text-foreground leading-relaxed mb-8 text-center">
            I'm a motivated digital professional passionate about leveraging technology to improve workflows 
            and support efficient systems. My experience bridges digital transformation and system support — 
            empowering organizations to work smarter, not harder.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <div className="px-8 py-3 bg-primary rounded-full shadow-lg transform hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-bold text-lg">Tech-Savvy</span>
            </div>
            <div className="px-8 py-3 bg-accent rounded-full shadow-lg transform hover:scale-105 transition-transform">
              <span className="text-accent-foreground font-bold text-lg">Collaborative</span>
            </div>
            <div className="px-8 py-3 bg-primary rounded-full shadow-lg transform hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-bold text-lg">Solution-Oriented</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
