
import { Monitor, Code, Palette, Zap, Sparkles, Clock, Target } from 'lucide-react';
const Services = () => {
  const services = [{
    title: 'Web Design',
    description: 'Passionate about creating clean, responsive user interfaces that provide exceptional user experiences.',
    icon: Monitor,
    status: 'Exploring',
    features: ['Responsive Design', 'Modern UI/UX', 'Cross-browser Compatibility'],
    color: 'from-blue-500 to-cyan-500'
  }, {
    title: 'Frontend Development',
    description: 'Building interactive and dynamic web applications using modern frameworks and best practices.',
    icon: Code,
    status: 'Learning',
    features: ['React Applications', 'JavaScript/TypeScript', 'Component Architecture'],
    color: 'from-purple-500 to-pink-500'
  }, {
    title: 'Creative Solutions',
    description: 'Combining technical skills with creative thinking to solve complex problems innovatively.',
    icon: Palette,
    status: 'Developing',
    features: ['Problem Solving', 'Creative Design', 'User-Centric Approach'],
    color: 'from-orange-500 to-red-500'
  }, {
    title: 'Emerging Technologies',
    description: 'Exploring AI/ML applications and data engineering to build next-generation solutions.',
    icon: Zap,
    status: 'Researching',
    features: ['AI/ML Integration', 'Data Processing', 'Automation Solutions'],
    color: 'from-green-500 to-teal-500'
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Exploring':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Learning':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'Developing':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'Researching':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };
  return <section id="services" className="py-20 bg-gray-800/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-6">
            
            <span className="text-sm text-gray-300">Current Focus</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">Exploring</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Currently developing expertise in various domains of technology and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <div key={index} className="group bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105 relative overflow-hidden" style={{
            animationDelay: `${index * 150}ms`
          }}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 flex items-center">
                        {service.title}
                        <Sparkles className="w-4 h-4 ml-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h3>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-teal-400" />
                    Focus Areas:
                  </h4>
                  {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center group/feature">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full mr-3 group-hover/feature:scale-150 transition-transform duration-300"></div>
                      <span className="text-sm text-gray-400 group-hover/feature:text-gray-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>)}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>;
        })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="group inline-flex items-center px-8 py-4 bg-gray-900/50 border border-gray-700/50 rounded-full backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
            <Zap size={24} className="text-yellow-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
              Always eager to learn and take on new challenges!
            </span>
            <Sparkles className="w-5 h-5 ml-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>;
};
export default Services;
