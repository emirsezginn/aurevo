import React from 'react';
import { TEAM } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-alabaster min-h-screen">
      
      {/* Header */}
      <section className="pt-48 pb-24 px-6 lg:px-12 max-w-[1800px] mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-bronze-500 text-xs font-bold uppercase tracking-ultra block mb-6"
            >
              The Studio
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-display text-onyx leading-[0.9] tracking-tight mb-12"
            >
              CRAFTING<br/>SILENCE
            </motion.h1>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-lg text-neutral-600 font-light leading-relaxed mb-4">
              We exist to challenge the static nature of traditional building. Aurevo sees architecture as a fluid dialogue between structure, light, and human necessity.
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="w-full h-[80vh] grid grid-cols-2 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
          alt="Studio interior" 
          className="w-full h-full object-cover"
        />
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200" 
          alt="Architectural Sketch" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl font-display text-onyx">PRINCIPALS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-2xl font-display text-onyx mb-1">{member.name}</h3>
              <p className="text-xs font-bold uppercase tracking-ultra text-bronze-500 mb-4">{member.role}</p>
              <p className="text-sm text-neutral-500 leading-relaxed border-t border-gray-200 pt-4">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;