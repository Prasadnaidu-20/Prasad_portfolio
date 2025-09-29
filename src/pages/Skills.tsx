import React, { useState, useEffect } from 'react';
import { Code2, Database, Wrench, Award, FileText, Sparkles, TrendingUp } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  gradient: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setAnimateSkills(true), 500);
  }, []);

  const CodePattern = () => (
    <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 text-violet-400 text-sm font-mono animate-pulse">
        {'const expertise = skills.map(s => mastery);'}
      </div>
      <div className="absolute top-1/3 right-1/4 text-purple-400 text-xs font-mono animate-pulse" style={{ animationDelay: '1s' }}>
        {'// Constantly evolving'}
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

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: Code2,
      gradient: 'from-violet-500 to-purple-600',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'CSS', level: 95 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      gradient: 'from-purple-500 to-indigo-600',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 95 },
        { name: 'PostgreSQL', level: 80 }
      ]
    },
    {
      title: 'Frontend Frameworks',
      icon: Wrench,
      gradient: 'from-indigo-500 to-violet-600',
      skills: [
        { name: 'ReactJS', level: 92 },
        { name: 'NextJS', level: 85 },
        { name: 'TailwindCSS', level: 95 },
      ]
    },

    {
      title: 'Backend Frameworks',
      icon: Wrench,
      gradient: 'from-indigo-500 to-violet-600',
      skills: [
        { name: 'FastAPI', level: 92 },
        { name: 'NodeJS', level: 85 },
        { name: 'ExpressJS', level: 88 },
      ]
    },
    {
      title: 'DevOps Tools',
      icon: Wrench,
      gradient: 'from-indigo-500 to-violet-600',
      skills: [
        { name: 'Docker', level: 60 },
        { name: 'Kubernetes', level: 55},
        { name: 'AWS', level: 70 },
      ]
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-violet-900 overflow-hidden">
      {/* Background Elements */}
      <GridOverlay />
      <CodePattern />
      
      {/* Static Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-indigo-500/25 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-400/20 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-violet-500/10 backdrop-blur-sm border border-violet-400/20 rounded-full text-violet-300 text-sm font-semibold mb-6">
            <Sparkles size={18} />
            <span className="tracking-wider uppercase">Expertise & Proficiency</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>

          <a 
            href="https://flowcv.com/resume/rapl30a19os9"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-violet-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-violet-500/30"
            style = {{color:'white'}}
          >
            <FileText size={20} />
            View Resume
            <div className="absolute inset-0 bg-gradient-to-r text-white from-violet-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </a>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className={`group bg-gray-800/30 backdrop-blur-sm border border-violet-500/20 p-8 rounded-2xl hover:bg-gray-800/50 hover:border-violet-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-gray-200">{skill.name}</span>
                        <span className={`text-sm font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Premium Progress Bar */}
                      <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-600/30">
                        {/* Animated Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
                        
                        {/* Progress Fill */}
                        <div 
                          className={`relative h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                          style={{ 
                            width: animateSkills ? `${skill.level}%` : '0%',
                            transitionDelay: `${500 + skillIndex * 100}ms`
                          }}
                        >
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 animate-shimmer" />
                          
                          {/* End Glow */}
                          <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/40 rounded-full blur-sm" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* Additional Expertise */}
        <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <TrendingUp className="text-violet-400" size={28} />
              Additional Expertise
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              'Data Structures & Algorithms (Java/Python)',
              'DBMS',
              'API Integration',
              'Problem-Solving',
              'Mentoring',
              'Project Management'
            ].map((skill, index) => (
              <span 
                key={index} 
                className="group relative px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-violet-500/20 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-800/70 hover:border-violet-500/40 hover:text-violet-400 transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{skill}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Award className="text-violet-400" size={28} />
              Certifications & Achievements
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Frontend certified developer', org: 'OneRoadMap', gradient: 'from-violet-500 to-purple-600' },
              { title: 'Deloitte Australia – Technology Virtual Experience', org: 'Forage | Remote | [April, 2025]', gradient: 'from-purple-500 to-indigo-600' },
              { title: 'AI tools certified workshop', org: 'AI Preneur', gradient: 'from-indigo-500 to-violet-600' }
            ].map((cert, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-violet-500/20 p-6 rounded-2xl text-center hover:bg-gray-800/50 hover:border-violet-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/10"
              >
                {/* Award Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Award size={28} className="text-white" />
                </div>

                <h4 className="font-bold text-white mb-2 text-lg group-hover:text-violet-400 transition-colors duration-300">
                  {cert.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.org}</p>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Decorative Particles */}
      {[...Array(15)].map((_, i) => (
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

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;