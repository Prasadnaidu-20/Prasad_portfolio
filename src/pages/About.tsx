import React, { useState, useEffect } from 'react';
import { Code2, Zap, Users, Award, Target, Lightbulb, Rocket, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CodePattern = () => (
    <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 text-violet-400 text-sm font-mono animate-pulse">
        {'const passion = "unlimited";'}
      </div>
      <div className="absolute top-1/3 right-1/4 text-purple-400 text-xs font-mono animate-pulse" style={{ animationDelay: '1s' }}>
        {'// Continuous learning'}
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-violet-300 text-sm font-mono animate-pulse" style={{ animationDelay: '2s' }}>
        {'function build() { return innovation; }'}
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

  const expertise = [
    { 
      icon: Code2,
      title: 'Full-Stack Development', 
      desc: 'Expertise in modern web technologies from frontend to backend',
      gradient: 'from-violet-500 to-purple-600'
    },
    { 
      icon: Lightbulb,
      title: 'Problem Solving', 
      desc: 'Designing efficient algorithms using data structures to deliver optimized solutions',
      gradient: 'from-purple-500 to-indigo-600'
    },
    { 
      icon: Zap,
      title: 'Performance Optimization', 
      desc: 'Building fast, scalable applications that users love',
      gradient: 'from-indigo-500 to-violet-600'
    },
    { 
      icon: Users,
      title: 'Team Collaboration', 
      desc: 'Strong communication and project management skills',
      gradient: 'from-violet-600 to-purple-500'
    }
  ];

  const technologies = ['Python','ReactJS','NextJS','FastAPI', 'Node.js','ExpressJS', 'SQL', 'MongoDB','PostGreSQL', 'Docker','AWS'];

  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-violet-900 overflow-hidden">
      {/* Background Elements */}
      <GridOverlay />
      <CodePattern />
      
      {/* Static Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-indigo-500/25 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-400/20 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-violet-500/10 backdrop-blur-sm border border-violet-400/20 rounded-full text-violet-300 text-sm font-semibold mb-6">
            <BookOpen size={18} />
            <span className="tracking-wider uppercase">Get to Know Me</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with a mission to create digital solutions that make a difference
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column - About Text */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-8">
              
              {/* Title with Accent */}
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-2">Hi there! I'm Prasad</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
              </div>
              
              {/* Description */}
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p className="relative pl-4 border-l-2 border-violet-500/30">
                  Hi, I'm <span className="text-violet-400 font-semibold">Devi Naga Prasad</span>, a passionate Web developer and technology enthusiast currently pursuing my B.Tech at Mallareddy University. I enjoy building clean, modern, and user-friendly applications but my passion for continuous learning keeps me at the forefront of technology.
                </p>
                
                <p className="relative pl-4 border-l-2 border-purple-500/30">
                  I believe in the power of <span className="text-purple-400 font-semibold">clean code, beautiful design, and user-centered thinking</span>. Whether it's building a complex web application or designing an intuitive user interface, I approach every project with creativity and precision. My goal is to contribute to impactful projects, secure opportunities in product-based companies, and build innovative solutions using cutting-edge technologies.
                </p>
              </div>

              {/* Technologies Section */}
              <div className="pt-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Rocket size={20} className="text-violet-400" />
                  Technologies I work with:
                </h4>
                
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span 
                      key={tech} 
                      className="group relative px-4 py-2 bg-violet-500/10 backdrop-blur-sm border border-violet-400/20 text-violet-300 rounded-lg text-sm font-medium hover:bg-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="relative z-10">{tech}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Expertise Grid */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative bg-gray-800/30 backdrop-blur-sm border border-violet-500/20 p-6 rounded-2xl hover:bg-gray-800/50 hover:border-violet-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/10"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="font-semibold text-white mb-2 text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    
                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  </div>
                );
              })}
            </div>
          </div>

        </div>


        {/* Call to Action */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-xl text-gray-300">Interested in working together?</p>
            <a 
              href="./contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-violet-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-violet-500/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 z-10 text-white">
                Let's Connect
                <Rocket size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>

      </div>

      {/* Decorative Particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-violet-400/40 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </section>
  );
};

export default About;