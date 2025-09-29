import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Prasadnaidu-20', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/devi-naga-prasad-akkisetti-50725229b/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:bobbynaidu2005@gmail.com', label: 'Email' }
  ];

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
      <div className="absolute bottom-20 left-20 text-purple-300 text-xs font-mono animate-pulse" style={{ animationDelay: '0.5s' }}>
        {'<Developer fullStack={true} creative={true} />'}
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-violet-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <GridOverlay />
        <CodePattern />
        
        {/* Static Background Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-purple-400/15 to-violet-500/25 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-400/20 rounded-full blur-3xl" />
      </div>

      {/* Premium Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-violet-500/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/"
              className="relative group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-violet-500/25 transition-all duration-300">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Prasad
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-medium transition-all duration-300 group ${
                    location.pathname === item.path 
                      ? 'text-violet-400' 
                      : 'text-gray-300 hover:text-violet-400'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link 
                to="/contact"
                className="ml-4 relative group px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-violet-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
                style={{ color: 'white' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <span className="relative" style={{ color: 'white' }}>Hire Me</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-violet-500/20 shadow-2xl">
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 font-medium transition-all duration-300 relative ${
                      location.pathname === item.path 
                        ? 'text-violet-400' 
                        : 'text-gray-300 hover:text-violet-400'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 transition-all duration-300 ${
                      location.pathname === item.path 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                ))}
                <Link 
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full mt-6 px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold text-center shadow-lg transition-all duration-300"
                  style={{ color: 'white' }}
                >
                  <span style={{ color: 'white' }}>Hire Me</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {children}
      </main>

      {/* Premium Footer */}
      <footer className="relative z-10 mt-20 border-t border-violet-500/20 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    Devi Naga Prasad
                  </span>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                  Crafting exceptional digital experiences through innovative web solutions. 
                  Passionate about turning ideas into reality with clean, scalable code.
                </p>
                
                {/* Status Badge */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Available for Projects</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                    
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-violet-500/20 text-gray-400 hover:text-white hover:bg-gray-700/50 hover:border-violet-500/40 transform hover:-translate-y-1 transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon size={20} />
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Navigation</h4>
                <div className="space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block text-gray-400 hover:text-violet-400 py-2 transition-colors duration-300 group"
                    >
                      <span className="relative">
                        {item.label}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-violet-400 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Contact</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="p-2 bg-gray-800/50 rounded-lg border border-violet-500/20">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:bobbynaidu2005@gmail.com" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                        bobbynaidu2005@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="p-2 bg-gray-800/50 rounded-lg border border-violet-500/20">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href="tel:+917981768198" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                        +91 7981768198
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="p-2 bg-gray-800/50 rounded-lg border border-violet-500/20">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-300">Hyderabad, Telangana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-violet-500/20 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
                <p className="text-center md:text-left">
                  © {new Date().getFullYear()} Devi Naga Prasad. Crafted with passion and precision.
                </p>
                <div className="flex items-center gap-2">
                  <span>Made with</span>
                  <span className="text-red-400 animate-pulse">❤️</span>
                  <span>and lots of</span>
                  <span className="text-amber-400">☕</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-xs text-gray-500">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                  Built with React & TypeScript
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Deployed on Vercel
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Background Decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;