import { Card } from "@/components/ui/card";
import { Code2, Sparkles, Target, Brain, Zap, Rocket } from "lucide-react";

const About = () => {
  const aboutCards = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Passionate Coder",
      description: "Welcome! I'm a software development student, passionate about coding, problem-solving, and building a solid tech foundation.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/30",
      iconBg: "from-blue-500 to-cyan-500",
      delay: "0.1s"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation-Driven",
      description: "Beyond coding, I'm committed to developing a critical and creative approach to technology, always looking to innovate.",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30",
      iconBg: "from-purple-500 to-pink-500",
      delay: "0.2s"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Curious Mind",
      description: "A tech enthusiast with a curious mind, constantly exploring new technologies and pushing the boundaries of what's possible.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-400/30",
      iconBg: "from-emerald-500 to-teal-500",
      delay: "0.3s"
    }
  ];

  const stats = [
    { icon: <Brain className="w-6 h-6" />, label: "Technologies", value: "10+", color: "text-blue-400" },
    { icon: <Zap className="w-6 h-6" />, label: "Projects", value: "5+", color: "text-purple-400" },
    { icon: <Rocket className="w-6 h-6" />, label: "Certificates", value: "9+", color: "text-emerald-400" }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-900" id="about">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="neural" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#neural)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold text-cyan-300 bg-slate-800/50 px-6 py-3 rounded-full border border-cyan-400/30 backdrop-blur-sm">
              ABOUT ME
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-gradient-x">
            Who I Am
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 mt-8 max-w-3xl mx-auto leading-relaxed">
            A passionate software engineer crafting the future with innovative solutions and cutting-edge technologies
          </p>
        </div>

        {/* Revolutionary Stats */}
        <div className="grid grid-cols-3 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div 
              key={stat.label}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 text-center group-hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color.includes('blue') ? 'from-blue-500 to-cyan-500' : stat.color.includes('purple') ? 'from-purple-500 to-pink-500' : 'from-emerald-500 to-teal-500'} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-slate-400 font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Morphing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {aboutCards.map((card, idx) => (
            <div 
              key={card.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: card.delay }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border ${card.borderColor} hover:border-opacity-60 transition-all duration-500 hover:shadow-2xl group-hover:-translate-y-3 animate-morph`}>
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.iconBg} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${card.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Revolutionary Bio Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl blur-sm"></div>
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 shadow-2xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                <h3 className="relative text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                  My Journey
                </h3>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed">
                I started learning programming out of curiosity, wanting to understand how software works behind the scenes. What began with small coding projects turned into a passion for solving real-world problems through technology. Over time, I've built projects, learned modern tools, and grown as a developer who loves turning ideas into working applications. I'm now focused on improving my full-stack skills and contributing to meaningful projects that make an impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;