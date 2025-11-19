import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-onyx text-white pt-32 pb-12 px-6 lg:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 border-b border-white/10 pb-16">
          
          {/* Big Brand */}
          <div className="lg:col-span-6">
             <h2 className="font-display font-bold text-6xl md:text-8xl text-white tracking-tighter leading-none mb-8">
               AUREVO
             </h2>
             <p className="text-neutral-400 max-w-md font-light text-lg">
               Defining the intersection of brutalism and sustainability.
             </p>
          </div>
          
          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-ultra text-bronze-500 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-sm text-neutral-300 hover:text-white hover:pl-2 transition-all duration-300 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-ultra text-bronze-500 mb-8">Social</h4>
            <ul className="space-y-4">
              {['Instagram', 'LinkedIn', 'Behance', 'Pinterest'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-neutral-300 hover:text-white hover:pl-2 transition-all duration-300 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Aurevo Architects.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;