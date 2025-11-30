


import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Code2,
  Briefcase,
  Rocket,
  Award,
  MapPin,
  Calendar,
  TrendingUp,
  Sparkles,
  Target
} from 'lucide-react';

const Roadmap = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const milestones = [
    {
      id: 1,
      year: "2010 - 2018",
      title: "Completed Schooling",
      subtitle: "Foundation Years",
      description: "Built a strong foundation in Science & Mathematics, developing analytical thinking and problem-solving skills that would shape my future.",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
      achievements: [
        "Excellence in Mathematics & Science",
        "Developed analytical thinking",
        "Strong academic foundation"
      ]
    },
    {
      id: 2,
      year: "2018 - 2020",
      title: "Completed +2 (Intermediate)",
      subtitle: "Computer Science Focus",
      description: "Focused on Computer Science & Problem-Solving, where I discovered my passion for programming and technology.",
      icon: <Code2 className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      achievements: [
        "Computer Science specialization",
        "Introduction to programming",
        "Logic & problem-solving skills"
      ]
    },
    {
      id: 3,
      year: "2020 - 2024",
      title: "B.Tech in Computer Science",
      subtitle: "Engineering Degree",
      description: "Gained expertise in Programming, Web Development, and Data Structures & Algorithms through intensive coursework and hands-on projects.",
      icon: <GraduationCap className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      achievements: [
        "Advanced programming concepts",
        "Web development expertise",
        "DSA & system design mastery",
        "Multiple project completions"
      ]
    },
    {
      id: 4,
      year: "Dec 2023 - Feb 2024",
      title: "Full-Stack Intern",
      subtitle: "Edunet Foundation",
      description: "Worked on Web Development projects and learned industry best practices, gaining real-world experience in building scalable applications.",
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      achievements: [
        "Industry-standard development",
        "Agile methodology exposure",
        "Team collaboration skills",
        "Production-level projects"
      ]
    },
    {
      id: 5,
      year: "Aug 2024 - Jan 2025",
      title: "Technical Sales Executive Intern",
      subtitle: "StackDot",
      description: "Worked as Inside Sales Executive, learning about Email campaigns, client communication, and the business side of technology.",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      achievements: [
        "Email marketing campaigns",
        "Client relationship management",
        "Sales strategy development",
        "Business communication skills"
      ]
    },
    {
      id: 6,
      year: "Feb 2025 - Present",
      title: "Junior Web Developer",
      subtitle: "StackDot",
      description: "Building scalable web applications using React, Django, and Node.js. Working on cutting-edge projects and contributing to innovative solutions.",
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-500/20 to-purple-500/20",
      achievements: [
        "Full-stack development",
        "Modern tech stack mastery",
        "Production deployments",
        "Code quality & best practices"
      ],
      current: true
    }
  ];

  return (
    <div ref={containerRef} id='roadmap' className="min-h-screen  py-20 relative ">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(y, (value) => -value) }}
          className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div style={{ opacity }} className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <MapPin className="w-12 h-12 text-purple-400" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            My Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From curiosity to career - A timeline of growth, learning, and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 transform md:-translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.reverse().map((milestone, index) => (
              <TimelineItem
                key={milestone.id}
                milestone={milestone}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Future Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="relative ">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50" />
                    <div className="relative bg-gradient-to-br from-purple-600 to-cyan-600 p-6 rounded-2xl">
                      <Target className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    What's Next?
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">
                    Continuously learning and growing, aiming to become a full-stack architect
                    and contribute to impactful projects that make a difference.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {["Senior Developer", "Tech Lead", "Open Source", "Innovation"].map((goal, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold text-sm"
                      >
                        {goal}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

const TimelineItem = ({ milestone, index, isEven }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} ml-16 md:ml-0`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative group"
        >
          {/* Current Badge */}
          {milestone.current && (
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`absolute -top-4 ${isEven ? 'md:right-4' : 'md:left-4'} right-4 z-10`}
            >
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Current
              </div>
            </motion.div>
          )}

          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${milestone.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

          {/* Card */}
          <div className={`relative bg-gradient-to-br ${milestone.gradient} p-0.5 rounded-2xl`}>
            <div className="bg-slate-900 rounded-2xl p-6">
              {/* Year Badge */}
              <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${milestone.bgGradient} px-4 py-2 rounded-full mb-4 border border-current/20`}>
                <Calendar className="w-4 h-4" />
                <span className="font-semibold text-sm">{milestone.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {milestone.title}
              </h3>
              <p className={`text-transparent bg-gradient-to-r ${milestone.gradient} bg-clip-text font-semibold mb-4`}>
                {milestone.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {milestone.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2">
                {milestone.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`flex items-center gap-2 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${milestone.gradient}`} />
                    <span className="text-gray-400 text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Icon */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Outer Ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute inset-0 bg-gradient-to-r ${milestone.gradient} rounded-full blur-md`}
          />

          {/* Icon Container */}
          <div className={`relative bg-gradient-to-br ${milestone.gradient} p-4 rounded-full shadow-2xl`}>
            <div className="text-white">
              {milestone.icon}
            </div>
          </div>

          {/* Pulse Ring */}
          {milestone.current && (
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className={`absolute inset-0 bg-gradient-to-r ${milestone.gradient} rounded-full`}
            />
          )}
        </motion.div>
      </div>

      {/* Spacer for alignment */}
      <div className="hidden md:block flex-1" />

    </motion.div>
  );
};

export default Roadmap