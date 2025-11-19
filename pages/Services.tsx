import React from 'react';
import { SERVICES } from '../constants';
import { PenTool, Map, Layout, Glasses } from 'lucide-react';
import { motion } from 'framer-motion';

const getIcon = (name: string) => {
  switch (name) {
    case 'PenTool': return <PenTool strokeWidth={1} size={48} />;
    case 'Map': return <Map strokeWidth={1} size={48} />;
    case 'Layout': return <Layout strokeWidth={1} size={48} />;
    case 'Glasses': return <Glasses strokeWidth={1} size={48} />;
    default: return <Layout strokeWidth={1} size={48} />;
  }
};

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      } 
    }
  };

  return (
    <div className="bg-alabaster min-h-screen">
      <div className="pt-24 md:pt-32 lg:pt-48 pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="mb-16 md:mb-24 lg:mb-32 border-b border-gray-200 pb-8 md:pb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-display text-onyx tracking-tighter mb-6 md:mb-8"
          >
            EXPERTISE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 max-w-2xl font-light leading-relaxed"
          >
            We offer a full-spectrum architectural practice. From the first conceptual sketch to the final material finish, our process is rigorous, collaborative, and driven by a relentless pursuit of perfection.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24"
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="group flex flex-col gap-6 md:gap-8 hover:translate-x-2 transition-transform duration-500"
            >
              <div className="text-neutral-300 group-hover:text-bronze-500 transition-colors duration-500">
                {getIcon(service.iconName)}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-display text-onyx mb-3 md:mb-4">{service.title}</h3>
                <p className="text-neutral-500 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-4 md:mb-6">{service.description}</p>
                <ul className="space-y-2 md:space-y-3 border-l border-gray-200 pl-4 md:pl-6">
                  {[1,2,3].map(i => (
                    <li key={i} className="text-xs sm:text-sm text-neutral-400 tracking-wide">
                      — Distinctive methodology point {i}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 md:mt-32 lg:mt-40 bg-onyx text-white p-8 sm:p-12 md:p-16 lg:p-24 text-center relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bronze-500 to-onyx"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-6 md:mb-8 relative z-10">HAVE A COMPLEX VISION?</h2>
            <a href="#/contact" className="inline-block border border-white/20 px-8 sm:px-10 md:px-12 py-3 md:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-wide md:tracking-ultra hover:bg-white hover:text-onyx transition-all duration-300 relative z-10">
              Start a conversation
            </a>
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;