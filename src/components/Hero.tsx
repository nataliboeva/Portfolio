import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-slate-900">
      
      {/* Floating 3D Geometric Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400/30 to-pink-500/30 transform rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-emerald-400/30 to-teal-500/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-orange-400/30 to-red-500/30 transform rotate-12 animate-bounce-slow"></div>
      
      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-12 animate-fade-in">
        {/* Revolutionary Title with 3D Effect */}
        <div className="space-y-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
            <span className="relative text-sm font-bold text-cyan-300 bg-slate-800/50 px-6 py-3 rounded-full border border-cyan-400/30 backdrop-blur-sm">
              SOFTWARE ENGINEER
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tight">
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-gradient-x">
              NATALI
            </span>
            <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x-reverse mt-2">
              BOEVA
            </span>
          </h1>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            <p className="relative text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Crafting the future of technology with{" "}
              <span className="text-cyan-400 font-semibold">innovation</span>,{" "}
              <span className="text-purple-400 font-semibold">creativity</span>, and{" "}
              <span className="text-pink-400 font-semibold">passion</span>
            </p>
          </div>
        </div>

        {/* Revolutionary CTA Section */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button 
              asChild 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-105 border border-cyan-400/30"
            >
              <a href="#contact" className="relative z-10">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative">Connect With Me</span>
              </a>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="group relative overflow-hidden bg-slate-800/50 border-2 border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-300 font-bold px-8 py-4 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105"
            >
              <a href="#projects" className="relative z-10">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative">View My Work</span>
              </a>
            </Button>
          </div>
          
          {/* Floating Info Cards */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-emerald-400/30 hover:border-emerald-300 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300 font-semibold">Plovdiv, Bulgaria</span>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-purple-400/30 hover:border-purple-300 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-300 font-semibold">University Student</span>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-cyan-400/30 hover:border-cyan-300 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-300 font-semibold">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;