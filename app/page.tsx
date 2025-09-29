import Image from 'next/image';
import { Github, Mail, ExternalLink, ArrowUpRight, Download } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium">Jignesh D Maru</div>
            <div className="flex items-center gap-6">
              <a href="#work" className="text-sm hover:text-gray-600 transition-colors">Work</a>
              <a href="#about" className="text-sm hover:text-gray-600 transition-colors">About</a>
              <a href="#contact" className="text-sm hover:text-gray-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
              Frontend Developer
              <span className="block text-gray-500">& Creative Coder</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl">
              I create clean and responsive web interfaces using modern technologies. 
              Focused on user experience and performance optimization.
            </p>
            <div className="flex items-center gap-6">
              <a href="#contact" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2">
                Get in touch
                <ArrowUpRight size={16} />
              </a>
              <a href="#work" className="text-gray-600 hover:text-black transition-colors">View my work</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-4">Selected Work</h2>
            <p className="text-gray-600">A collection of projects that showcase my skills and experience.</p>
          </div>
          
          <div className="space-y-24">
            {/* Project 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl font-light text-blue-600">JS</div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-light mb-4">Janseva Kendra</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Developed a responsive service hub for public assistance with dynamic content management, 
                  user interaction features, and optimized frontend/backend integration using React.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">JavaScript</span>
                </div>
                <div className="text-sm text-gray-500">Private Project</div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl font-light text-green-600">SM</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">Santmegh</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Built a full-stack student management system with CRUD operations, real-time updates, 
                  and scalable architecture, ensuring smooth data handling and cross-device compatibility.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Supabase</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">TypeScript</span>
                </div>
                <div className="text-sm text-gray-500">Live Project</div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl font-light text-purple-600">TH</div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-light mb-4">ToolHub</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Created an all-in-one productivity dashboard combining media and developer tools, 
                  featuring modular UI components, performance optimization, and seamless frontend-backend interaction.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">API Integration</span>
                </div>
                <div className="text-sm text-gray-500">Live Project</div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl font-light text-orange-600">FC</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">FontConvo</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Developed an interactive key mapping tool with dynamic UI feedback, real-time updates, 
                  and cross-platform compatibility to enhance typing efficiency and customization.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">CSS</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">HTML</span>
                </div>
                <div className="text-sm text-gray-500">Live Project</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8">About Me</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  I'm a frontend developer with a passion for creating clean, responsive web interfaces. 
                  My experience spans both frontend and backend development, allowing me to build 
                  comprehensive web solutions.
                </p>
                <p>
                  I've worked on various projects ranging from educational platforms to productivity tools, 
                  always focusing on user experience and performance optimization.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-6">Skills & Technologies</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Backend & Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Supabase', 'API Development'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AI-assisted coding', 'Git', 'Responsive Design'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-16">Experience</h2>
          
          <div className="space-y-12">
            <div className="border-l-2 border-gray-100 pl-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-light">Frontend & Backend Developer</h3>
                <span className="text-gray-500 text-sm">Santmegh Computer Education</span>
              </div>
              <ul className="text-gray-600 space-y-2 leading-relaxed">
                <li>• Designed, developed, and maintained websites for the institute</li>
                <li>• Created responsive, user-friendly interfaces using modern web technologies</li>
                <li>• Developed backend functionality to manage data and improve performance</li>
                <li>• Ensured cross-browser compatibility and usability standards</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-gray-100 pl-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-light">Personal Projects</h3>
                <span className="text-gray-500 text-sm">Self-directed</span>
              </div>
              <ul className="text-gray-600 space-y-2 leading-relaxed">
                <li>• Developed a Discord bot with custom commands and automated features</li>
                <li>• Integrated APIs and implemented interactive functionalities</li>
                <li>• Managed projects independently from planning to deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-16">Education</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-medium mb-2">Computer Operator and Programming Assistant</h3>
              <p className="text-gray-600 text-sm mb-2">ITI Tarsali</p>
              <p className="text-gray-500 text-sm">78%</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-medium mb-2">Diploma in Computer Applications</h3>
              <p className="text-gray-600 text-sm mb-2">Santmegh Computer Education</p>
              <p className="text-gray-500 text-sm">B Grade</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-medium mb-2">Course on Computer Concept</h3>
              <p className="text-gray-600 text-sm mb-2">Santmegh Computer Education</p>
              <p className="text-gray-500 text-sm">A Grade</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-medium mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm">Skill India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">Let's work together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:jignesh@example.com" 
               className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2">
              <Mail size={16} />
              Send me an email
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Github size={16} />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">© 2025 Jignesh D Maru. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="mailto:jignesh@example.com" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Mail size={16} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Github size={16} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}