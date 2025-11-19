import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Horizontal scroll transform
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <div className="bg-alabaster">
      
      {/* Typographic Hero */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-alabaster">
        <div className="absolute inset-0 z-0 flex justify-center items-center opacity-20 md:opacity-100">
           {/* Parallax Image behind text */}
           <motion.div 
             initial={{ scale: 1.2 }}
             animate={{ scale: 1 }}
             transition={{ duration: 2, ease: "easeOut" }}
             className="w-[80vw] h-[60vh] overflow-hidden"
           >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400" 
                className="w-full h-full object-cover grayscale contrast-125"
                alt="Hero"
              />
           </motion.div>
        </div>

        <div className="relative z-10 mix-blend-difference text-white text-center">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-[15vw] leading-[0.8] tracking-tighter"
          >
            AUREVO
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
             <p className="text-xs font-bold uppercase tracking-ultra">Architects of the Void</p>
             <div className="h-16 w-px bg-white/50 mt-4"></div>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-32 px-6 lg:px-12 max-w-6xl mx-auto">
        <p className="text-3xl md:text-5xl font-light leading-tight indent-24">
          We do not just build structures; we sculpt the negative space. 
          <span className="text-neutral-400"> Our work exists at the intersection of brutalist permanence and the ephemeral quality of light.</span>
        </p>
      </section>

      {/* Horizontal Scroll Section */}
      <section ref={targetRef} className="relative h-[300vh] bg-onyx">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">
            {/* Title Card */}
            <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center">
              <h2 className="text-7xl md:text-9xl font-display text-white leading-none mb-8">
                SELECTED<br/><span className="text-stroke">WORKS</span>
              </h2>
              <p className="text-neutral-400 max-w-md">
                A curation of spaces designed to challenge perception and enhance the human condition.
              </p>
              <Link to="/projects" className="mt-8 text-white border-b border-white pb-1 inline-block w-max text-xs font-bold uppercase tracking-ultra">
                View Full Archive
              </Link>
            </div>

            {PROJECTS.slice(0, 5).map((project) => (
              <Link to="/projects" key={project.id} className="relative flex-shrink-0 w-[80vw] md:w-[50vw] h-[70vh] group overflow-hidden bg-neutral-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-bronze-500 text-xs font-bold uppercase tracking-ultra mb-2 block">{project.category}</span>
                  <h3 className="text-3xl md:text-5xl font-display text-white">{project.title}</h3>
                </div>
              </Link>
            ))}
            
            {/* End Card */}
             <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center items-center border border-white/10">
               <Link to="/projects" className="group flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-onyx text-white transition-all duration-500 mb-4">
                    <ArrowRight size={32} />
                  </div>
                  <span className="text-white text-xl font-display">All Projects</span>
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="min-h-[70vh] flex items-center justify-center bg-alabaster px-6">
         <div className="text-center">
            <span className="text-bronze-500 text-xs font-bold uppercase tracking-ultra mb-6 block">Start a Dialogue</span>
            <Link to="/contact" className="group">
              <h2 className="text-6xl md:text-9xl font-display text-onyx hover:text-transparent hover:text-stroke-black transition-all duration-500 cursor-pointer leading-none">
                LET'S<br/>BUILD
              </h2>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;