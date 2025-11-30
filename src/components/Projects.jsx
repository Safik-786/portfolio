
import castackLogo from '../assets/castack.jpg'
import maskImage from '../assets/mask.png'
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  X,
  Code2,
  Layers,
  Rocket,
  Sparkles,
  Building2,
  ArrowRight,
  Globe
} from 'lucide-react';
import Roadmap from './RoadMap';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  // const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]); // Reduced scaling

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "MERN Stack",
      description: "Full-featured e-commerce platform built with MongoDB, Express, React, and Node.js",
      longDescription: "A comprehensive e-commerce solution featuring user authentication, product management, shopping cart functionality, payment integration, and admin dashboard. Built with modern web technologies ensuring scalability and performance.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Redux"],
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🛍️",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      features: [
        "Secure user authentication & authorization",
        "Product catalog with search & filters",
        "Shopping cart & wishlist functionality",
        "Payment gateway integration",
        "Order tracking & management",
        "Admin dashboard for inventory"
      ]
    },
    {
      id: 2,
      title: "Hospital Management System",
      subtitle: "Healthcare Solution",
      description: "Comprehensive hospital management system for patient care and administrative operations",
      longDescription: "An integrated healthcare management platform that streamlines hospital operations, patient records, appointment scheduling, and billing. Designed with healthcare professionals in mind for maximum efficiency.",
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io", "Material-UI"],
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      icon: "🏥",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      features: [
        "Patient registration & records management",
        "Appointment scheduling system",
        "Doctor & staff management",
        "Billing & insurance processing",
        "Medicine inventory tracking",
        "Real-time notifications"
      ]
    },
    {
      id: 3,
      title: "Exam Management System",
      subtitle: "Educational Platform",
      description: "Complete examination and assessment management system for educational institutions",
      longDescription: "A robust platform for creating, conducting, and evaluating examinations. Features automated grading, analytics, and comprehensive reporting tools for educators and administrators.",
      tech: ["Angular", "Spring Boot", "MySQL", "Redis", "AWS"],
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      icon: "📝",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      features: [
        "Online exam creation & scheduling",
        "Multiple question types support",
        "Automated grading system",
        "Anti-cheating mechanisms",
        "Performance analytics & reports",
        "Student progress tracking"
      ]
    },
    {
      id: 4,
      title: "MonoScrum",
      subtitle: "AI-Powered Task Management",
      description: "Intelligent task management system powered by AI for enhanced productivity",
      longDescription: "MonoScrum revolutionizes project management with AI-powered task prioritization, smart scheduling, and predictive analytics. Perfect for agile teams looking to maximize efficiency.",
      tech: ["React", "Python", "TensorFlow", "MongoDB", "OpenAI"],
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      features: [
        "AI-powered task prioritization",
        "Smart sprint planning",
        "Automated standup reports",
        "Predictive timeline estimation",
        "Team productivity insights",
        "Integration with popular tools"
      ]
    },
    {
      id: 5,
      title: "FullStack TMS",
      subtitle: "Transportation Management",
      description: "Complete transportation and logistics management solution",
      longDescription: "An end-to-end transportation management system designed to optimize logistics operations, track shipments in real-time, and manage fleet efficiently.",
      tech: ["Vue.js", "Django", "PostgreSQL", "Google Maps API"],
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "🚚",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      features: [
        "Real-time shipment tracking",
        "Route optimization",
        "Fleet management dashboard",
        "Driver assignment & scheduling",
        "Automated invoicing",
        "Analytics & reporting"
      ]
    },
    {
      id: 6,
      title: "YouTube Clone",
      subtitle: "Video Streaming Platform",
      description: "Feature-rich video streaming platform with modern UI/UX",
      longDescription: "A fully functional video streaming platform inspired by YouTube, featuring video uploads, comments, likes, subscriptions, and a recommendation algorithm.",
      tech: ["React", "Firebase", "Node.js", "FFmpeg", "AWS S3"],
      gradient: "from-red-600 via-rose-600 to-pink-600",
      icon: "📺",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      features: [
        "Video upload & processing",
        "User subscriptions & notifications",
        "Comment system & likes",
        "Search & recommendations",
        "Channel customization",
        "Analytics dashboard"
      ]
    }
  ];

  return (
    <div ref={containerRef} id='projects' className="min-h-screen   relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0  overflow-hidden pointer-events-none ">
        <motion.div
          style={{ y }}
          className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(y, (value) => -value) }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className=" mx-auto relative z-10  "
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 border "
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-4"
          >
            <Rocket className="w-33 h-12 text-purple-400" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl  pb-5 font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Crafting innovative solutions that make a difference
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Co-Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />
          <div className="relative bg-gray-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-shrink-0"
              >
                <div className="relative flex items-center justify-center">
                  {/* Glowing outer gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-3xl opacity-40 animate-pulse" />

                  {/* Circular gradient border */}
                  <div className="relative h-[250px] w-[250px]    ">
                    {/* Masked logo */}
                    <div
                      className="h-full w-full rounded-full bg-center bg-cover transition-transform duration-700 hover:scale-105 border"
                      style={{
                        WebkitMaskImage: `url(${maskImage})`,
                        maskImage: `url(${maskImage})`,
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        backgroundColor: "black",
                        WebkitMaskSize: 'cover',
                        maskSize: 'cover',
                        backgroundImage: `url(${castackLogo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',

                        // backgroundRepeat:"no-repeat",
                        backgroundSize: '60%', // ↓ reduce this (e.g. 60%, 50%) to shrink logo

                      }}
                    />
                  </div>
                </div>

              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-4">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 text-sm font-semibold">Co-Founder</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Building the Future at Castack
                  </h2>
                  <p className="text-gray-300 text-lg mb-6">
                    As a co-founder of Castack.in, I'm passionate about creating innovative solutions
                    that empower businesses and individuals to achieve their goals.
                  </p>
                  <motion.a
                    href="https://castack.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex  items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow"
                  >
                    <Globe className="w-5 h-5" />
                    Visit Castack.in
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      {/* <Roadmap /> */}
    </div>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ y }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-full">
        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

        {/* Card */}
        <div className={`relative bg-gradient-to-br ${project.gradient} p-0.5 rounded-2xl h-full`}>
          <div className="bg-slate-900 rounded-2xl overflow-hidden h-full flex flex-col">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

              {/* Icon */}
              <motion.div
                className="absolute top-4 right-4 text-5xl"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                {project.icon}
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-purple-400 font-semibold">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-800 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs bg-slate-800 text-gray-400 px-3 py-1 rounded-full border border-gray-600/30">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              {/* View Details Button */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-purple-400 font-semibold text-sm"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent`} />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4 mb-3">
                <motion.div
                  // animate={{ rotate: [0, 360] }}
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-6xl"
                >
                  {project.icon}
                </motion.div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-1">{project.title}</h2>
                  <p className="text-purple-300 font-semibold">{project.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-purple-400" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg border border-purple-500/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;