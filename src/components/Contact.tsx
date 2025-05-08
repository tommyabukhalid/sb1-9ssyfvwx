import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { QRCode } from './QRCode';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-green-900/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Contact Us
          </h2>
          <p className="text-white max-w-3xl mx-auto">
            Get in touch with our team for inquiries or to discuss how we can
            help with your electrical and automation needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center max-w-5xl mx-auto">
          <div className="bg-green-100 rounded-xl shadow-md p-8 w-full lg:w-2/3">
            <h3 className="text-2xl font-bold mb-6 text-green-800">
              PT. VEAT INDONESIA GRUP
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <MapPin size={20} className="text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    Laladon Baru Residence BlokJ-11, Ciomas, Bogor.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <Phone size={20} className="text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">0813 1565 5950</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <Mail size={20} className="text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">sales@veatindo.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <Globe size={20} className="text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Website</h4>
                  <p className="text-gray-600">http://www.veatindo.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-col gap-6 w-full lg:w-1/3 ">
            <QRCode
              title="Phone"
              value="tel:+6281315655950"
              icon={<Phone size={24} className="text-green-700" />}
            />
            <QRCode
              title="Website"
              value="http://www.veatindo.com"
              icon={<Globe size={24} className="text-green-700" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
