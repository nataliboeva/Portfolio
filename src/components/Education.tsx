import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconUniversityPlovdiv, IconSoftUni } from "@/components/icons";

const Education = () => {
  const education = [
    {
      institution: 'University of Plovdiv "Paisii Hilendarski"',
      logo: <IconUniversityPlovdiv className="w-12 h-12" />,
      degree: "Bachelor's degree, Computer Software Engineering",
      period: "2025 - 2029",
      details: ["Team Building", "C#", "C++", "Java"]
    },
    {
      institution: 'Software University (SoftUni)',
      logo: <IconSoftUni className="w-12 h-12" />,
      degree: "Various bootcamps & certificates, Computer Software Engineering",
      period: "2023 - 2026",
      details: ["Problem Solving", "Back-End Web Development", "+2 skills"]
    }
  ];

  const certificates = [
    {
      issuer: 'Software University (SoftUni)',
      logo: <IconSoftUni className="w-12 h-12" />,
      title: 'ASP.NET Advanced',
      issued: 'Aug 2025',
      skills: ['ASP.NET Core', '.NET', 'Web APIs'],
      image: '/certificates/ASP.NET Advanced.jpg',
      link: 'https://softuni.bg/certificates/details/248513/a614d504',
      verified: true
    },
    {
      issuer: 'Software University (SoftUni)',
      logo: <IconSoftUni className="w-12 h-12" />,
      title: 'ASP.NET Fundamentals',
      issued: 'May 2025',
      skills: ['ASP.NET', '.NET'],
      image: '/certificates/ASP.NET Fundamentals.jpg',
      link: 'https://softuni.bg/certificates/details/245725/349cc484',
      verified: true
    },
    {
      issuer: 'Software University (SoftUni)',
      logo: <IconSoftUni className="w-12 h-12" />,
      title: 'Entity Framework Core',
      issued: 'Mar 2025',
      skills: ['Entity Framework Core', '.NET', 'ORM'],
      image: '/certificates/Entity Framework Core.jpg',
      link: 'https://softuni.bg/certificates/details/239802/89f82b6f',
      verified: true
    },
    {
      issuer: 'Software University (SoftUni)',
      logo: <IconSoftUni className="w-12 h-12" />,
      title: 'Microsoft SQL Server',
      issued: 'Feb 2025',
      skills: ['SQL Server', 'T-SQL', 'Database Design'],
      image: '/certificates/MS SQL.jpg',
      link: 'https://softuni.bg/certificates/details/235764/e54f26cb',
      verified: true
    },
    {
      issuer: 'Software University (SoftUni)',
      logo: <IconSoftUni className="w-12 h-12" />,
      title: 'JS FRONT-END',
      issued: 'Dec 2024',
      skills: ['JavaScript', 'Frontend', 'DOM'],
      image: '/certificates/JS FRONT END.jpg',
      link: 'https://softuni.bg/certificates/details/232331/65aed1a8',
      verified: true
    },
    {
      issuer: 'Software University (SoftUni)',
      logo: <IconSoftUni className="w-12 h-12" />,
      title: 'HTML & CSS',
      issued: 'Nov 2024',
      skills: ['HTML5', 'CSS3', 'Responsive Design'],
      image: '/certificates/HTML And CSS.jpg',
      link: 'https://softuni.bg/certificates/details/228593/c5abbf20',
      verified: true
    },
    // Explicit C# certificate entries (ensured present)
    {
      issuer: 'Software University (SoftUni)',
      logo: <IconSoftUni className="w-12 h-12" />,
      title: 'C# OOP',
      issued: 'Jun 2024',
      skills: ['C#', 'OOP', 'Design Principles'],
      image: '/certificates/CSharp OOP.jpg',
      link: 'https://softuni.bg/certificates/details/222743/8310d54f',
      verified: true
    },
    {
      issuer: 'Software University (SoftUni)',
      logo: <IconSoftUni className="w-12 h-12" />,
      title: 'C# Advanced',
      issued: 'May 2024',
      skills: ['C#', 'Data Structures', 'LINQ'],
      image: '/certificates/CSharp Advanced.jpg',
      link: 'https://softuni.bg/certificates/details/217485/4d84a532',
      verified: true
    },
    {
      issuer: 'Software University (SoftUni)',
      logo: <IconSoftUni className="w-12 h-12" />,
      title: 'Programming Fundamentals with C#',
      issued: 'Apr 2024',
      skills: ['C#', 'Fundamentals', 'Algorithms'],
      image: '/certificates/FundamentalsCSharp.jpg',
      link: 'https://softuni.bg/certificates/details/209224/a40606fa',
      verified: true
    },
    {
      issuer: 'Software University (SoftUni)',
      logo: <IconSoftUni className="w-12 h-12" />,
      title: 'Programming Basics with C#',
      issued: 'Feb 2023',
      skills: ['C# Basics'],
      image: '/certificates/Basics.jpg',
      link: 'https://softuni.bg/certificates/details/158359/4051b6c9',
      verified: true
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-900" id="education">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="neural-education" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#neural-education)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              EDUCATION & ACHIEVEMENTS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Education & Certificates
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-8 max-w-3xl mx-auto leading-relaxed">
            Formal education and professional certifications earned through dedicated learning and practice
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-900/30 px-6 py-3 rounded-full border border-emerald-200/50 dark:border-emerald-700/50">
                ACADEMIC BACKGROUND
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div 
                key={edu.institution}
                className="group animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl blur-sm"></div>
                  <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-gray-700/50 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group-hover:-translate-y-2">
                    <div className="flex items-start gap-6">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative w-16 h-16 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {edu.logo}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 mb-2">
                          {edu.institution}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-3">{edu.degree}</p>
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-4">{edu.period}</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.details.map((detail) => (
                            <span 
                              key={detail}
                              className="px-3 py-1 bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium rounded-full border border-emerald-200/50 dark:border-emerald-700/50"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
              <span className="relative text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent px-6 py-3 rounded-full border border-emerald-400/30 backdrop-blur-sm">
                PROFESSIONAL CERTIFICATES
              </span>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full shadow-lg shadow-emerald-500/50"></div>
            <p className="text-slate-300 mt-6 text-lg">Earned through Software University (SoftUni)</p>
          </div>
          
          <div className="relative">
            {/* Floating particles background */}
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
              {certificates
                .slice()
                .sort((a, b) => new Date(b.issued).getTime() - new Date(a.issued).getTime())
                .map((cert, idx) => {
                  // Build safe URLs for local certificate images (handle spaces and `#`)
                  const filename = (cert.image || '').replace(/^\/certificates\//, '');
                  const imageSrc = filename ? `/certificates/${encodeURIComponent(filename)}` : undefined;
                  const linkHref = cert.link
                    ? cert.link.startsWith('/certificates/')
                      ? `/certificates/${encodeURIComponent(cert.link.replace('/certificates/', ''))}`
                      : cert.link
                    : imageSrc;

                  return (
                <a
                  key={cert.title}
                  href={linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative animate-fade-in overflow-hidden rounded-3xl border border-slate-700/50 block"
                  style={{ animationDelay: `${(idx * 0.1) + 0.2}s` }}
                >
                  {/* Image-first gallery card */}
                  <div className="relative pt-[62%] bg-slate-800">
                    {imageSrc ? (
                      <img 
                        src={imageSrc}
                        alt={`${cert.title} certificate`}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`absolute inset-0 ${cert.image ? 'hidden' : 'flex'} items-center justify-center`}>
                      {/* Certificate-styled fallback background */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,.06) 9px), repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,.06) 9px)`
                        }} />
                        <div className="absolute inset-6 rounded-xl border border-slate-600/60" />
                        <div className="absolute inset-x-10 top-6 h-10 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded" />
                      </div>
                      <div className="relative z-10 text-center px-6">
                        <div className="mx-auto mb-3 w-14 h-14 rounded-xl bg-slate-900/70 border border-slate-700/60 flex items-center justify-center">
                          {cert.logo}
                        </div>
                        <p className="text-white text-sm font-semibold line-clamp-2">{cert.title}</p>
                        <p className="text-slate-300 text-xs mt-1">{cert.issuer}</p>
                      </div>
                    </div>

                    {/* Top badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-900/70 border border-slate-700/60 text-slate-200 backdrop-blur-sm">
                        {cert.issuer}
                      </span>
                      {cert.verified && (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 backdrop-blur-sm">
                          Verified
                        </span>
                      )}
                    </div>

                    {/* Bottom overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent">
                      <h4 className="text-base font-semibold text-white line-clamp-2">
                        {cert.title}
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span key={skill} className="px-2 py-0.5 text-[11px] rounded-full bg-slate-900/70 border border-slate-700/60 text-slate-300 backdrop-blur-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover actions */}
                    {linkHref && (
                      <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <a href={linkHref} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-white/90 text-slate-900 font-semibold border border-slate-200 shadow-lg">
                          View Certificate
                        </a>
                      </div>
                    )}
                  </div>
                </a>
              );
              })}
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
