
import { Award, Users, Code, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Vice Chairperson',
      organization: 'IEEE SB LBSITW',
      period: '2024–Present',
      icon: Award,
      description: 'Leading strategic initiatives and fostering technical excellence within the IEEE Student Branch.',
      highlights: ['Strategic Leadership', 'Event Management', 'Team Coordination']
    },
    {
      role: 'Operations Lead',
      organization: 'GDG LBSITW',
      period: '2024–Present',
      icon: Users,
      description: 'Coordinating operations and driving community engagement for Google Developer Groups.',
      highlights: ['Community Building', 'Operations Management', 'Developer Relations']
    },
    {
      role: 'Joint Secretary',
      organization: 'IEEE CS LBSITW',
      period: '2024–2025',
      icon: Code,
      description: 'Supporting the Computer Society chapter with technical events and skill development programs.',
      highlights: ['Technical Events', 'Workshop Coordination', 'Skill Development']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leadership roles and volunteer experiences that shaped my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.organization}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <Calendar size={16} className="text-teal-400 mr-2" />
                  <span className="text-sm font-semibold text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Highlights:</h4>
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                      <span className="text-sm text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
