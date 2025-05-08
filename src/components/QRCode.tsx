import React from 'react';

interface QRCodeProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export const QRCode: React.FC<QRCodeProps> = ({ title, value, icon }) => {
  // For demonstration purposes, we're using a placeholder
  // In a real application, you would generate an actual QR code
  return (
    <div className="bg-green-100 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
      <div className="bg-green-100 p-3 rounded-full mb-4">{icon}</div>
      <h4 className="font-medium text-gray-900 mb-3">{title} QR Code</h4>
      <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded mb-2">
        {/* Replace with actual QR code in production */}
        <p className="text-xs text-gray-500">QR Code for {value}</p>
      </div>
      <p className="text-sm text-gray-600">
        Scan to {title === 'Phone' ? 'call us' : 'visit our website'}
      </p>
    </div>
  );
};
