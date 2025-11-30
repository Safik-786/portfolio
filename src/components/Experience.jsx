import maskImage from '../assets/mask.png'


import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

import {
  Briefcase,
  Calendar,
  Award,
  Zap
} from 'lucide-react';
import { experiences, skills } from '../constants/experience';
// import Projects from '../Projects/Projects';
// import { experiences, skills } from '../../constants/experience';

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

 

  return (
    <div ref={containerRef} id='experience' className="min-h-screen   py-20 px-4 overflow-hidden relative">
      {/* Animated Background */}

      {/* Floating gradient element */}


      <div className="absolute top-[650px] -left-40 w-80 h-80 bg-cyan-600 rounded-full filter blur-[200px]  animate-pulse animation-delay-2000" />

      <div></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Zap className="w-12 h-12 text-yellow-400 mx-auto" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Experience & Skills
          </h2>
          <p className="text-gray-400 text-lg">Building the future, one line of code at a time</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skills Section */}
          <motion.div style={{ y: y1 }} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-3xl font-bold text-white mb-2">Technical Arsenal</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-yellow-400" />
                <h4 className="text-xl font-semibold text-white">Quick Stats</h4>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">12+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">3+</div>
                  <div className="text-sm text-gray-400">Roles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400">1+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Experience Section */}
          <motion.div style={{ y: y2 }} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-3xl font-bold text-white mb-2">Professional Journey</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
            </motion.div>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* <Projects/> */}
    </div>
  );
};



const SkillCard = ({ skill, index }) => {
  const IconComponent = skill.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 }
      }}
      className="relative group cursor-pointer"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10"
        style={{
          background: `linear-gradient(135deg, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})`
        }}
      />

      {/* Glass Container */}
      <div className={`relative bg-gradient-to-br ${skill.color} p-0.5 rounded-xl overflow-hidden`}>
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-10"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut"
          }}
        />

        {/* Glass Layer with Mask Background */}
        <div 
          className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl p-4 h-full flex flex-col items-center justify-center gap-2 group-hover:bg-slate-800/70 transition-all duration-300 border border-white/10"
          style={{
            backgroundImage: `url(${maskImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >

          {/* Inner Glass Reflection */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl" />

          {/* Icon Container with Enhanced Glass Effect */}
          <motion.div
            className="relative z-20 pt-3 mt-3 backdrop-blur-md "
            whileHover={{
              scale: 1.2,
              rotateY: 180,
              transition: { duration: 0.4 }
            }}
          >
            {/* Icon Shine */}
            <div className="absolute inset-0 rounded-full group-hover:opacity-100 transition-opacity duration-300" />

            <motion.div
              className="text-3xl relative z-10"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2
              }}
            >
              <IconComponent className={`${skill.iconColor} w-6 h-6 drop-shadow-lg`} />
            </motion.div>
          </motion.div>

          {/* Skill Name with Glass Text Effect */}
          <div className="relative z-20">
            <span className=" text-xs font-semibold text-center drop-shadow-lg bg-gradient-to-r from-white to-white/80 bg-clip-text text-white">
              {skill.name}
            </span>
          </div>

          {/* Subtle Corner Accents */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-white/20 rounded-full blur-sm" />
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/20 rounded-full blur-sm" />
        </div>
      </div>
    </motion.div>
  );
};
const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        type: "spring"
      }}
      whileHover={{ scale: 1.02, x: 10 }}
      className="relative group"
    >
      {experience.current && (
        <motion.div
          className="absolute -top-3 -right-3 z-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Current
          </div>
        </motion.div>
      )}

      <div className={`relative bg-gradient-to-br ${experience.color} p-0.5 rounded-2xl overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6">
          <div className="flex gap-4 items-start">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className={`text-2xl bg-gradient-to-br ${experience.color} p-3 rounded-xl flex-shrink-0 shadow-lg flex items-center justify-center w-12 h-12`}
            >
              {experience.logo}
            </motion.div>

            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {experience.role}
              </h4>
              <p className="text-purple-300 font-semibold mb-2">{experience.company}</p>

              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
              </div>

              <div className="space-y-2">
                {experience.responsibilities.map((resp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + idx * 0.1 }}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

