import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, Code2, Globe, Sparkles, Database } from 'lucide-react';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CodePattern = () => (
    <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 text-violet-400 text-sm font-mono animate-pulse">
        {'const developer = { passion: "unlimited", skills: ["React", "Node.js"] }'}
      </div>
      <div className="absolute top-1/3 left-1/4 text-purple-400 text-xs font-mono animate-pulse" style={{ animationDelay: '1s' }}>
        {'// Building the future, one line at a time'}
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-violet-300 text-sm font-mono animate-pulse" style={{ animationDelay: '2s' }}>
        {'function createMagic() { return innovation; }'}
      </div>

    </div>
  );

  const GridOverlay = () => (
    <div className="absolute inset-0 opacity-[0.02]">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );

  return (
    <section 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-violet-900"
    >
      {/* Background Elements */}
      <GridOverlay />
      <CodePattern />
      
      {/* Static Background Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-purple-400/15 to-violet-500/25 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-400/20 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              
              {/* Profile Image - Mobile/Small screens */}
              <div className={`lg:hidden mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-violet-400/30 shadow-2xl">
                  <img 
                    src="/prasad.jpg" 
                    alt="Devi Naga Prasad" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Main Heading */}
              <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white/80 block mb-2">Hi, I'm</span>
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Devi naga prasad
                  </span>
                </h1>
              </div>

              {/* Tagline */}
              <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  Building Innovative Web Solutions with
                  <span className="text-violet-300 font-semibold"> Code & Creativity</span>
                </p>
              </div>

              {/* Description */}
              <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Full-stack developer</span> passionate about creating beautiful, functional digital experiences
                  that solve real-world problems and delight users.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-6 pt-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <button 
                  onClick={() => navigate('/projects')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-violet-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-violet-500/30 overflow-hidden cursor-pointer"
                  style={{ color: 'white' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative z-10" style={{ color: 'white' }}>View My Work</span>
                </button>
                
                <button 
                  onClick={() => navigate('/contact')}
                  className="group relative px-8 py-4 bg-transparent text-violet-300 rounded-xl font-semibold text-lg border-2 border-violet-400/30 hover:border-violet-400/50 backdrop-blur-sm hover:bg-violet-500/5 transition-all duration-300 cursor-pointer"
                >
                  <span className="relative z-10">Get In Touch</span>
                </button>
              </div>

              {/* Social Links */}
              <div className={`pt-8 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className="flex space-x-6">
                  <a
                    href="https://github.com/Prasadnaidu-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-violet-500/10 backdrop-blur-sm border border-violet-400/20 rounded-xl text-violet-300 hover:bg-violet-500/20 hover:border-violet-400/40 transform hover:-translate-y-1 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/devi-naga-prasad-akkisetti-50725229b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-violet-500/10 backdrop-blur-sm border border-violet-400/20 rounded-xl text-violet-300 hover:bg-violet-500/20 hover:border-violet-400/40 transform hover:-translate-y-1 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  
                  <a
                    href="mailto:bobbynaidu2005@gmail.com"
                    className="group p-4 bg-violet-500/10 backdrop-blur-sm border border-violet-400/20 rounded-xl text-violet-300 hover:bg-violet-500/20 hover:border-violet-400/40 transform hover:-translate-y-1 transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Side - Image with Design Elements (Desktop only) */}
            <div className={`hidden lg:block relative transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                {/* Background Design Element */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-[3rem] blur-2xl transform scale-110" />
                
                {/* Main Container with Geometric Design */}
                <div className="relative">
                  {/* Large Circle Background */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-full border border-violet-400/20" />
                  
                  {/* Smaller Accent Circle */}
                  <div className="absolute top-16 right-16 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full border border-purple-400/30" />
                  
                  {/* Image Container - Positioned to show partial view */}
                  <div className="relative z-10 ml-12 mt-8">
                    <div className="w-80 h-96 rounded-3xl overflow-hidden border-4 border-violet-400/30 shadow-2xl">
                      <img 
                        src="/prasad.jpg" 
                        alt="Devi Naga Prasad" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating Tech Icons */}
                  <div className="absolute top-8 left-8 p-4 bg-violet-500/20 backdrop-blur-sm border border-violet-400/30 rounded-2xl">
                    <Code2 size={24} className="text-violet-300" />
                  </div>
                  
                  <div className="absolute bottom-16 right-8 p-4 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl">
                    <Sparkles size={24} className="text-purple-300" />
                  </div>

                  <div className="absolute top-1/3 left-4 p-3 bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-xl">
                    <Globe size={20} className="text-indigo-300" />
                  </div>

                  <div className="absolute bottom-1/3 right-4 p-3 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl">
                    <Database size={20} className="text-emerald-300" />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-violet-600/90 backdrop-blur-sm border border-violet-400/30 rounded-full">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white text-sm font-medium">Available for projects</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Home;