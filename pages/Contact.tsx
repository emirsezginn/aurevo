import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="bg-alabaster min-h-screen flex flex-col">
      <div className="flex-grow pt-32 lg:pt-0 grid grid-cols-1 lg:grid-cols-2 min-h-screen overflow-hidden">
        
        {/* Info Side */}
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-onyx text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden"
        >
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           
           <div className="relative z-10">
             <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="text-bronze-500 text-xs font-bold uppercase tracking-ultra mb-6 block"
             >
               Inquiries
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.9, duration: 0.8 }}
               className="text-6xl md:text-8xl font-display mb-12 leading-none"
             >
               LETS<br/>BUILD.
             </motion.h1>
             
             <div className="space-y-12">
                {[
                  { icon: MapPin, title: 'Studio', content: '123 Architect Avenue\nThe Arts District, LA 90012' },
                  { icon: Mail, title: 'Email', content: 'hello@aurevo.com' },
                  { icon: Phone, title: 'Phone', content: '+1 (555) 123-4567' }
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + (i * 0.1) }}
                    className="flex items-start gap-6 group"
                  >
                    <item.icon className="text-neutral-500 group-hover:text-white transition-colors mt-1" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-ultra text-neutral-400 mb-2">{item.title}</h4>
                      <p className="text-xl font-light whitespace-pre-line">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
           </div>
        </motion.div>

        {/* Form Side */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-white p-12 lg:p-24 flex flex-col justify-center"
        >
          <form className="max-w-lg w-full mx-auto space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-12">
              <div className="group">
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-gray-200 py-4 text-onyx text-lg focus:border-bronze-500 focus:outline-none transition-colors placeholder-transparent peer" 
                  id="name" 
                  placeholder="Name" 
                />
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-ultra text-neutral-400 mb-2 peer-focus:text-bronze-500 transition-colors">Name</label>
              </div>
              
              <div className="group">
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-gray-200 py-4 text-onyx text-lg focus:border-bronze-500 focus:outline-none transition-colors placeholder-transparent peer" 
                  id="email" 
                  placeholder="Email" 
                />
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-ultra text-neutral-400 mb-2 peer-focus:text-bronze-500 transition-colors">Email</label>
              </div>

              <div className="group">
                <textarea 
                  rows={3} 
                  className="w-full bg-transparent border-b border-gray-200 py-4 text-onyx text-lg focus:border-bronze-500 focus:outline-none transition-colors resize-none placeholder-transparent peer" 
                  id="message" 
                  placeholder="Message"
                ></textarea>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-ultra text-neutral-400 mb-2 peer-focus:text-bronze-500 transition-colors">Vision</label>
              </div>
            </div>
            
            <button className="w-full bg-onyx text-white py-5 text-xs font-bold uppercase tracking-ultra hover:bg-bronze-500 transition-colors duration-300">
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;