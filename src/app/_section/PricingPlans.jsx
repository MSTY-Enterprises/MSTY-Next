

// import React from 'react';
// import { Check } from 'lucide-react';

// const plans = [
//   {
//     title: 'Silver',
  
//     description: 'Ideal for startups and personal projects.',
//     features: [
//       '5-page website',
//       'Basic SEO',
//       'Responsive design',
//       '1-month support',
//     ],
//     popular: false,
//   },
//   {
//     title: 'Gold',
   
//     description: 'Best for small businesses looking to grow.',
//     features: [
//       '10-page website',
//       'Advanced SEO',
//       'CMS integration',
//       '3-month support',
//     ],
//     popular: true,
//   },
//   {
//     title: 'Platinum',
   
//     description: 'Professional websites with custom solutions.',
//     features: [
//       'Unlimited pages',
//       'Custom UI/UX design',
//       'E-commerce ready',
//       '6-month support',
//     ],
//     popular: false,
//   },
//   {
//     title: 'Platinum Plus',
    
//     description: 'Enterprise-level package with full service.',
//     features: [
//       'All Platinum features',
//       'Dedicated manager',
//       'Ongoing maintenance',
//       '1-year priority support',
//     ],
//     popular: false,
//   },
// ];

// const PricingPlans = () => {
//   return (
//     <section className="py-12 px-4 max-w-7xl mx-auto">
//         <h3 class=" text-[#121212] rounded-4xl w-fit text-[16px] mb-3 ">Package</h3>
//       <h2 className="text-5xl max-sm:text-3xl text-[#121212] font-extrabold mb-3.5 mb-10">Flexible Plans. Powerful Results</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//         {plans.map((plan) => (
//           <div
//             key={plan.title}
//             className={`rounded-2xl border p-6 shadow-lg transition hover:scale-[1.02] duration-300 ${
//               plan.popular ? 'border-yellow-500 ring-2 ring-yellow-400 bg-yellow-50' : 'bg-white'
//             }`}
//           >
//             <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
          
//             <p className="text-gray-600 mb-6">{plan.description}</p>
//             <ul className="space-y-3 mb-6">
//               {plan.features.map((feature, index) => (
//                 <li key={index} className="flex items-center gap-2 text-sm">
//                   <Check className="text-green-500 w-4 h-4" />
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//             <button className="w-full cursor-pointer bg-black text-white py-2 rounded-xl hover: bg-[#0ea7e2]  transition-all duration-200 ease-in">
//               Choose {plan.title}
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;

import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    title: 'Silver',
    description: 'Ideal for startups and personal projects.',
    features: [
      'Up to 5 pages',
      'Free Domain & Hosting',
      'Social Profile Link',
      'Basic SEO setup',
      'Mobile Responsive',
      'Support ',
      
    ],
    popular: false,
  },
  {
    title: 'Gold',
    description: 'Best for small businesses looking to grow.',
    features: [
      'Up to 10 pages',
      'Free Domain & Hosting',
      'Social Profile Link',
      'Advanced SEO setup',
      'Mobile Responsive',
      '2 Hours Free Support',
      'Initial branding guidelines (colors, fonts, styles)',
      'Support',
    
    ],
    popular: true,
  },
  {
    title: 'Platinum',
    description: 'Professional websites with custom solutions.',
    features: [
      'Up to 25 pages',
      'Free Domain & Hosting',
      'Social Profile Link',
      'Mobile Responsive',
      'Custom-designed layouts and interactive elements',
      'User experience (UX) and interface (UI) design',
      'SEO content: 10 pages + 5 blog posts',
      '4 Hours Free Support',
      'Initial branding guidelines (colors, fonts, styles)',
      'Extend Support Services',
     
    ],
    popular: false,
  },
  {
    title: 'Platinum Plus',
    description: 'Enterprise-level package with full service.',
    features: [
      'All Platinum features',
      'Unlimited pages',
      'Dedicated account manager',
      'Ongoing maintenance & updates',
      '1-year priority support',
    ],
    popular: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h3 className="text-[#121212] rounded-4xl w-fit text-[16px] mb-3">Package</h3>
      <h2 className="text-5xl max-sm:text-3xl text-[#121212] font-extrabold mb-10">
        Flexible Plans. Powerful Results
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 ">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`h-fit rounded-2xl border p-6 shadow-lg transition hover:scale-[1.02] duration-300 ${
              plan.popular ? 'border-yellow-500 ring-2 ring-yellow-400 bg-yellow-50' : 'bg-white'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Check className="text-green-500 w-4 h-4" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href='#contact'>   <button className="w-full cursor-pointer bg-black text-white py-2 rounded-xl hover:bg-[#0ea7e2] transition-all duration-200 ease-in">
              Know More
            </button></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;

