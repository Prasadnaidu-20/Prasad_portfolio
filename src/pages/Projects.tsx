import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code2, Smartphone, Cpu, Filter } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'compiler';
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const [projectFilter, setProjectFilter] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CodePattern = () => (
    <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 text-violet-400 text-sm font-mono animate-pulse">
        {'const projects = achievements.map(idea => reality);'}
      </div>
      <div className="absolute top-1/3 right-1/4 text-purple-400 text-xs font-mono animate-pulse" style={{ animationDelay: '1s' }}>
        {'// Turning visions into code'}
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-violet-300 text-sm font-mono animate-pulse" style={{ animationDelay: '2s' }}>
        {'function innovate() { return success; }'}
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

  const projects: Project[] = [
    {
      id: 'multitenant-saas',
      title: 'Multi-Tenant SaaS Application',
      description: 'A comprehensive SaaS platform supporting multiple tenants with isolated data, user management, billing system, and scalable architecture.',
      image: 'tenant.png',
      technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Docker Compose'],
      category: 'web',
      liveUrl: 'https://multi-tenant-saas-app-neon.vercel.app/',
      githubUrl: 'https://github.com/Prasadnaidu-20/Multi-tenant-Saas-app'
    },
    {
      id: 'buyer-lead-app',
      title: 'Buyer Lead Management App',
      description: 'A streamlined platform for managing buyer leads with advanced filtering, CRM integration, and automated lead scoring system.',
      image: 'lead-app.png',
      technologies: ['Next.js (App Router)', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zod'],
      category: 'web',
      liveUrl: 'https://buyer-lead-app-pkoe.vercel.app/',
      githubUrl: 'https://github.com/Prasadnaidu-20/Buyer-lead-app'
    },
    {
      id: 'task-management',
      title: 'Task Management App',
      description: 'A powerful task management application with real-time collaboration, project tracking, deadline management, and team productivity features.',
      image: 'task-management.png',
      technologies: ['React', 'FastAPI', 'MongoDB', 'RESTful API', 'Real-time Updates'],
      category: 'web',
      liveUrl: 'https://github.com/Prasadnaidu-20/task-management',
      githubUrl: 'https://github.com/Prasadnaidu-20/task-management'
    },
    
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      description: 'A modern, full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory management, secure payments, and responsive design.',
      image: 'cart.png',
      technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Node.js'],
      category: 'web',
      liveUrl: 'https://bobcartt.netlify.app/',
      githubUrl: 'https://github.com/Prasadnaidu-20/Ecommerce-store.git'
    },
    {
      id: 'movie-hub',
      title: 'Movie-Hub',
      description: 'An intuitive mobile-first movie discovery application with advanced search functionality, user reviews, and real-time synchronization with movie databases.',
      image: 'movieHub.png',
      technologies: ['HTML', 'JavaScript', 'Axios'],
      category: 'mobile',
      liveUrl: 'https://movie-wood.netlify.app/',
      githubUrl: 'https://github.com/Prasadnaidu-20/moviehub'
    },
    {
      id: 'chess-game',
      title: 'Smart Chess Game',
      description: 'A clean, testable Chess game implemented in Java with a strong focus on Data Structures & Algorithms (DSA).',
      image: 'chess.png',
      technologies: ['Java', 'DSA'],
      category: 'compiler',
      liveUrl: 'https://github.com/Prasadnaidu-20/smart-chess-game',
      githubUrl: 'https://github.com/Prasadnaidu-20/smart-chess-game'
    }
  ];

  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter(project => project.category === projectFilter);


  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-violet-900 overflow-hidden">
      {/* Background Elements */}
      <GridOverlay />
      <CodePattern />
      
      {/* Static Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-indigo-500/25 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-400/20 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-violet-500/10 backdrop-blur-sm border border-violet-400/20 rounded-full text-violet-300 text-sm font-semibold mb-6">
            <Code2 size={18} />
            <span className="tracking-wider uppercase">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work in web development, mobile apps, and design
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex justify-center gap-4 mb-16 flex-wrap transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {[
            { key: 'all', label: 'All Projects', icon: Filter },
            { key: 'web', label: 'Web Development', icon: Code2 },
            { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
            { key: 'compiler', label: 'Compiler Based', icon: Cpu }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setProjectFilter(key)}
              className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                projectFilter === key
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-gray-800/50 backdrop-blur-sm border border-violet-500/20 text-gray-300 hover:bg-gray-800/70 hover:border-violet-500/40'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={18} />
                {label}
              </span>
              {projectFilter !== key && (
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-800/30 border border-violet-500/20 rounded-2xl overflow-hidden hover:bg-gray-800/50 hover:border-violet-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ 
                transitionDelay: `${400 + index * 100}ms`,
                transform: 'scale(1)',
                ...(hovered === project.id && { transform: 'scale(1.02)' })
              }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Project Image */}
              <div className="h-52 bg-gray-800/50 overflow-hidden relative rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 filter group-hover:brightness-110"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-violet-500/10 border border-violet-400/20 text-violet-300 px-3 py-1 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r text-white from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-center py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn transform hover:scale-105 shadow-lg hover:shadow-violet-500/25"
                      style={{ color: 'white' }}
                    >
                      <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      <span style={{ color: 'white' }}>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border-2 border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/10 rounded-xl transition-all duration-300 transform hover:scale-110 group/github"
                    >
                      <Github size={20} className="text-gray-300 group-hover/github:text-violet-400 transition-colors duration-300" />
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-violet-500/10 backdrop-blur-sm border border-violet-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code2 size={40} className="text-violet-400" />
            </div>
            <p className="text-xl text-gray-400">No projects found in this category</p>
          </div>
        )}

      </div>

      {/* Decorative Particles */}
      {[...Array(12)].map((_, i) => (
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

export default Projects;