'use client'
import Image from 'next/image';
import { Github, Mail, ExternalLink, ArrowUpRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium">Jignesh D Maru</div>
            <div className="flex items-center gap-6">
              <a href="#work" className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Work</a>
              <a href="#about" className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors">About</a>
              <a href="#contact" className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-light leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Frontend Developer
              <span className="block text-gray-500 dark:text-gray-400">& Creative Coder</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              I create clean and responsive web interfaces using modern technologies. 
              Focused on user experience and performance optimization.
            </motion.p>
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <a href="#contact" className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center gap-2 transform hover:scale-105">
                Get in touch
                <ArrowUpRight size={16} />
              </a>
              <a href="#work" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">View my work</a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Work */}
      <motion.section 
        id="work" 
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-4">Selected Work</h2>
            <p className="text-gray-600 dark:text-gray-300">A collection of projects that showcase my skills and experience.</p>
          </motion.div>
          
          <div className="space-y-24">
            {/* Project 1 */}
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="order-2 md:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/modern_government_se_eed0887a.jpg"
                    alt="Janseva Kendra - Government Service Portal"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-light mb-4">Janseva Kendra</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Developed a responsive service hub for public assistance with dynamic content management, 
                  user interaction features, and optimized frontend/backend integration using React.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">JavaScript</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Private Project</div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/student_management_s_f1f42d07.jpg"
                    alt="Santmegh - Student Management System"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
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
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/productivity_tools_d_c1f0d4da.jpg"
                    alt="ToolHub - Productivity Dashboard"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
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
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/typography_keyboard__7d80a8b1.jpg"
                    alt="FontConvo - Typography Mapping Tool"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
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
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-8">About Me</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-light mb-6">Skills & Technologies</h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Backend & Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Supabase', 'API Development'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AI-assisted coding', 'Git', 'Responsive Design'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section 
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl font-light mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          
          <div className="space-y-12">
            <motion.div 
              className="border-l-2 border-gray-100 dark:border-gray-700 pl-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-light">Frontend & Backend Developer</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Santmegh Computer Education</span>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 leading-relaxed">
                <li>• Designed, developed, and maintained websites for the institute</li>
                <li>• Created responsive, user-friendly interfaces using modern web technologies</li>
                <li>• Developed backend functionality to manage data and improve performance</li>
                <li>• Ensured cross-browser compatibility and usability standards</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="border-l-2 border-gray-100 dark:border-gray-700 pl-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-light">Personal Projects</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Self-directed</span>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 leading-relaxed">
                <li>• Developed a Discord bot with custom commands and automated features</li>
                <li>• Integrated APIs and implemented interactive functionalities</li>
                <li>• Managed projects independently from planning to deployment</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section 
        className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl font-light mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-medium mb-2 dark:text-white">Computer Operator and Programming Assistant</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">ITI Tarsali</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">78%</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-medium mb-2 dark:text-white">Diploma in Computer Applications</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Santmegh Computer Education</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">B Grade</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-medium mb-2 dark:text-white">Course on Computer Concept</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Santmegh Computer Education</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">A Grade</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-medium mb-2 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Skill India</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section 
        id="contact" 
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-light mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's work together
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can bring your ideas to life.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="mailto:jigneshmaru690@gmail.com" 
               className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
              <Mail size={16} />
              Send me an email
            </a>
            <a href="https://github.com/jignesh1236" target="_blank" rel="noopener noreferrer"
               className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
              <Github size={16} />
              View on GitHub
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-12 px-6 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 dark:text-gray-400 text-sm">© 2025 Jignesh D Maru. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="mailto:jignesh@example.com" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors transform hover:scale-110">
              <Mail size={16} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors transform hover:scale-110">
              <Github size={16} />
            </a>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
