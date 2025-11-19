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

      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 border-b border-onyx/10 pb-12"
        >
          <h1 className="text-8xl md:text-[10rem] font-display text-onyx leading-none tracking-tighter">
            ARCHIVE
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-end mt-8 gap-4">
             <p className="text-neutral-500 max-w-md font-light text-lg">
               A chronological collection of built environments, experimental structures, and theoretical studies.
             </p>
             <span className="text-bronze-500 text-xs font-bold uppercase tracking-ultra hidden md:block">
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
               className="group border-b border-onyx/10 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between relative transition-all duration-500 hover:bg-white/50 -mx-6 px-6 md:-mx-12 md:px-12"
             >
                <div className="flex items-baseline gap-8 md:gap-16 z-10 pointer-events-none">
                   <span className="text-xs font-bold text-neutral-300 group-hover:text-bronze-500 transition-colors duration-300 w-8">
                     0{index + 1}
                   </span>
                   <h2 className="text-4xl md:text-6xl font-display text-onyx group-hover:text-bronze-500 transition-colors duration-500">
                     {project.title}
                   </h2>
                </div>

                <div className="flex items-center gap-8 mt-6 md:mt-0 z-10 pointer-events-none">
                   <span className="text-xs font-bold uppercase tracking-ultra text-neutral-400 group-hover:text-onyx transition-colors duration-300 w-32 md:text-right">
                     {project.category}
                   </span>
                   <span className="text-xs font-bold uppercase tracking-ultra text-neutral-400 group-hover:text-onyx transition-colors duration-300 w-32 text-right hidden md:block">
                     {project.location}
                   </span>
                   <div className="w-12 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
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