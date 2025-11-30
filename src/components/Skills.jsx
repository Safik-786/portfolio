import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import maskImage from '../assets/mask.png';
import { skills } from '../constants/experience';

const TechnicalArsenal = () => {
  const containerRef = useRef(null);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewportSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setViewportSize({
          width: rect.width,
          height: rect.height
        });
      }
    };

    updateViewportSize();
    window.addEventListener('resize', updateViewportSize);

    return () => {
      window.removeEventListener('resize', updateViewportSize);
    };
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10 p-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center relative z-10"
      >
        <h3 className="text-4xl font-bold text-white mb-3">Technical Arsenal</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
        <p className="text-gray-400 mt-4">Watch the tech logos float and interact within their container</p>
      </motion.div>

      {/* Floating Logos Container with Fixed Boundaries */}
      <div 
        ref={containerRef}
        className="relative w-full h-[600px] rounded-2xl border-2 border-slate-700/50   overflow-hidden"
      >
        {skills.map((skill, index) => (
          <FloatingLogo
            key={`${skill.name}-${index}`}
            skill={skill}
            index={index}
            viewportSize={viewportSize}
            totalLogos={skills.length}
          />
        ))}
      </div>
    </div>
  );
};

const FloatingLogo = ({ skill, index, viewportSize, totalLogos }) => {
  const IconComponent = skill.icon;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const logoRef = useRef(null);
  const animationRef = useRef(null);

  const LOGO_SIZE = 60; // Size of the logo element

  // Initialize random positions and velocities within container
  useEffect(() => {
    if (viewportSize.width > 0 && viewportSize.height > 0) {
      const maxX = viewportSize.width - LOGO_SIZE;
      const maxY = viewportSize.height - LOGO_SIZE;
      
      // Ensure logos start within container boundaries
      const startX = Math.max(0, Math.min(maxX, Math.random() * maxX));
      const startY = Math.max(0, Math.min(maxY, Math.random() * maxY));
      
      setPosition({
        x: startX,
        y: startY
      });

      // Random initial velocity (slower speed)
      const speed = 0.5 + Math.random() * 1;
      const angle = Math.random() * Math.PI * 2;
      setVelocity({
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed
      });
    }
  }, [viewportSize]);

  // Animation loop with proper boundary checking
  useEffect(() => {
    if (!viewportSize.width || !viewportSize.height || isDragging) return;

    const animate = () => {
      setPosition(prev => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        let newVx = velocity.x;
        let newVy = velocity.y;

        // Boundary collision - bounce off container walls
        // Left boundary
        if (newX <= 0) {
          newVx = Math.abs(velocity.x) * 0.95; // Bounce right
          newX = 0;
        }
        // Right boundary
        else if (newX >= viewportSize.width - LOGO_SIZE) {
          newVx = -Math.abs(velocity.x) * 0.95; // Bounce left
          newX = viewportSize.width - LOGO_SIZE;
        }

        // Top boundary
        if (newY <= 0) {
          newVy = Math.abs(velocity.y) * 0.95; // Bounce down
          newY = 0;
        }
        // Bottom boundary
        else if (newY >= viewportSize.height - LOGO_SIZE) {
          newVy = -Math.abs(velocity.y) * 0.95; // Bounce up
          newY = viewportSize.height - LOGO_SIZE;
        }

        // Update velocity if it changed due to boundary collision
        if (newVx !== velocity.x || newVy !== velocity.y) {
          setVelocity({ x: newVx, y: newVy });
        }

        return { x: newX, y: newY };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [viewportSize, velocity, isDragging]);

  const handleDragStart = (event, info) => {
    setIsDragging(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    
    // Ensure the logo stays within container bounds after drag
    const newX = position.x;
    const newY = position.y;
    const maxX = viewportSize.width - LOGO_SIZE;
    const maxY = viewportSize.height - LOGO_SIZE;
    
    // Clamp position to container boundaries
    const clampedX = Math.max(0, Math.min(maxX, newX));
    const clampedY = Math.max(0, Math.min(maxY, newY));
    
    if (clampedX !== newX || clampedY !== newY) {
      setPosition({ x: clampedX, y: clampedY });
    }
    
    // Set new velocity based on drag throw, but limit maximum speed
    const throwStrength = 0.1;
    const maxSpeed = 5;
    const newVx = Math.max(-maxSpeed, Math.min(maxSpeed, info.velocity.x * throwStrength));
    const newVy = Math.max(-maxSpeed, Math.min(maxSpeed, info.velocity.y * throwStrength));
    
    setVelocity({
      x: newVx,
      y: newVy
    });
  };

  return (
    <motion.div
      ref={logoRef}
      className="absolute cursor-grab active:cursor-grabbing z-20"
      style={{
        x: position.x,
        y: position.y,
        width: LOGO_SIZE,
        height: LOGO_SIZE
      }}
      drag
      dragConstraints={{
        left: 0,
        right: viewportSize.width - LOGO_SIZE,
        top: 0,
        bottom: viewportSize.height - LOGO_SIZE,
      }}
      dragElastic={0}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      whileHover={{ scale: 1.2, zIndex: 30 }}
      whileTap={{ scale: 1.1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {/* Logo Container with Glass Effect */}
      <div className="relative group w-full h-full">
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
          style={{
            background: skill.color ? `linear-gradient(135deg, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})` : 'linear-gradient(135deg, #6366f1, #8b5cf6)'
          }}
        />

        {/* Glass Container */}
        <div className={`relative bg-gradient-to-br ${skill.color} p-1 rounded-2xl backdrop-blur-sm w-full h-full`}>
          {/* Main Logo Area */}
          <div 
            className="relative bg-slate-900/90 backdrop-blur-md rounded-xl w-full h-full flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all duration-300"
            style={{
              backgroundImage: `url(${maskImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Icon */}
            <motion.div
              animate={{
                rotateZ: isDragging ? 0 : [0, 5, -5, 0],
                scale: isDragging ? 1.1 : 1
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <IconComponent 
                className={`${skill.iconColor || 'text-white'} w-6 h-6 drop-shadow-2xl`} 
              />
            </motion.div>

            {/* Tooltip on Hover */}
            {/* <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-40">
              <div className="bg-slate-800/90 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-lg whitespace-nowrap border border-white/10">
                {skill.name}
                <div className="text-gray-400 text-xs capitalize">{skill.category}</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Drag Indicator */}
        <motion.div
          className="absolute -top-1 -right-1  rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Motion Trail Effect */}
      {!isDragging && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: skill.color ? `linear-gradient(135deg, ${skill.color.split(' ')[1]}30, ${skill.color.split(' ')[3]}30)` : 'linear-gradient(135deg, #6366f130, #8b5cf630)'
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeOut"
          }}
        />
      )}
    </motion.div>
  );
};

export default TechnicalArsenal;