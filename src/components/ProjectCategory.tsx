import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCategoryProps {
  category: {
    id: number;
    title: string;
    icon: React.ReactNode;
    projects: string[];
  };
}

export const ProjectCategory: React.FC<ProjectCategoryProps> = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: category.id * 0.1 }}
      className="bg-green-600/20 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-green-100 group"
    >
      <div className="bg-green-700 p-4 flex items-center">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="bg-white/10 p-2 rounded-full text-green-200 mr-3"
        >
          {category.icon}
        </motion.div>
        <h3 className="font-bold text-white">{category.title}</h3>
      </div>
      <div className="p-6 bg-gradient-to-b from-green-50/50 to-transparent">
        <ul className="space-y-3">
          {category.projects.map((project, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-sm text-gray-800 flex items-start"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></div>
              </div>
              <span>{project}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};