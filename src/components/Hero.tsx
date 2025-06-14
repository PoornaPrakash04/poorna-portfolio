
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-teal-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-teal-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl font-bold text-purple-400">
                    PP
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-teal-500/30 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 md:order-2 text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="text-white">Poorna</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Prakash
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in delay-200">
              B.Tech IT Student | Tech Explorer
            </p>
            
            <p className="text-lg text-gray-400 mb-8 animate-fade-in delay-300">
              Driven by code, powered by curiosity
            </p>
            
            <div className="flex space-x-6 mb-8 animate-fade-in delay-500">
              <a
                href="https://github.com/PoornaPrakash04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/poorna-prakash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:poornaprakash0804@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Mail size={28} />
              </a>
            </div>
            
            <a
              href="#about"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in delay-700"
            >
              Explore My Journey
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
