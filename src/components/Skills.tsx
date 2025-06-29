
import { Code, Database, Palette, Users, Brain, Zap, Star, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skillCategories = [{
    title: 'Programming Languages',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [{
      name: 'Python',
      level: 'Intermediate',
      color: 'from-yellow-400 to-yellow-600',
      trend: 'up'
    }, {
      name: 'Java',
      level: 'Beginner',
      color: 'from-red-400 to-red-600',
      trend: 'up'
    }, {
      name: 'C',
      level: 'Intermediate',
      color: 'from-blue-400 to-blue-600',
      trend: 'stable'
    }]
  }, {
    title: 'Tools & Technologies',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [{
      name: 'DBMS',
      level: 'Intermediate',
      color: 'from-green-400 to-green-600',
      trend: 'up'
    }, {
      name: 'Git/GitHub',
      level: 'Advanced',
      color: 'from-purple-400 to-purple-600',
      trend: 'up'
    }, {
      name: 'Web Development',
      level: 'Intermediate',
      color: 'from-teal-400 to-teal-600',
      trend: 'up'
    }]
  }, {
    title: 'Design & Creative',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    skills: [{
      name: 'Canva',
      level: 'Intermediate',
      color: 'from-pink-400 to-pink-600',
      trend: 'up'
    }, {
      name: 'UI/UX Design',
      level: 'Beginner',
      color: 'from-indigo-400 to-indigo-600',
      trend: 'up'
    }]
  }, {
    title: 'Soft Skills',
    icon: Users,
    color: 'from-orange-500 to-amber-500',
    skills: [{
      name: 'Team Leadership',
      level: 'Advanced',
      color: 'from-orange-400 to-orange-600',
      trend: 'up'
    }, {
      name: 'Communication',
      level: 'Advanced',
      color: 'from-cyan-400 to-cyan-600',
      trend: 'stable'
    }, {
      name: 'Problem Solving',
      level: 'Advanced',
      color: 'from-lime-400 to-lime-600',
      trend: 'up'
    }]
  }];
  
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Intermediate':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Advanced':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const interests = [{
    name: 'Artificial Intelligence',
    icon: Brain,
    color: 'from-purple-500 to-purple-700'
  }, {
    name: 'Machine Learning',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
  }, {
    name: 'Data Engineering',
    icon: Database,
    color: 'from-green-500 to-teal-500'
  }, {
    name: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-indigo-500'
  }];

  return (
    <section id="skills" className="py-20 bg-gray-900/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="group bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105" style={{
                animationDelay: `${categoryIndex * 100}ms`
              }}>
                <div className="flex items-center mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center group/skill">
                      <span className="text-gray-300 font-medium flex items-center group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                        {skill.trend === 'up' && <TrendingUp className="w-4 h-4 ml-2 text-green-400" />}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                        <Star className="w-4 h-4 text-yellow-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Areas of Interest */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Areas of <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">Interest</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring emerging technologies and innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div key={index} className="group bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:-rotate-2 text-center relative" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <div className={`w-16 h-16 bg-gradient-to-br ${interest.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <IconComponent size={28} className="text-white" />
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {interest.name}
                </h4>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
