
import { Monitor, Code, Palette, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Passionate about creating clean, responsive user interfaces that provide exceptional user experiences.',
      icon: Monitor,
      status: 'Exploring',
      features: ['Responsive Design', 'Modern UI/UX', 'Cross-browser Compatibility']
    },
    {
      title: 'Frontend Development',
      description: 'Building interactive and dynamic web applications using modern frameworks and best practices.',
      icon: Code,
      status: 'Learning',
      features: ['React Applications', 'JavaScript/TypeScript', 'Component Architecture']
    },
    {
      title: 'Creative Solutions',
      description: 'Combining technical skills with creative thinking to solve complex problems innovatively.',
      icon: Palette,
      status: 'Developing',
      features: ['Problem Solving', 'Creative Design', 'User-Centric Approach']
    },
    {
      title: 'Emerging Technologies',
      description: 'Exploring AI/ML applications and data engineering to build next-generation solutions.',
      icon: Zap,
      status: 'Researching',
      features: ['AI/ML Integration', 'Data Processing', 'Automation Solutions']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I'm <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Exploring</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Currently developing expertise in various domains of technology and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/20">
                    {service.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white">Focus Areas:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gray-900/50 border border-gray-700/50 rounded-full backdrop-blur-sm">
            <Zap size={20} className="text-yellow-400 mr-2" />
            <span className="text-gray-300">
              Always eager to learn and take on new challenges!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
