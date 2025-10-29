import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/nataliboeva",
      description: "Check out my code and contributions"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/natali-boeva-8b0a762b8/",
      description: "Connect with me professionally"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/nataliboevaa/",
      description: "Follow my journey"
    },
    {
      name: "ORCID",
      icon: ExternalLink,
      url: "https://orcid.org/0009-0008-3348-1273",
      description: "Academic profile"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-900" id="contact">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="neural-contact" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#neural-contact)"/>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto">
            Always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Card 
                key={link.name}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-2 group hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-glow">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 md:p-12 text-center border-2 hover:shadow-elegant transition-all duration-300 bg-gradient-to-br from-primary/5 to-transparent animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">
              Get In Touch
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out through any of the platforms above. I'll try my best to get back to you!
            </p>
            <div className="pt-4">
              <p className="text-muted-foreground">
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;