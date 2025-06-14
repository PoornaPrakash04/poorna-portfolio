
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'poornaprakash0804@gmail.com',
      href: 'mailto:poornaprakash0804@gmail.com',
      color: 'text-purple-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8281457673',
      href: 'tel:+918281457673',
      color: 'text-teal-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/poorna-prakash',
      href: 'https://linkedin.com/in/poorna-prakash',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/PoornaPrakash04',
      href: 'https://github.com/PoornaPrakash04',
      color: 'text-gray-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Want to reach out about a project, collaboration or just want to say friendly hello?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MapPin className="mr-3 text-purple-400" size={24} />
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, share ideas, or collaborate on interesting projects. 
                Feel free to reach out through any of these channels!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className={`font-semibold ${info.color} group-hover:text-white transition-colors duration-300`}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-white mb-3">Quick Response Time</h4>
              <p className="text-gray-400">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to reach out via phone call.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project, idea, or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
