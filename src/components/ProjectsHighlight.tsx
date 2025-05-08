import React from 'react';
import { Building, Factory, Server, Cpu, Activity } from 'lucide-react';
import { ProjectCategory } from './ProjectCategory';

const projectCategories = [
  {
    id: 1,
    title: 'Maintenance BAS',
    icon: <Building size={24} />,
    projects: [
      'WTC 1, 2, 3, 5 & 6',
      'Menara Astra',
      'Mahkamah Agung',
      'MNC Tower',
      'MRCC Siloam Hospital',
      'PT Mandom',
    ],
  },
  {
    id: 2,
    title: 'Additional Point BAS',
    icon: <Server size={24} />,
    projects: [
      'Shanghiang, Toyobo',
      'Enesis, ESDM',
      'PIM II, Puri Indah',
      'Mall Alam Sutra',
      'Plaza Mutiara',
      'Pacific Place',
      'PT Bekart, NSK',
      'Kualanamu Air Port',
    ],
  },
  {
    id: 3,
    title: 'Electrical & Automation',
    icon: <Cpu size={24} />,
    projects: [
      'HMI for Sum Energy Meter',
      'Supply & Install Genset 250KVA - PT Mubalink',
      'Install KWH meter 400 pcs - Energy Building MEDCO',
      'Install VAV Control - WTC 1 Sudirman',
      'Supply & Install Early Warning System – PT PGS, PLN IP Mrica',
    ],
  },
  {
    id: 4,
    title: 'Mechanical',
    icon: <Factory size={24} />,
    projects: [
      'Install Valve - Energy Building',
      'Install Valve & Sensor HVAC - WTC Building',
    ],
  },
  {
    id: 5,
    title: 'Energy Management Systems',
    icon: <Activity size={24} />,
    projects: [
      'GRP Steel Manufacture',
      'PLN Litbang – UI',
      'Tsu Chi Hospital',
      'Graha Paramitha',
      'Adis Footwear',
      'SOHO Industries',
      'JKT Living',
    ],
  },
];

export const ProjectsHighlight: React.FC = () => {
  return (
    <section
      id="projects"
      // className="py-20 bg-gradient-to-b from-green-900/30 to-white"
      className="py-20 bg-gradient-to-b from-green-900/40 to-green-900/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
            Our Project Experience
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Over the years, we have completed numerous projects across diverse
            sectors. Here's a highlight of our project experience.
          </p>
          {/* <div className="mt-4">
            <a
              href="#projects"
              className="text-green-600 font-medium hover:text-green-800 transition-colors duration-200 inline-flex items-center"
            >
              See all projects
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCategories.map((category) => (
            <ProjectCategory key={category.id} category={category} />
          ))}
        </div>


      </div>
    </section>
  );
};
