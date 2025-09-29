import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Github, ExternalLink, Code2, Smartphone, Cpu, Filter } from 'lucide-react';
const Projects = () => {
    const [projectFilter, setProjectFilter] = useState('all');
    const [isVisible, setIsVisible] = useState(false);
    const [hovered, setHovered] = useState(null);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const CodePattern = () => (_jsxs("div", { className: "absolute inset-0 opacity-5 pointer-events-none overflow-hidden", children: [_jsx("div", { className: "absolute top-20 left-10 text-violet-400 text-sm font-mono animate-pulse", children: 'const projects = achievements.map(idea => reality);' }), _jsx("div", { className: "absolute top-1/3 right-1/4 text-purple-400 text-xs font-mono animate-pulse", style: { animationDelay: '1s' }, children: '// Turning visions into code' }), _jsx("div", { className: "absolute bottom-1/3 left-1/4 text-violet-300 text-sm font-mono animate-pulse", style: { animationDelay: '2s' }, children: 'function innovate() { return success; }' })] }));
    const GridOverlay = () => (_jsx("div", { className: "absolute inset-0 opacity-[0.02]", children: _jsx("div", { className: "absolute inset-0", style: {
                backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
                backgroundSize: '50px 50px'
            } }) }));
    const projects = [
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
    return (_jsxs("section", { className: "relative py-20 bg-gradient-to-br from-black via-gray-900 to-violet-900 overflow-hidden", children: [_jsx(GridOverlay, {}), _jsx(CodePattern, {}), _jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-600/30 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-indigo-500/25 rounded-full blur-3xl" }), _jsx("div", { className: "absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-400/20 rounded-full blur-2xl" }), _jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6", children: [_jsxs("div", { className: `text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`, children: [_jsxs("div", { className: "inline-flex items-center gap-3 px-6 py-3 bg-violet-500/10 backdrop-blur-sm border border-violet-400/20 rounded-full text-violet-300 text-sm font-semibold mb-6", children: [_jsx(Code2, { size: 18 }), _jsx("span", { className: "tracking-wider uppercase", children: "Portfolio Showcase" })] }), _jsxs("h2", { className: "text-5xl md:text-6xl font-bold mb-6", children: ["Featured ", _jsx("span", { className: "bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent", children: "Projects" })] }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed", children: "A showcase of my recent work in web development, mobile apps, and design" })] }), _jsx("div", { className: `flex justify-center gap-4 mb-16 flex-wrap transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`, children: [
                            { key: 'all', label: 'All Projects', icon: Filter },
                            { key: 'web', label: 'Web Development', icon: Code2 },
                            { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
                            { key: 'compiler', label: 'Compiler Based', icon: Cpu }
                        ].map(({ key, label, icon: Icon }) => (_jsxs("button", { onClick: () => setProjectFilter(key), className: `group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${projectFilter === key
                                ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25'
                                : 'bg-gray-800/50 backdrop-blur-sm border border-violet-500/20 text-gray-300 hover:bg-gray-800/70 hover:border-violet-500/40'}`, children: [_jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [_jsx(Icon, { size: 18 }), label] }), projectFilter !== key && (_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" }))] }, key))) }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredProjects.map((project, index) => (_jsxs("div", { className: `group bg-gray-800/30 border border-violet-500/20 rounded-2xl overflow-hidden hover:bg-gray-800/50 hover:border-violet-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`, style: {
                                transitionDelay: `${400 + index * 100}ms`,
                                transform: 'scale(1)',
                                ...(hovered === project.id && { transform: 'scale(1.02)' })
                            }, onMouseEnter: () => setHovered(project.id), onMouseLeave: () => setHovered(null), children: [_jsxs("div", { className: "h-52 bg-gray-800/50 overflow-hidden relative rounded-xl", children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 filter group-hover:brightness-110" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300", children: project.title }), _jsx("p", { className: "text-gray-400 text-sm mb-4 leading-relaxed", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: project.technologies.map((tech) => (_jsx("span", { className: "bg-violet-500/10 border border-violet-400/20 text-violet-300 px-3 py-1 rounded-lg text-xs font-medium", children: tech }, tech))) }), _jsxs("div", { className: "flex gap-3", children: [project.liveUrl && (_jsxs("a", { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer", className: "flex-1 bg-gradient-to-r text-white from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-center py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn transform hover:scale-105 shadow-lg hover:shadow-violet-500/25", style: { color: 'white' }, children: [_jsx(ExternalLink, { size: 16, className: "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" }), _jsx("span", { style: { color: 'white' }, children: "Live Demo" })] })), project.githubUrl && (_jsx("a", { href: project.githubUrl, target: "_blank", rel: "noopener noreferrer", className: "p-3 border-2 border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/10 rounded-xl transition-all duration-300 transform hover:scale-110 group/github", children: _jsx(Github, { size: 20, className: "text-gray-300 group-hover/github:text-violet-400 transition-colors duration-300" }) }))] })] }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" })] }, project.id))) }), filteredProjects.length === 0 && (_jsxs("div", { className: "text-center py-20", children: [_jsx("div", { className: "w-24 h-24 bg-violet-500/10 backdrop-blur-sm border border-violet-400/20 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx(Code2, { size: 40, className: "text-violet-400" }) }), _jsx("p", { className: "text-xl text-gray-400", children: "No projects found in this category" })] }))] }), [...Array(12)].map((_, i) => (_jsx("div", { className: "absolute w-1 h-1 bg-violet-400/40 rounded-full animate-pulse", style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                } }, i)))] }));
};
export default Projects;
