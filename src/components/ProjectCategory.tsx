import React from 'react';

interface ProjectCategoryProps {
  category: {
    id: number;
    title: string;
    icon: React.ReactNode;
    projects: string[];
  };
}

export const ProjectCategory: React.FC<ProjectCategoryProps> = ({
  category,
}) => {
  return (
    // <div className="bg-gradient-to-b from-green-900/30 to-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-200">
    <div className="bg-green-600/20 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-green-100 group">
        <div className="bg-green-700 p-4 flex items-center">
        <div className="bg-white/10 p-2 rounded-full text-green-200 mr-3">
          {category.icon}
        </div>
        <h3 className="font-bold text-white">{category.title}</h3>
      </div>
      <div className="bg-green-600/20 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-green-100 group p-5">
        <ul className="space-y-3">
          {category.projects.map((project, index) => (
            <li key={index} className="text-sm text-gray-00 flex">
              <div className="flex-shrink-0 mt-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
              </div>
              <span>{project}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
