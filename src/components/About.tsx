const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="bg-card rounded-2xl p-10 shadow-xl border-2 border-border">
          <div className="text-lg text-foreground leading-relaxed space-y-4">
            <p>
              I am Owami Jack, a dedicated and detail-oriented professional with a growing passion for digital transformation, technology integration, and system support. My career journey has allowed me to bridge the gap between people and technology — helping organizations work smarter through the effective use of digital tools and systems.
            </p>
            
            <p>
              During my time as a Digital Associate at CAPACITI, I've been actively involved in projects that enhance digital collaboration, test emerging AI-driven tools, and improve workflow efficiency. This experience has deepened my understanding of how technology can empower teams to adapt, innovate, and deliver results in fast-paced environments.
            </p>
            
            <p>
              Previously, as a System Support Specialist at Masifunde Training and Development, I gained hands-on experience maintaining IT systems, troubleshooting technical issues, and providing frontline support to users. Through that role, I learned the value of clear communication, proactive problem-solving, and reliable system management — skills I continue to build upon in every new challenge.
            </p>
            
            <p>
              I'm passionate about continuous learning and believe in staying adaptable in the ever-evolving digital world. Whether it's optimizing a system, improving user experience, or implementing automation tools, my goal is to contribute to solutions that make technology more accessible and impactful.
            </p>
            
            <p>
              Outside of work, I'm curious about AI tools, data analytics, and digital process improvement, and I enjoy exploring new ways to combine these interests to create meaningful change in the workplace.
            </p>
          </div>
          
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
