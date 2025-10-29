import React from "react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { 
          name: "C#", 
          devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        },
        { 
          name: "Java", 
          devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        { 
          name: "C++", 
          devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        },
        { 
          name: "JavaScript", 
          devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        }
      ]
    },
    {
      title: "Backend and Databases",
      skills: [
        { 
          name: ".NET", 
          devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
        },
        { 
          name: "MS SQL", 
          devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
        }
      ]
    },
    {
      title: "Frontend and Frameworks",
      skills: [
        { 
          name: "HTML5", 
          devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        { 
          name: "CSS3", 
          devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        { 
          name: "Bootstrap", 
          devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        }
      ]
    },
    {
      title: "Cloud and DevOps",
      skills: [
        { 
          name: "GitHub Actions", 
          devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg"
        },
        { 
          name: "Jenkins", 
          devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
        }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-900" id="skills">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="neural-skills" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#neural-skills)"/>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="space-y-20">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-center mb-12">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                  <h3 className="relative text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6 tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>
              </div>
              
              <div className="relative">
                {/* Floating particles background */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skill.name}
                      className="group relative"
                      style={{ animationDelay: `${skillIdx * 0.1}s` }}
                    >
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110"></div>
                      
                      {/* Main card */}
                      <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-600/30 hover:border-purple-400/60 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/25 group-hover:-translate-y-3 group-hover:scale-105">
                        
                        {/* Icon container with 3D effect */}
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          <div className="relative w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                            <img 
                              src={skill.devicon} 
                              alt={skill.name}
                              height="40"
                              className="w-10 h-10 relative z-10 group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          
                          {/* Floating sparkles */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                        
                        {/* Technology name with gradient text */}
                        <div className="text-center">
                          <span className="text-lg font-bold bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-blue-300 transition-all duration-500">
                            {skill.name}
                          </span>
                        </div>
                        
                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Skills;