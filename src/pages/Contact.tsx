import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CodePattern = () => (
    <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 text-violet-400 text-sm font-mono animate-pulse">
        {'const connect = () => collaborate();'}
      </div>
      <div className="absolute top-1/3 right-1/4 text-purple-400 text-xs font-mono animate-pulse" style={{ animationDelay: '1s' }}>
        {'// Let\'s build together'}
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-violet-300 text-sm font-mono animate-pulse" style={{ animationDelay: '2s' }}>
        {'function create() { return success; }'}
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully! Thank you for your message. I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-violet-900 overflow-hidden">
      {/* Background Elements */}
      <GridOverlay />
      <CodePattern />
      
      {/* Static Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-indigo-500/25 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-400/20 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-violet-500/10 backdrop-blur-sm border border-violet-400/20 rounded-full text-violet-300 text-sm font-semibold mb-6">
            <MessageSquare size={18} />
            <span className="tracking-wider uppercase">Let's Connect</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-violet-500/20 p-8 rounded-2xl hover:bg-gray-800/40 hover:border-violet-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Send className="text-violet-400" size={24} />
                Send me a message
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-violet-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-violet-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-violet-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-violet-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300 resize-vertical"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-violet-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-violet-500/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2 z-10">
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            
            {/* Contact Info Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-violet-500/20 p-8 rounded-2xl hover:bg-gray-800/40 hover:border-violet-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Phone className="text-violet-400" size={22} />
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'bobbynaidu2005@gmail.com', href: 'mailto:bobbynaidu2005@gmail.com', gradient: 'from-violet-500 to-purple-600' },
                  { icon: Phone, label: 'Phone', value: '+91 7981768198', href: 'tel:+917981768198', gradient: 'from-purple-500 to-indigo-600' },
                  { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana', href: 'https://maps.google.com/?q=Hyderabad,Telangana', gradient: 'from-indigo-500 to-violet-600' }
                ].map(({ icon: Icon, label, value, href, gradient }, index) => (
                  <a
                  
                    key={index}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 bg-gray-700/30 backdrop-blur-sm border border-violet-500/10 rounded-xl hover:bg-gray-700/50 hover:border-violet-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm font-medium">{label}</div>
                      <div className="font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-violet-500/20 p-8 rounded-2xl hover:bg-gray-800/40 hover:border-violet-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Clock className="text-violet-400" size={22} />
                Quick Response Promise
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to reach out via phone or connect with me on LinkedIn for faster communication.
              </p>
              <div className="flex items-center gap-3 p-4 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-green-400 text-sm font-semibold">
                  Currently available for new projects
                </span>
              </div>
            </div>

            {/* Why Work With Me Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-violet-500/20 p-8 rounded-2xl hover:bg-gray-800/40 hover:border-violet-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-violet-400" size={22} />
                Why Work With Me?
              </h3>
              <ul className="space-y-3">
                {[
                  'Fast turnaround time',
                  'Clean, maintainable code',
                  'Regular communication',
                  'Post-launch support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

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

export default Contact;