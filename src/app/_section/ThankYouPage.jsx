
'use client';

import React, { useEffect } from 'react';

function ThankYouPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const whatsappNumber = '919910741417';
      window.location.href = `https://wa.me/${whatsappNumber}`;
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#101010] flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-2xl max-w-md w-full text-center animate-in fade-in zoom-in-90 duration-500">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2684ff] to-[#00ace5] opacity-20 blur-xl rounded-full"></div>
          <svg className="w-16 h-16 mx-auto text-[#2684ff] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
        <p className="text-[#b4b4b4] text-lg mb-6">
          Your message has been received. We'll connect with you shortly via WhatsApp.
        </p>
        <div className="w-full bg-[#242424] rounded-full h-2">
          <div className="bg-gradient-to-r from-[#2684ff] to-[#00ace5] h-2 rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
