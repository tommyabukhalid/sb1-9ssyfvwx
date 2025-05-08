import React from 'react';
import { QRCodeCanvas as QRCodeImage } from 'qrcode.react';

// import { QRCode as QRCodeImage } from 'qrcode.react';

interface QRCodeProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export const QRCode: React.FC<QRCodeProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-green-100 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
      <div className="bg-green-100 p-3 rounded-full mb-4">{icon}</div>
      <h4 className="font-medium text-gray-900 mb-3">{title} QR Code</h4>
      
      <div className="w-32 h-32 bg-white flex items-center justify-center rounded overflow-hidden mb-2">
        <QRCodeImage value={value} size={128} fgColor="#064e3b" />
      </div>

      <p className="text-sm text-gray-600">
        Scan to {title === 'Phone' ? 'call us' : title === 'Email' ? 'send email' : title === 'Location' ? 'visit Us' : 'visit our website'}
      </p>
    </div>
  );
};
