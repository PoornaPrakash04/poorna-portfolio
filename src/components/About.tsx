
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  const education = [
    {
      period: '2023–2027',
      degree: 'B.Tech in Information Technology',
      institution: 'LBSITW',
      icon: GraduationCap,
    },
    {
      period: '2020–2022',
      degree: 'Higher Secondary',
      institution: 'GMBHSS Attingal',
      icon: GraduationCap,
    },
    {
      period: '2020',
      degree: '10th Grade',
      institution: 'SJCSIEMHSS',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MapPin className="mr-3 text-purple-400" size={24} />
                My Story
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Poorna is a curious-minded B.Tech Information Technology student at LBSITW, 
                passionate about exploring the tech behind the screen and solving real-world 
                problems through code. With a focus on data engineering, Java, and Python, 
                and a keen interest in AI/ML, Poorna builds impactful tools and web apps.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">
                What Drives Me
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Exploring cutting-edge technologies and their real-world applications
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Building solutions that make a positive impact on communities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Leading teams and fostering collaborative innovation
                </li>
              </ul>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Calendar className="mr-3 text-teal-400" size={24} />
              Education Timeline
            </h3>
            
            <div className="space-y-6">
              {education.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index < education.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-teal-500"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      
                      <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm flex-1 hover:border-purple-500/50 transition-colors duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                            {item.period}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1">{item.degree}</h4>
                        <p className="text-gray-400">{item.institution}</p>
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
