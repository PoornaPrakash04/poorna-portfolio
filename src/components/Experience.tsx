import { Award, Users, Code, Calendar, MapPin, Sparkles } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Vice Chairperson',
      organization: 'IEEE SB LBSITW',
      period: '2025–Present',
      icon: Award,
      description: 'Leading strategic initiatives and fostering technical excellence within the IEEE Student Branch.',
      highlights: ['Strategic Leadership', 'Event Management', 'Team Coordination'],
      color: 'from-yellow-500 to-orange-500',
      status: 'Active'
    },
    {
      role: 'Operations Lead',
      organization: 'GDG LBSITW',
      period: '2024–Present',
      icon: Users,
      description: 'Coordinating operations and driving community engagement for Google Developer Groups.',
      highlights: ['Community Building', 'Operations Management', 'Developer Relations'],
      color: 'from-green-500 to-emerald-500',
      status: 'Active'
    },
    {
      role: 'Joint Secretary',
      organization: 'IEEE CS LBSITW',
      period: '2024–2025',
      icon: Code,
      description: 'Supporting the Computer Society chapter with technical events and skill development programs.',
      highlights: ['Technical Events', 'Workshop Coordination', 'Skill Development'],
      color: 'from-blue-500 to-cyan-500',
      status: 'Active'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-green-500/10 border border-yellow-500/20 rounded-full mb-6">
            <Award className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm text-gray-300">Leadership & Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 mx-auto mb-6"></div>
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
                className="group bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-14 h-14 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {exp.organization}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    exp.status === 'Active' 
                      ? 'text-green-400 bg-green-400/10 border border-green-400/20' 
                      : 'text-gray-400 bg-gray-400/10 border border-gray-400/20'
                  }`}>
                    {exp.status}
                  </span>
                </div>

                {/* Period */}
                <div className="flex items-center mb-4">
                  <Calendar size={16} className="text-teal-400 mr-2" />
                  <span className="text-sm font-semibold text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/20">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                    Key Highlights:
                  </h4>
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center group/highlight">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full mr-3 group-hover/highlight:scale-150 transition-transform duration-300"></div>
                      <span className="text-sm text-gray-400 group-hover/highlight:text-gray-300 transition-colors duration-300">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
