
import { Calendar, MapPin, GraduationCap, Sparkles } from 'lucide-react';

const About = () => {
  const education = [
    {
      period: '2023–2027',
      degree: 'B.Tech in Information Technology',
      institution: 'LBSITW',
      icon: GraduationCap,
      status: 'Current',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-teal-500/10 border border-purple-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm text-gray-300">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="group bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  My Story
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Poorna is a curious-minded B.Tech Information Technology student at LBSITW, 
                passionate about exploring the tech behind the screen and solving real-world 
                problems through code. With a focus on data engineering, Java, and Python, 
                and a keen interest in AI/ML, Poorna builds impactful tools and web apps.
              </p>
            </div>

            <div className="group bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-teal-400 transition-colors duration-300">
                What Drives Me
              </h3>
              <div className="space-y-4">
                {[
                  'Exploring cutting-edge technologies and their real-world applications',
                  'Building solutions that make a positive impact on communities',
                  'Leading teams and fostering collaborative innovation'
                ].map((item, index) => (
                  <div key={index} className="flex items-start group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full mt-3 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education Timeline</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative group">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent size={20} className="text-white" />
                      </div>
                      
                      <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm flex-1 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                            {item.period}
                          </span>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            item.status === 'Current' 
                              ? 'text-green-400 bg-green-400/10 border border-green-400/20' 
                              : 'text-gray-400 bg-gray-400/10 border border-gray-400/20'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                          {item.degree}
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
