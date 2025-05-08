import React from 'react';
import { motion } from 'framer-motion';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    details: string[];
  };
}

export const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: service.id * 0.1 }}
      className="bg-green-600/20 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-green-100 group"
    >
      <div className="bg-green-800 p-4 flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="bg-white/10 p-3 rounded-full text-green-400"
        >
          {service.icon}
        </motion.div>
      </div>
      <div className="p-6 bg-gradient-to-b from-green-50/50 to-transparent">
        <h3 className="font-bold text-xl mb-3 text-green-900">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
        <ul className="space-y-2">
          {service.details.map((detail, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center text-sm text-gray-700"
            >
              <div className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></div>
              {detail}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
