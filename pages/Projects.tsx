import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  const currentImage = PROJECTS.find(p => p.id === hoveredProject)?.image;

  return (
    <div className="bg-alabaster min-h-screen cursor-default" onMouseMove={handleMouseMove}>
      
      {/* Floating Image Preview - Desktop Only */}
      <motion.div 
        className="fixed z-30 pointer-events-none hidden md:block w-[400px] h-[260px] overflow-hidden shadow-2xl bg-onyx"
        style={{ left: 0, top: 0 }}
        animate={{
          x: mousePosition.x + 40,
          y: mousePosition.y - 130,
          opacity: hoveredProject ? 1 : 0,
          scale: hoveredProject ? 1 : 0.8
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        <AnimatePresence mode="wait">
          {currentImage && (
            <motion.img 
              key={currentImage}
              src={currentImage} 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover opacity-90" 
              alt="Project Preview"
            />
          )}
        </AnimatePresence>
      </motion.div>

      <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 max-w-[1800px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-24 border-b border-onyx/10 pb-8 md:pb-12"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-display text-onyx leading-none tracking-tighter">
            ARCHIVE
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-6 md:mt-8 gap-4">
             <p className="text-neutral-500 max-w-md font-light text-sm sm:text-base md:text-lg">
               A chronological collection of built environments, experimental structures, and theoretical studies.
             </p>
             <span className="text-bronze-500 text-xs font-bold uppercase tracking-ultra">
               Selected Works ({PROJECTS.length})
             </span>
          </div>
        </motion.div>

        {/* Project List */}
        <div className="flex flex-col">
           {PROJECTS.map((project, index) => (
             <motion.div
               key={project.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
               onMouseEnter={() => setHoveredProject(project.id)}
               onMouseLeave={() => setHoveredProject(null)}
               className="group border-b border-onyx/10 py-8 md:py-12 lg:py-16 flex flex-col md:flex-row md:items-center justify-between relative transition-all duration-500 hover:bg-white/50 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-12 md:px-12"
             >
                <div className="flex items-start md:items-baseline gap-4 sm:gap-6 md:gap-16 z-10 pointer-events-none">
                   <span className="text-xs font-bold text-neutral-300 group-hover:text-bronze-500 transition-colors duration-300 w-6 md:w-8 flex-shrink-0">
                     0{index + 1}
                   </span>
                   <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display text-onyx group-hover:text-bronze-500 transition-colors duration-500 break-words">
                     {project.title}
                   </h2>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mt-4 md:mt-0 ml-10 sm:ml-12 md:ml-0 z-10 pointer-events-none">
                   <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide md:tracking-ultra text-neutral-400 group-hover:text-onyx transition-colors duration-300 flex-shrink-0">
                     {project.category}
                   </span>
                   <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide md:tracking-ultra text-neutral-400 group-hover:text-onyx transition-colors duration-300 hidden sm:block flex-shrink-0">
                     {project.location}
                   </span>
                   <div className="w-8 md:w-12 hidden md:flex justify-end opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:-translate-x-4 md:group-hover:translate-x-0">
                      <ArrowUpRight size={28} className="text-bronze-500" strokeWidth={1.5} />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;