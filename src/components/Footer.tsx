import React from 'react';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-6">
            <div className="bg-green-500 p-2 rounded-full mr-2">
              <Zap size={20} className="text-white" />
            </div>
            <span className="font-bold text-xl">VEAT</span>
          </div>
          
          <div className="text-center">
            <p className="text-green-300 mb-2">Electrical & Automation Excellence</p>
            <nav className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#partners" className="text-gray-300 hover:text-white transition-colors">Partners</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
            <p className="text-gray-400">© 2025 PT VEAT Indonesia Grup. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};