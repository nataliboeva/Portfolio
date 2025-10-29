import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "EduCode",
      description: "Educational coding platform with 16 commits in October 2025. A project focused on helping students learn programming through interactive exercises and challenges.",
      tech: ["C#", ".NET", "Education"],
      github: "https://github.com/nataliboeva/EduCode",
      featured: true
    },
    {
      name: "Fitessa",
      description: "Fitness and wellness tracking application designed to help users monitor their health goals, workouts, and nutrition plans.",
      tech: ["C#", ".NET", "Health & Fitness"],
      github: "https://github.com/nataliboeva/Fitessa",
      featured: false
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-900" id="projects">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="neural-projects" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-cyan-400">
                <animate attributeName="r" values="1;2;1" dur="3s" repeatCount="indefinite"/>
              </circle>
              <line x1="10" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400/30">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
              </line>
              <line x1="10" y1="10" x2="10" y2="30" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400/30">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite"/>
              </line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-projects)"/>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Featured Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto">
            Building meaningful projects that make a difference
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <Card 
              key={project.name} 
              className={`p-8 md:p-10 hover:shadow-elegant transition-all duration-300 border-2 group animate-fade-in ${
                project.featured ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-transparent' : ''
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    {project.featured && (
                      <Badge className="bg-gradient-primary text-primary-foreground border-0">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button 
                  asChild 
                  variant="default"
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            asChild 
            variant="secondary" 
            size="lg"
            className="transition-all duration-300"
          >
            <a href="https://github.com/nataliboeva" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;