
'use client'

import React from "react";

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const sendData = async (data) => {
    // ✅ WhatsApp redirect BEFORE async call (mobile-friendly)
    const whatsappNumber = '919910741417';
    window.location.href = `https://wa.me/${whatsappNumber}`;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormData({
          name: "",
          mobile: '',
          email: '',
          message: ''
        });
      } else {
        console.error('Something went wrong');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataObj = new FormData(e.target);
    const data = Object.fromEntries(formDataObj);
    sendData(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-[#101010] pt-16 pb-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
              Let’s start a project together.
            </h1>
            <p className="text-lg text-[#b4b4b4] leading-7 mb-6">
              We’d love to hear from you! Share your ideas, ask questions,
              or simply say hello. Let’s connect and explore how we can make
              your vision a reality.
            </p>
            <ul className="text-white text-lg space-y-3">
              <li className="mb-4.5">
                <h2 className="text-[15px] text-[#b4b4b4] font-medium mb-2.5 max-sm:mb-0.5">Phone No & WhatsApp</h2>
                <a href="tel:+919910741417" className="max-sm:text-2xl hover:bg-gradient-to-r hover:from-[#2684ff] hover:to-[#00ace5] hover:bg-clip-text hover:text-transparent transition-all duration-500 ease-in-out text-3xl">
                  +91 99107 41417
                </a>
              </li>
              <li>
                <h2 className="text-[15px] text-[#b4b4b4] font-medium mb-2.5 max-sm:mb-0.5">Email ID</h2>
                <a href="mailto:info@mstyenterprises.com" className="hover:bg-gradient-to-r hover:from-[#2684ff] hover:to-[#00ace5] hover:bg-clip-text hover:text-transparent transition-all duration-500 ease-in-out text-3xl max-sm:text-2xl">
                  info@mstyenterprises.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Form */}
        <div>
          <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="First Name"
                required
                className="flex-1 bg-[#242424] border border-[#323232] text-white p-4 rounded-lg placeholder:text-[#dddcd0] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 bg-[#242424] border border-[#323232] text-white p-4 rounded-lg placeholder:text-[#dddcd0] focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email ID"
                required
                className="flex-1 bg-[#242424] border border-[#323232] text-white p-4 rounded-lg placeholder:text-[#dddcd0] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Phone No"
                required
                className="flex-1 bg-[#242424] border border-[#323232] text-white p-4 rounded-lg placeholder:text-[#dddcd0] focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Enter Your Message"
              className="w-full bg-[#242424] border border-[#323232] text-white p-4 rounded-lg placeholder:text-[#dddcd0] focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button
              type="submit"
              className="bg-white text-black font-semibold text-lg py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

