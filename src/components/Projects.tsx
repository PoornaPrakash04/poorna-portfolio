import { ExternalLink, Github, Bot, CheckSquare, Monitor, Sparkles, Calendar } from 'lucide-react';
const Projects = () => {
  const projects = [{
    title: 'Task Flow Manager',
    description: 'A productivity tool built to streamline academic workflows with intuitive task management and progress tracking.',
    icon: CheckSquare,
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-purple-600 to-pink-600',
    status: 'Completed',
    year: '2025',
    githubUrl: 'https://github.com/PoornaPrakash04/TaskFlow-Manager',
    liveUrl: 'https://poorna-prakash04.github.io/TaskFlow-Manager/'
  }, {
    title: 'AI Chatbot for Campus FAQs',
    description: 'An interactive chatbot to automate event queries and provide instant support for campus-related questions.',
    icon: Bot,
    tags: ['Chatling', 'AI/ML', 'Chatbot'],
    color: 'from-teal-600 to-blue-600',
    status: 'Completed',
    year: '2025',
    githubUrl: 'https://github.com/PoornaPrakash04/AI-Chatbot-Campus',
    liveUrl: 'https://poorna-prakash04.github.io/AI-Chatbot-Campus/'
  }, {
    title: 'Netflix UI Clone',
    description: 'A responsive frontend replica of the Netflix interface showcasing modern web development skills.',
    icon: Monitor,
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-red-600 to-orange-600',
    status: 'Completed',
    year: '2025',
    githubUrl: 'https://github.com/PoornaPrakash04/Netflix-UI-Clone',
    liveUrl: 'https://poorna-prakash04.github.io/Netflix-UI-Clone/'
  }];
  
  return <section id="projects" className="py-20 bg-gray-800/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-red-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my latest work and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
          const IconComponent = project.icon;
          return <div key={index} className="group bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:-rotate-1" style={{
            animationDelay: `${index * 150}ms`
          }}>
                {/* Project Header */}
                <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Main Icon */}
                  <div className="absolute bottom-4 left-6">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <IconComponent size={28} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <IconComponent size={120} className="text-white" />
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold text-white/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border ${project.status === 'Completed' ? 'text-green-300 bg-green-500/20 border-green-400/30' : 'text-yellow-300 bg-yellow-500/20 border-yellow-400/30'}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Floating Sparkles */}
                  <div className="absolute top-8 left-1/2 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                    <Sparkles size={16} className="text-white animate-pulse" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 flex items-center">
                    {project.title}
                    <Sparkles className="w-4 h-4 ml-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="text-xs font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20 hover:bg-purple-400/20 transition-colors duration-300">
                        {tag}
                      </span>)}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 group/btn">
                      <Github size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Code
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-3 border border-gray-600 text-gray-400 font-semibold rounded-lg hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300 group/btn">
                      <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>;
        })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="https://github.com/PoornaPrakash04" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Github className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={20} />
            View All Projects
            <Sparkles className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>;
};
export default Projects;
