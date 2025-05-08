import React, { useState, useEffect } from 'react';
import { Zap, Printer } from 'lucide-react';
import { NavLink } from './NavLink';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-green-900 shadow-md py-2' : 'bg-transparent py-4'
      } print:static print:bg-transparent print:text-black`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="bg-green-500 p-2 rounded-full print:bg-green-700">
              <Zap size={24} className="text-white print:text-white" />
            </div>
            <span className="font-bold text-2xl text-white print:text-green-900">VEAT</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#partners">Partners</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <button
            onClick={handlePrint}
            className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg transition-colors duration-200 text-sm print:hidden"
          >
            <Printer size={16} />
            <span>Print</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={handlePrint}
            className="text-white print:hidden bg-green-500 p-1.5 rounded-lg"
            aria-label="Print"
          >
            <Printer size={16} />
          </button>
          <button 
            className="text-white focus:outline-none print:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-green-900 shadow-lg print:hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <NavLink href="#home" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
            <NavLink href="#services" onClick={() => setMobileMenuOpen(false)}>Services</NavLink>
            <NavLink href="#partners" onClick={() => setMobileMenuOpen(false)}>Partners</NavLink>
            <NavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</NavLink>
            <NavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};