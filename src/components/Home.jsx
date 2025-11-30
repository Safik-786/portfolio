
import React, { useState, useEffect, useRef } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Camera, Code, Palette, Sparkles, Zap, Rocket, Star } from "lucide-react";
import myavatar from "../assets/safik.jpg";
// import About from "../About/About";

const socialMedia = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mdsafik28/",
    color: "from-blue-600 to-blue-700",
    glow: "shadow-blue-500/50",
    name: "LinkedIn"
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/safikmahammad.mahammad.3/",
    color: "from-blue-500 to-blue-600",
    glow: "shadow-blue-400/50",
    name: "Facebook"
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com",
    color: "from-sky-400 to-blue-500",
    glow: "shadow-sky-400/50",
    name: "Twitter"
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/saffix_28/",
    color: "from-pink-500 via-purple-500 to-orange-500",
    glow: "shadow-pink-500/50",
    name: "Instagram"
  },
];

const floatingElements = [
  { Icon: Code, delay: 0, duration: 15, size: "w-16 h-16" },
  { Icon: Palette, delay: 3, duration: 18, size: "w-20 h-20" },
  { Icon: Rocket, delay: 6, duration: 20, size: "w-14 h-14" },
  { Icon: Sparkles, delay: 9, duration: 16, size: "w-18 h-18" },
  { Icon: Zap, delay: 12, duration: 22, size: "w-12 h-12" },
  { Icon: Star, delay: 15, duration: 19, size: "w-16 h-16" }
];

const skills = [
  "React", "Node.js", "TypeScript", "UI/UX", "Next.js", "MongoDB"
];

// Typing Effect Component
function TypingEffect() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Creative Thinker",
    "Problem Solver"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];

      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-light">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function ProfilePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate offset based on distance from center (max 30px movement)
      const offsetX = ((x - centerX) / centerX) * 30;
      const offsetY = ((y - centerY) / centerY) * 30;

      setMousePosition({ x, y });
      setMouseOffset({ x: offsetX, y: offsetY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <>
      <div id="home" className="relative py-[100px]  min-h-screen   overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-20"
            style={{ filter: "blur(2px)" }}
          >
            <source src="https://cdn.coverr.co/videos/coverr-abstract-wavy-particles-6419/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        {/* Custom Cursor */}
        {/* <div
          className="fixed pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)"
          }}
        >
          <div
            className={`rounded-full bg-white transition-all duration-200 ${cursorVariant === "hover" ? "w-16 h-16" : "w-8 h-8"
              }`}
            style={{ opacity: 0.7 }}
          />
        </div> */}

        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div
            className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-blob"
            style={{ transform: `translate(${parallaxOffset * 0.5}px, ${parallaxOffset}px)` }}
          />
          <div
            className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-15 animate-blob animation-delay-2000"
            style={{ transform: `translate(${-parallaxOffset * 0.3}px, ${-parallaxOffset * 0.8}px)` }}
          />
          {/* <div
            className="absolute -bottom-40 left-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-15 animate-blob animation-delay-4000"
            style={{ transform: `translate(${parallaxOffset * 0.4}px, ${parallaxOffset * 0.6}px)` }}
          /> */}
        </div>

        {/* Floating Elements */}
        {/* {floatingElements.map(({ Icon, delay, duration, size }, idx) => (
        <div
          key={idx}
          className={`absolute opacity-10 ${size}`}
          style={{
            left: `${15 + idx * 15}%`,
            top: `${20 + idx * 12}%`,
            animation: `float ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
            transform: `translate(${parallaxOffset * (0.2 + idx * 0.1)}px, ${parallaxOffset * (0.3 + idx * 0.1)}px)`
          }}
        >
          <Icon className="w-full h-full text-white" />
        </div>
      ))} */}

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10 md:px-10 " ref={containerRef}>
          <div className=" mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8 text-left order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium backdrop-blur-sm">
                      👋 Welcome to my portfolio
                    </span>
                  </div>

                  <h1 className="text-6xl md:text-7xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                    I'm{" "}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        MD Safik
                      </span>
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full" />
                    </span>
                  </h1>

                  <div className="h-16 flex items-center">
                    <TypingEffect />
                  </div>

                  <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                    Crafting exceptional digital experiences through elegant code and innovative design.
                    Let's build something amazing together.
                  </p>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full text-gray-300 text-sm hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 cursor-default"
                      style={{
                        animation: `fadeIn 0.5s ease-out ${idx * 0.1}s both`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Rocket className="w-5 h-5" />
                      View My Work
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>

                  <button
                    className="group relative px-8 py-4 bg-transparent backdrop-blur-sm border-2 border-gray-700 text-gray-300 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:text-white"
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <span className="relative z-10">Get In Touch</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 text-gray-500 text-sm pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Available for freelance projects</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Image with Mouse Follow */}
              <div
                className="relative order-1    lg:order-2 flex justify-center items-start lg:justify-center"
                style={{
                  transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
                  transition: "transform 0.3s ease-out"
                }}
              >
                <div
                  className="relative "
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setCursorVariant("hover");
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setCursorVariant("default");
                  }}
                >
                  {/* Animated Ring */}
                  <div className="absolute  -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-2xl animate-pulse" />

                  {/* Rotating Border */}
                  <div
                    className={`absolute -inset-2 rounded-full transition-all duration-700 ${isHovered ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-spin-slow" style={{ padding: "4px", borderRadius: "50%" }}>
                      <div className="w-full h-full rounded-full bg-black" />
                    </div>
                  </div>

                  {/* Profile Image Container */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl shadow-purple-500/30 backdrop-blur-sm relative group">
                      {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}

                      <img
                        src={myavatar}
                        alt="MD Safik - Portfolio"
                        className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                          } group-hover:scale-110`}
                        onLoad={() => setImageLoaded(true)}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          setImageLoaded(true);
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Social Media Icons */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {socialMedia.map((media, index) => {
                        const angle = (index * 90) + 45;
                        const radius = 180;
                        const x = isHovered ? radius * Math.cos((angle * Math.PI) / 180) : 0;
                        const y = isHovered ? radius * Math.sin((angle * Math.PI) / 180) : 0;

                        return (
                          <a
                            key={index}
                            href={media.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${media.color} flex items-center justify-center text-white text-2xl shadow-lg ${media.glow} hover:scale-125 transition-all duration-300 backdrop-blur-sm border-2 border-white/20 group`}
                            style={{
                              transform: `translate(${x}px, ${y}px) scale(${isHovered ? 1 : 0})`,
                              opacity: isHovered ? 1 : 0,
                              transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`
                            }}
                            onMouseEnter={() => setCursorVariant("hover")}
                            onMouseLeave={() => setCursorVariant("default")}
                          >
                            {media.icon}
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {media.name}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse animation-delay-2000" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full animate-scroll" />
          </div>
        </div>

              {/* <About/> */}


        <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
      </div>
    </>
  );
}