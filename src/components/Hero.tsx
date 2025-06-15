
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Code, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-gray-900 to-teal-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-teal-900/20"></div>
      
      {/* Animated background elements with improved positioning */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating icons */}
        <div className="absolute top-20 right-20 text-purple-500/20 animate-bounce delay-300">
          <Code size={32} />
        </div>
        <div className="absolute bottom-32 left-20 text-teal-500/20 animate-bounce delay-700">
          <Database size={28} />
        </div>
        <div className="absolute top-1/3 right-1/3 text-blue-500/20 animate-bounce delay-1000">
          <Sparkles size={24} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/30 via-teal-500/30 to-blue-500/30 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main profile container - removed rotation */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-teal-500 to-blue-500 p-1 group-hover:animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  {/* Profile image */}
                  <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden border border-gray-600/30">
                    <img 
                      src="https://i.postimg.cc/L69tWhRN/poorna-blue-photo.jpg" 
                      alt="Poorna Prakash" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-8 left-8 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-12 right-16 w-1 h-1 bg-teal-400 rounded-full animate-ping delay-500"></div>
                  <div className="absolute top-16 right-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-1000"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-teal-500/10 border border-purple-500/20 rounded-full animate-fade-in">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </div>
            
            {/* Main heading with enhanced typography */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold animate-fade-in leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">Poorna</span>
                <br />
                <span className="text-white">
                  Prakash
                </span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start space-x-2 animate-fade-in delay-200">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-16"></div>
                <p className="text-xl md:text-2xl text-gray-300 font-medium">
                  B.Tech IT Student | Tech Explorer
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent flex-1 max-w-16"></div>
              </div>
            </div>
            
            {/* Enhanced tagline */}
            <p className="text-lg md:text-xl text-gray-400 animate-fade-in delay-300 max-w-md mx-auto lg:mx-0">
              Driven by <span className="text-purple-400 font-semibold">code</span>, powered by <span className="text-teal-400 font-semibold">curiosity</span>
            </p>
            
            {/* Enhanced social links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 animate-fade-in delay-500">
              {[
                { href: "https://github.com/PoornaPrakash04", icon: Github, color: "hover:text-purple-400" },
                { href: "https://linkedin.com/in/poorna-prakash", icon: Linkedin, color: "hover:text-teal-400" },
                { href: "mailto:poornaprakash0804@gmail.com", icon: Mail, color: "hover:text-blue-400" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`group relative p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25`}
                >
                  <social.icon size={24} />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-700">
              <a
                href="#about"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore My Journey
                  <ChevronDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-purple-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
