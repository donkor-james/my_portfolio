import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, ChevronLeft, ChevronRight, Menu, X, ArrowRight, Code, Database, Smartphone, Bot } from 'lucide-react';
import Chat from '../assets/chat.png'; // Assuming these are image imports
import Easy from '../assets/easy.png'; // Assuming these are image imports
import Wiki from '../assets/wiki.png'; // Assuming these are image imports
import Write from '../assets/write_space.png'; // Assuming these are image imports
import ProfilePic from '../assets/me.jpg'; // Assuming these are image imports
import Andrews from '../assets/andrews.jpeg'; // Assuming these are image imports
import LOR from '../assets/LETTERHEAD_OF_RECOMMENDATION.pdf'; // Assuming these are image imports
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "ChatApp",
      category: "fullstack",
      image: Chat,
      description: `Full-stack real-time chat application with authentication.\n\nBuilt with Django (REST API, Channels, JWT, Daphne) and React (Tailwind CSS).\nFeatures: user registration/login, email verification, 2FA, real-time messaging, contact management.\nImplemented WebSocket-based chat for instant communication.\nDesigned responsive UI and secure authentication flows.`,
      technologies: ["Django", "React", "Tailwind CSS", "JWT", "Channels", "Daphne"],
      github: "https://github.com/donkor-james/chatapp",
      demo: "",
      featured: true
    },
    {
      id: 2,
      title: "Blog App",
      category: "fullstack",
      image: Write,
      description: `Developed using Django (REST Framework) and React.\nKey features: account creation/login, post publishing/editing, category-based browsing, cursor pagination.\nBuilt a modern, mobile-friendly interface and efficient API endpoints.\nContainerized with Docker for streamlined deployment.`,
      technologies: ["Django", "React", "Docker", "REST Framework"],
      github: "https://github.com/donkor-james/blog_website",
      demo: ""
    },
    {
      id: 3,
      title: "Easy Download Bot",
      category: "automation",
      image: Easy,
      description: `Developed a Telegram bot for automated video downloads from multiple platforms.\nUtilized Python and Pyrogram for bot functionality, along with yt-dlp for video downloading.\nImplemented real-time download tracking features for enhanced user experience.`,
      technologies: ["Python", "Pyrogram", "yt-dlp", "Telegram Bot"],
      github: "https://github.com/donkor-james/easy_download_bot.git",
      demo: ""
    },
    {
      id: 4,
      title: "Premier League Insider",
      category: "automation",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      description: `Engineered an end-to-end automation pipeline to fetch Premier League news and match previews from RSS feeds and external APIs.\nCreated Gemini AI client to generate authentic, style-adaptive articles directly from real news sources, with advanced prompt engineering for versatile writing styles.\nImplemented a Telegram DM review and approval workflow, allowing manual or automated publishing decisions.\nAutomated publishing to Blogger, X/Twitter and EPL Insider Telegram channel, including image handling and hashtag extraction for optimized social media engagement.\nOrchestrated asynchronous operations for efficient, scalable news delivery.`,
      technologies: ["Python", "Gemini AI", "Telegram Bot", "APIs", "AsyncIO"],
      github: "https://github.com/donkor-james/epl_insider.git",
      demo: ""
    },
    {
      id: 5,
      title: "Wikipedia Clone",
      category: "frontend",
      image: Wiki,
      description: `Developed as a course project for Website Design and Technologies in Computer Science.\nA Wikipedia-like website allowing users to view, create, edit, and explore entries across various categories (arts, science, history, etc.).\nCategory-based navigation and content organization.\nCustom styling for different sections and pages.\nResponsive design elements for usability.\nIntegration of images and media for enhanced presentation.`,
      technologies: ["HTML", "CSS"],
      github: "https://github.com/donkor-james/wikiclone",
      demo: ""
    }
  ];

  const experiences = [
    {
      company: "Insight Ghana (Whitebox Media)",
      position: "Backend Intern",
      duration: "Sept 2024 – Nov 2024",
      description: `Developed secure authentication features for a voting system using Django, including user registration and login.\nImplemented Two-Factor Authentication (2FA) for enhanced security.\nCreated RESTful API endpoints for seamless frontend-backend communication.\nManaged CRUD operations for user accounts and voting records.\nCollaborated with cross-functional teams to ensure project alignment.`,
      technologies: ["Django", "REST API", "2FA", "Authentication"],
      hasRecommendation: true,
      recommendation: LOR,
      hasCompletion: false
    },
    {
      company: "Pizzaman Chickenman",
      position: "Freelance Website Developer",
      duration: "Oct 2023 – Nov 2023",
      description: `Developed a responsive, mobile-friendly restaurant website using React and Tailwind CSS.\nEnhanced client's online sales and customer engagement through improved UI/UX design.`,
      technologies: ["React", "Tailwind CSS", "UI/UX"],
      hasRecommendation: false,
      hasCompletion: false
    },
    {
      company: "Inserviz Inc",
      position: "Web Developer Intern",
      duration: "Sept 2023 - December 2023",
      description: `Assisted in the development of company website.\nHandled website responsiveness.\nCollaborated with the design and backend teams to implement new features and enhancements.`,
      technologies: ["React", "Web Development", "Team Collaboration"],
      hasRecommendation: false,
      hasCompletion: false
    }
  ];

  const testimonials = [
    {
      name: "Andrews Opoku",
      position: "Senior Developer at Inserviz",
      content: "Exceptional problem-solving skills and attention to detail. A pleasure to work with.",
      avatar: Andrews,
    },
    {
      name: "Miss Florence Serwaa Akoto Arhin",
      position: "HR at WhiteBox Media",
      content: "I am confident in James Donkor's skills and his potential to excel in any future endeavors. He has my highest recommendation",
      avatar: "",
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const nextProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    setCurrentProjectIndex(0);
  }, [activeFilter]);

  const NetworkBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#f59e0b" opacity="0.5"/>
              <circle cx="20" cy="20" r="1" fill="#f59e0b" opacity="0.3"/>
              <circle cx="80" cy="30" r="1" fill="#f59e0b" opacity="0.4"/>
              <circle cx="30" cy="80" r="1" fill="#f59e0b" opacity="0.3"/>
              <line x1="50" y1="50" x2="20" y2="20" stroke="#f59e0b" strokeWidth="0.5" opacity="0.3"/>
              <line x1="50" y1="50" x2="80" y2="30" stroke="#f59e0b" strokeWidth="0.5" opacity="0.3"/>
              <line x1="50" y1="50" x2="30" y2="80" stroke="#f59e0b" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)"/>
        </svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-custom text-white relative flex flex-col">
      <NetworkBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">
              <span className="text-white">James</span>
              <span className="text-amber-custom">Donkor</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'testimonials', 'contact'].map((item) => (
                <a href={`#${item}`} >
                  <button
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={`capitalize transition-colors ${
                      activeSection === item 
                        ? 'text-amber-400' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'experience', 'projects', 'testimonials', 'contact'].map((item) => (
                <a href={`#${item}`} key={item}>
                  <button
                    className={`block w-full text-left py-2 capitalize transition-colors ${
                      activeSection === item 
                        ? 'text-amber-400' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

          {/* Hero Section */}
          <section className="pt-24 pb-16 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
                <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
                  <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                    Building Tomorrow's{' '}
                    <span className="text-red-500">Apps</span>{' '}
                    <span className="text-white">Today</span>
                  </h1>
                  <p className="text-xl text-white/80 mb-8 max-w-2xl">
                    Hi, I'm James Donkor, Skilled Software Developer with experience in web development, bot and automation development. I am proficient in multiple programming languages and frameworks with a strong foundation in computer science principles.
                  </p>
                  <a href="#projects" className=''>
                    <button 
                      className="inline-flex items-center btn-amber px-8 py-4"
                    >
                      View My Work
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                  </a>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-amber-custom shadow-2xl">
                      <img
                        src={ProfilePic}
                        alt="Profile Picture"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-amber-custom text-black p-3 rounded-full">
                      <Code size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="pt-24 pb-16 relative z-10" id='about'>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  I am a Software Developer with hands-on experience in full-stack web development, 
                  proficient in Python, JavaScript, and C. I have created various web applications and 
                  automation tools, specializing in building Progressive Web Applications (PWAs) 
                  using React and Electron. I have a strong focus on writing clean code and developing impactful solutions, 
                  utilizing frameworks like Django and Flask, as well as working with REST APIs and SQL databases. 
                  I am passionate about leveraging CI/CD practices and tools like Git/GitHub and Jenkins to streamline development processes. 
                  Let’s connect and create something amazing together!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-amber-custom p-4 rounded-lg inline-block mb-4">
                      <Code className="text-amber-400" size={32} />
                    </div>
                    <h3 className="font-semibold mb-2">Frontend Development</h3>
                    <p className="text-white/70 text-sm">React, Tailwind CSS, Bootstrap</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-amber-custom p-4 rounded-lg inline-block mb-4">
                      <Database className="text-amber-400" size={32} />
                    </div>
                    <h3 className="font-semibold mb-2">Backend Development</h3>
                    <p className="text-white/70 text-sm">Python, PostgreSQL, MySQL, Rest Api, Websockets, Data Caching</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-amber-custom p-4 rounded-lg inline-block mb-4">
                      <Bot className="text-amber-400" size={32} />
                    </div>
                    <h3 className="font-semibold mb-2">Automation & Bots</h3>
                    <p className="text-white/70 text-sm">Python, Selenium, Beautiful Soup, Bot Frameworks</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="pt-24 pb-16 relative z-10" id='experience'>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-center">My Experience</h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-amber-400">{exp.position}</h3>
                        <h4 className="text-xl text-white/80">{exp.company}</h4>
                        <p className="text-white/60">{exp.duration}</p>
                      </div>
                      <div className="flex gap-2 mt-4 lg:mt-0">
                        {exp.hasRecommendation && (
                          <div className='px-4 py-2 rounded-full' style={{background:'#3b82f6',color:'#fff'}}>
                            <a href={exp.recommendation} target='_blank' rel='noopener noreferrer'>
                              <span className="" >
                                Recommendation Letter
                              </span>
                            </a>
                          </div>
                        )}
                        {exp.hasCompletion && (
                          <a href='../assets/Insight_completion_certificate.pdf' target='_blank' rel='noopener noreferrer'>
                            <span className="badge-amber" style={{background:'#3b82f6',color:'#fff'}}>
                              letter of Completion
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-white/80 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-amber-custom text-black px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="pt-24 pb-16 relative z-10" id='projects'>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-center">Personal Projects</h2>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[
                  { key: 'all', label: 'All Projects', icon: Code },
                  { key: 'frontend', label: 'Frontend', icon: Code },
                  { key: 'fullstack', label: 'Full Stack', icon: Database },
                  { key: 'automation', label: 'Automation & Bots', icon: Bot }
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveFilter(key)}
                    className={`flex items-center px-6 py-3 rounded-full transition-colors ${
                      activeFilter === key
                        ? 'bg-amber-500 text-black'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <Icon size={18} className="mr-2" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Project Slider */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
                  >
                    {filteredProjects.map((project) => (
                      <div key={project.id} className="w-full flex-shrink-0">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="relative h-64 lg:h-full">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                              {project.featured && (
                                <div className="absolute top-4 left-4 bg-amber-custom text-black px-3 py-1 rounded-full text-sm font-semibold">
                                  Featured
                                </div>
                              )}
                            </div>
                            <div className="p-8">
                              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                              <p className="text-white/80 mb-6">{project.description}</p>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, index) => (
                                  <span
                                    key={index}
                                    className="bg-amber-custom text-black px-3 py-1 rounded-full text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <div className="flex gap-4">
                                <a
                                  href={project.github}
                                  className="flex items-center bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                                >
                                  <Github size={18} className="mr-2" />
                                  Code
                                </a>
                                {project.demo && (
                                  <a
                                    href={project.demo}
                                    className="flex items-center bg-amber-500 text-black px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors"
                                  >
                                    <ExternalLink size={18} className="mr-2" />
                                    Demo
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {filteredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProjectIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentProjectIndex ? 'bg-amber-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="pt-24 pb-16 relative z-10" id='testimonials'>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-white/60 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-white/80 italic">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="pt-24 pb-16 relative z-10" id='contact'>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing</h2>
              <p className="text-xl text-white/80 mb-12">
                Ready to bring your ideas to life? Let's connect and create something extraordinary together.
              </p>
              <div className="flex justify-center space-x-6 mb-12">
                <a
                  href="mailto:jamesdonkor987@gmail.com"
                  className="flex items-center bg-amber-500 text-black px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors"
                >
                  <Mail size={20} className="mr-2" />
                  Email Me
                </a>
                <a
                  href="https://linkedin.com/in/james987"
                  className="flex items-center bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/donkor-james"
                  className="flex items-center bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </section>

      {/* Footer */}
      <footer className="bg-black-overlay border-t border-white/10 py-8 relative z-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60">
            © 2025 James Donkor. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;