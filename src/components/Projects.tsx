
import { ExternalLink, Github, Bot, CheckSquare, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Task Flow Manager',
      description: 'A productivity tool built to streamline academic workflows with intuitive task management and progress tracking.',
      icon: CheckSquare,
      tags: ['Python', 'React', 'Database'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'AI Chatbot for Campus FAQs',
      description: 'An interactive chatbot to automate event queries and provide instant support for campus-related questions.',
      icon: Bot,
      tags: ['Python', 'AI/ML', 'NLP'],
      color: 'from-teal-600 to-blue-600',
    },
    {
      title: 'Netflix UI Clone',
      description: 'A responsive frontend replica of the Netflix interface showcasing modern web development skills.',
      icon: Monitor,
      tags: ['React', 'CSS', 'Responsive Design'],
      color: 'from-red-600 to-orange-600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my latest work and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <IconComponent size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-10">
                    <IconComponent size={80} className="text-white" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                      <Github size={16} className="mr-2" />
                      Code
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-gray-600 text-gray-400 font-semibold rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/PoornaPrakash04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Github className="mr-2" size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
