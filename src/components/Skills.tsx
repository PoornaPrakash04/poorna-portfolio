
import { Code, Database, Palette, Users, Brain, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 85, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Java', level: 80, color: 'from-red-400 to-red-600' },
        { name: 'C', level: 75, color: 'from-blue-400 to-blue-600' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Database,
      skills: [
        { name: 'DBMS', level: 75, color: 'from-green-400 to-green-600' },
        { name: 'Git/GitHub', level: 80, color: 'from-purple-400 to-purple-600' },
        { name: 'Web Development', level: 70, color: 'from-teal-400 to-teal-600' },
      ]
    },
    {
      title: 'Design & Creative',
      icon: Palette,
      skills: [
        { name: 'Canva', level: 65, color: 'from-pink-400 to-pink-600' },
        { name: 'UI/UX Design', level: 60, color: 'from-indigo-400 to-indigo-600' },
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Team Leadership', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'Communication', level: 85, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Problem Solving', level: 80, color: 'from-lime-400 to-lime-600' },
      ]
    }
  ];

  const interests = [
    { name: 'Artificial Intelligence', icon: Brain },
    { name: 'Machine Learning', icon: Zap },
    { name: 'Data Engineering', icon: Database },
    { name: 'Web Development', icon: Code },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Areas of Interest */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-8">Areas of Interest</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {interest.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
