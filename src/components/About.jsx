
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Database, Rocket, Zap, Users, Lightbulb, Target } from 'lucide-react';
import Experience from './Experience';

const About = () => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  const aboutData = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "MERN Stack Developer",
      description: "Full-stack development with MongoDB, Express.js, React, and Node.js. Building scalable, performant web applications with modern architecture.",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
      gradient: "from-purple-500/10 to-pink-500/10",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "React Developer",
      description: "Creating dynamic, responsive user interfaces with React ecosystem. Expertise in hooks, context, state management, and component-driven architecture.",
      skills: ["React Hooks", "Context API", "Redux", "Next.js", "TypeScript"],
      gradient: "from-cyan-500/10 to-blue-500/10",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pipedrive Specialist",
      description: "CRM implementation and customization with Pipedrive. Streamlining sales processes, automation workflows, and integration with business systems.",
      skills: ["CRM Setup", "Automation", "API Integration", "Sales Pipeline"],
      gradient: "from-green-500/10 to-emerald-500/10",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Django Developer",
      description: "Backend development with Django and Python. Building robust, secure web applications with Django REST Framework and PostgreSQL.",
      skills: ["Django", "Python", "DRF", "PostgreSQL", "Authentication"],
      gradient: "from-orange-500/10 to-red-500/10",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop"
    }
  ];

  const stats = [
    { number: "8+", label: "Projects Completed", icon: <Rocket className="w-6 h-6" /> },
    { number: "1.5+", label: "Years Experience", icon: <Zap className="w-6 h-6" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Target className="w-6 h-6" /> },
    { number: "∞", label: "Creative Solutions", icon: <Lightbulb className="w-6 h-6" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen  py-10 pb-30 relative " id="about">
      {/* Animated Background */}
      <div className="absolute inset-0 ">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-[200px]  opacity-20 animate-pulse" />
        <div className="absolute top-[650px] -left-40 w-80 h-80 bg-cyan-600 rounded-full filter blur-[200px]  animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full filter blur-[200px] opacity-10 animate-pulse animation-delay-4000" />
      </div>

      <div className=" w-full relative  z-10">
        {/* Header - Always visible */}
        <motion.div
          className="text-center mb-16 "
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that blend innovation with functionality
          </p>
        </motion.div>

        {/* Stats - Always visible */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content - Now always visible */}
        <div ref={ref} className="grid lg:grid-cols-1 px-4 gap-12 items-start">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {aboutData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 + 0.6 }}
                className={`relative rounded-2xl overflow-hidden backdrop-blur-sm border-2 transition-all duration-500 cursor-pointer group ${
                  activeCard === index 
                    ? `border-transparent bg-gradient-to-r ${item.gradient} shadow-2xl scale-105`
                    : 'border-gray-800 bg-gray-900/50 hover:border-gray-700 hover:scale-102'
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onClick={() => setActiveCard(index)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="relative p-6 h-full min-h-[280px] flex flex-col">
                  {/* Icon and Title Row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${
                      activeCard === index 
                        ? 'bg-white text-gray-900' 
                        : `bg-gradient-to-r ${item.gradient} text-white`
                    } transition-all duration-300 group-hover:scale-110 z-10`}>
                      {item.icon}
                    </div>
                    <h3 className={`text-xl font-bold transition-all duration-300 ${
                      activeCard === index ? 'text-white' : 'text-white'
                    }`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed flex-1 text-sm">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          activeCard === index
                            ? 'bg-white/30 text-white backdrop-blur-sm'
                            : 'bg-gray-800/80 text-gray-300 backdrop-blur-sm'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                  <div className="absolute inset-[2px] rounded-2xl bg-gray-900" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info Section - Always visible */}
        <motion.div
          className="mt-20 text-center px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Why Work With Me?</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              I combine technical expertise with creative problem-solving to deliver solutions that not only meet 
              but exceed expectations. Every project is an opportunity to create something remarkable, and I approach 
              each one with passion, precision, and a commitment to excellence.
            </p>
          </div>
        </motion.div>


        {/* <Experience/> */}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default About;