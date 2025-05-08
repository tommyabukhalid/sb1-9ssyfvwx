import React from 'react';
import { Cpu, Zap, PenTool as Tool, Code } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Electrical',
    description:
      'Comprehensive electrical services covering Molded Case Circuit Breakers (MCCB), Power Factor Correction (PFC), kWh metering, and panel installations.',
    icon: <Zap size={24} />,
    details: [
      'MCCB Installation',
      'Power Factor Correction',
      'KWH Metering',
      'Panel Design & Installation',
      'Electrical System Integration',
    ],
  },
  {
    id: 2,
    title: 'Automation',
    description:
      'Advanced automation solutions including Human Machine Interface (HMI), Programmable Logic Controllers (PLC), Direct Digital Control (DDC), Gateways, and Data Loggers.',
    icon: <Cpu size={24} />,
    details: [
      'HMI Implementation',
      'PLC Programming',
      'DDC Systems',
      'Gateway Configuration',
      'Data Logging Solutions',
    ],
  },
  {
    id: 3,
    title: 'Mechanical',
    description:
      'Expert installation of sensors and actuators for industrial and commercial applications, ensuring reliable mechanical system performance.',
    icon: <Tool size={24} />,
    details: [
      'Sensor Installation',
      'Actuator Mounting',
      'Mechanical Integration',
      'System Calibration',
      'Performance Testing',
    ],
  },
  {
    id: 4,
    title: 'Development',
    description:
      'Custom software and hardware development for Energy Management Systems (EMS), APIs, System Access Solutions (SAS), and Gateway implementation.',
    icon: <Code size={24} />,
    details: [
      'EMS Software Development',
      'API Integration',
      'SAS Implementation',
      'Gateway Development',
      'Custom Hardware Solutions',
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-green-900/40 to-green-900/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
            Our Services
          </h2>
          <p className="text-white-600 max-w-3xl mx-auto">
            PT VEAT Indonesia Grup provides a comprehensive range of electrical
            and automation services to meet your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
