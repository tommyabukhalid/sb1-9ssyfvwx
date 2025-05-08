import React from 'react';
import { Cpu, Zap, PenTool as Tool, Code } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-20 bg-gradient-to-b from-green-900 via-green-800 to-green-700 text-white"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-blue-300">Electrical</span> 
            <span className="text-green-100"> & </span>
            <span className="text-blue-300">Automation </span> 
            <span className="text-green-100">Excellence</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 mt-8">
            PT VEAT Indonesia Grup provides comprehensive electrical and
            automation services to optimize your operations and drive
            efficiency.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="px-6 py-3 bg-transparent border-2 border-green-400 hover:bg-green-400/20 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Our Services
            </a>
          </div> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">

        <div className="bg-green-800/70 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-green-800 transition-all duration-500 transform hover:-translate-y-1">
            <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="text-green-300" size={28} />
            </div>
            <h3 className="font-semibold text-xl mb-2">Electrical</h3>
            <p className="text-gray-300 text-sm">VSD, MCCB, CAPACITOR, KWH</p>
          </div>
          <div className="bg-green-800/70 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-green-800 transition-all duration-500 transform hover:-translate-y-1">
            <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Cpu className="text-green-300" size={28} />
            </div>
            <h3 className="font-semibold text-xl mb-2">Automation</h3>
            <p className="text-gray-300 text-sm">BAS, DDC, SCADA, HMI, PLC</p>
          </div>

          <div className="bg-green-800/70 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-green-800 transition-all duration-500 transform hover:-translate-y-1">
            <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Tool className="text-green-300" size={28} />
            </div>
            <h3 className="font-semibold text-xl mb-2">Mechanical</h3>
            <p className="text-gray-300 text-sm">Sensors & Actuators</p>
          </div>

          <div className="bg-green-800/70 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-green-800 transition-all duration-500 transform hover:-translate-y-1">
            <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Code className="text-green-300" size={28} />
            </div>
            <h3 className="font-semibold text-xl mb-2">Development</h3>
            <p className="text-gray-300 text-sm">Software & Hardware</p>
          </div>
        </div>
      </div>
    </section>
  );
};
