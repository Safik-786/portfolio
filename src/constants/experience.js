import { FaAngular, FaBootstrap, FaCss3, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact, FaGithub } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

export const skills = [
    { name: 'HTML5', icon: FaHtml5, color: 'from-orange-500 to-red-500', iconColor: 'text-[#E34F26]', category: 'frontend' },
    { name: 'CSS3', icon: FaCss3, color: 'from-blue-500 to-cyan-500', iconColor: 'text-[#1572B6]', category: 'frontend' },
    { name: 'JavaScript', icon: FaJs, color: 'from-yellow-400 to-yellow-600', iconColor: 'text-[#F7DF1E]', category: 'frontend' },
    { name: 'React', icon: FaReact, color: 'from-cyan-400 to-blue-500', iconColor: 'text-[#61DAFB]', category: 'frontend' },
    { name: 'Angular', icon: FaAngular, color: 'from-red-500 to-pink-600', iconColor: 'text-[#DD0031]', category: 'frontend' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'from-purple-500 to-indigo-600', iconColor: 'text-[#7952B3]', category: 'frontend' },
    { name: 'Node.js', icon: FaNodeJs, color: 'from-green-500 to-emerald-600', iconColor: 'text-[#339933]', category: 'backend' },
    { name: 'Python', icon: FaPython, color: 'from-blue-400 to-yellow-400', iconColor: 'text-[#3776AB]', category: 'backend' },
    { name: 'Java', icon: FaJava, color: 'from-red-600 to-orange-600', iconColor: 'text-[#007396]', category: 'backend' },
    { name: 'MongoDB', icon: SiMongodb, color: 'from-green-600 to-emerald-500', iconColor: 'text-[#47A248]', category: 'database' },
    { name: 'MySQL', icon: SiMysql, color: 'from-blue-600 to-cyan-600', iconColor: 'text-[#4479A1]', category: 'database' },
    { name: 'GitHub', icon: FaGithub, color: 'from-gray-700 to-gray-900', iconColor: 'text-[#181717] dark:text-white', category: 'tools' },
  ];
 export const experiences = [
    {
      role: 'Junior Web Developer',
      company: 'StackDot',
      period: 'February 2025 - Present',
      logo: '💼',
      color: 'from-violet-500 to-purple-600',
      responsibilities: [
        'Work as software developer',
        'Junior SDE-developer'
      ],
      current: true
    },
    {
      role: 'Technical Sales Executive Intern',
      company: 'StackDot',
      period: 'August 2024 - January 2025',
      logo: '📊',
      color: 'from-blue-500 to-cyan-600',
      responsibilities: [
        'Work as Inside Sales Executive',
        'Learn About Email campaign & much more things'
      ]
    },
    {
      role: 'Full-Stack Web Development Intern',
      company: 'Edunet Foundation',
      period: 'Dec 2023 - Feb 2024',
      logo: '🎓',
      color: 'from-emerald-500 to-teal-600',
      responsibilities: [
        'Work as software developer',
        'Senior SDE-developer'
      ]
    }
  ];
