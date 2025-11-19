import React, { useState } from 'react';
import { X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-onyx/90 backdrop-blur-md transition-opacity" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-2xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-1 h-full bg-bronze-500"></div>
        
        {/* Header */}
        <div className="p-8 md:p-10 flex justify-between items-center border-b border-gray-100">
          <div>
             <h2 className="text-2xl font-display font-bold text-onyx">PROJECT INQUIRY</h2>
             <p className="text-neutral-400 text-xs uppercase tracking-ultra mt-2">Define your vision</p>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-onyx transition-colors">
            <X size={24} strokeWidth={1} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 bg-stone-50">
               <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-ultra text-neutral-400 mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white border border-gray-200 p-3 focus:border-bronze-500 text-onyx outline-none transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-ultra text-neutral-400 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-white border border-gray-200 p-3 focus:border-bronze-500 text-onyx outline-none transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                 </div>
                 <div>
                   <label className="block text-xs font-bold uppercase tracking-ultra text-neutral-400 mb-2">Scope & Vision</label>
                   <textarea 
                    rows={5} 
                    className="w-full bg-white border border-gray-200 p-4 focus:border-bronze-500 text-onyx outline-none resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                   ></textarea>
                 </div>
                 <button className="w-full bg-onyx text-white py-4 text-xs font-bold uppercase tracking-ultra hover:bg-bronze-500 transition-colors">
                   Send Inquiry
                 </button>
               </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;