import React from 'react';
import SchneiderLogo from '../assets/images/partners/schneider.png';
import EdmiLogo from '../assets/images/partners/edmi.png';
import PLNLogo from '../assets/images/partners/pln-persero.png';
import PLNPowerLogo from '../assets/images/partners/pln-indonesia-power.png';
import AzbilLogo from '../assets/images/partners/azbil.png';

const partners = [
  { id: 1, name: 'PT. Schneider Indonesia', image: SchneiderLogo },
  { id: 2, name: 'PT. EDMI Indonesia', image: EdmiLogo },
  { id: 3, name: 'PT. PLN Persero', image: PLNLogo },
  { id: 4, name: 'PT. PLN Indonesia Power', image: PLNPowerLogo },
  { id: 5, name: 'PT. Azbil Berca Indonesia', image: AzbilLogo },
];

export const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Business Partners
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We work with leading companies in the industry to deliver
            top-quality solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors duration-300 flex items-center justify-center h-32 w-full"
            >
              <div className="text-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-auto max-h-20 object-contain mx-auto"
                />
                <p className="mt-2 text-sm text-white/80">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




// import React from 'react';

// const partners = [
//   {
//     id: 1,
//     name: 'PT. Schneider Indonesia',
//     imagePlaceholder: 'https://via.placeholder.com/200x100?text=Schneider',
//   },
//   {
//     id: 2,
//     name: 'PT. EDMI Indonesia',
//     imagePlaceholder: 'https://via.placeholder.com/200x100?text=EDMI',
//   },
//   {
//     id: 3,
//     name: 'PT. PLN Persero',
//     imagePlaceholder: 'https://via.placeholder.com/200x100?text=PLN+Persero',
//   },
//   {
//     id: 4,
//     name: 'PT. PLN Indonesia Power',
//     imagePlaceholder:
//       'https://via.placeholder.com/200x100?text=PLN+Indonesia+Power',
//   },
//   {
//     id: 5,
//     name: 'PT. Azbil Berca Indonesia',
//     imagePlaceholder: 'https://via.placeholder.com/200x100?text=Azbil+Berca',
//   },
// ];

// export const Partners: React.FC = () => {
//   return (
//     <section id="partners" className="py-20 bg-green-900 text-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Our Business Partners
//           </h2>
//           <p className="text-gray-300 max-w-3xl mx-auto">
//             We work with leading companies in the industry to deliver
//             top-quality solutions.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
//           {partners.map((partner) => (
//             <div
//               key={partner.id}
//               className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors duration-300 flex items-center justify-center h-32 w-full"
//             >
//               <div className="text-center">
//                 <img
//                   src={partner.imagePlaceholder}
//                   alt={partner.name}
//                   className="w-full h-auto max-h-20 object-contain mx-auto"
//                 />
//                 <p className="mt-2 text-sm text-white/80">{partner.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
