import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Save, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  imageUrl?: string;
}

const ProjectManager = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Omit<Project, 'tags'>> & { tags: string | string[] }>({
    title: "",
    description: "",
    impact: "",
    tags: "",
    githubLink: "",
    liveLink: "",
    imageUrl: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-projects");
    if (saved) {
      setProjects(JSON.parse(saved));
    }
  }, []);

  const saveProjects = (newProjects: Project[]) => {
    localStorage.setItem("portfolio-projects", JSON.stringify(newProjects));
    setProjects(newProjects);
  };

  const handleSave = () => {
    if (!formData.title || !formData.description) {
      toast({
        title: "Missing fields",
        description: "Please fill in title and description",
        variant: "destructive",
      });
      return;
    }

    const tagsArray = typeof formData.tags === 'string' 
      ? (formData.tags as string).split(',').map(t => t.trim()).filter(Boolean)
      : (formData.tags as string[]) || [];

    if (editingId) {
      const updated = projects.map(p =>
        p.id === editingId ? { ...formData, id: editingId, tags: tagsArray } as Project : p
      );
      saveProjects(updated);
      toast({ title: "Project updated successfully" });
    } else {
      const newProject: Project = {
        ...formData,
        id: Date.now().toString(),
        tags: tagsArray,
      } as Project;
      saveProjects([...projects, newProject]);
      toast({ title: "Project added successfully" });
    }

    setFormData({ title: "", description: "", impact: "", tags: "", githubLink: "", liveLink: "", imageUrl: "" });
    setIsAdding(false);
    setEditingId(null);
  };

  const handleEdit = (project: Project) => {
    setFormData(project);
    setEditingId(project.id);
    setIsAdding(true);
  };

  const handleDelete = (id: string) => {
    saveProjects(projects.filter(p => p.id !== id));
    toast({ title: "Project deleted" });
  };

  const handleCancel = () => {
    setFormData({ title: "", description: "", impact: "", tags: "", githubLink: "", liveLink: "", imageUrl: "" });
    setIsAdding(false);
    setEditingId(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image under 5MB",
          variant: "destructive",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="py-12 px-4 bg-secondary/10">
      <div className="container max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Manage Projects</h2>
          {!isAdding && (
            <Button onClick={() => setIsAdding(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          )}
        </div>

        {isAdding && (
          <div className="bg-card p-6 rounded-lg border border-border mb-8">
            <h3 className="text-xl font-bold mb-4">
              {editingId ? "Edit Project" : "Add New Project"}
            </h3>
            <div className="space-y-4">
              <div>
                <Label>Title *</Label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Project title"
                />
              </div>
              <div>
                <Label>Description *</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Project description"
                  rows={3}
                />
              </div>
              <div>
                <Label>Impact/Achievement</Label>
                <Input
                  value={formData.impact}
                  onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
                  placeholder="e.g., 25% time reduction"
                />
              </div>
              <div>
                <Label>Tags (comma separated)</Label>
                <Input
                  value={Array.isArray(formData.tags) ? formData.tags.join(', ') : (formData.tags as string || '')}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="React, TypeScript, API"
                />
              </div>
              <div>
                <Label>GitHub Link</Label>
                <Input
                  value={formData.githubLink}
                  onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                  placeholder="https://github.com/..."
                />
              </div>
              <div>
                <Label>Live Demo Link</Label>
                <Input
                  value={formData.liveLink}
                  onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
                  placeholder="https://..."
                />
              </div>
              <div>
                <Label>Project Image URL or Upload</Label>
                <Input
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://... or upload below"
                  className="mb-2"
                />
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" onClick={handleCancel}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-card p-4 rounded-lg border border-border flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-bold text-lg">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                {project.impact && (
                  <p className="text-sm font-semibold text-primary mb-2">{project.impact}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 text-sm">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(project)}>
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(project.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectManager;
