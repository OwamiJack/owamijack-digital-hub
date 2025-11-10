import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <a
            href="mailto:owami.jack@example.com"
            className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">owami.jack@example.com</p>
            </div>
          </a>
          
          <a
            href="https://linkedin.com/in/owamijack"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">linkedin.com/in/owamijack</p>
            </div>
          </a>

          <a
            href="https://github.com/owamijack"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-muted-foreground text-sm">github.com/owamijack</p>
            </div>
          </a>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Your message..."
                rows={5}
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
