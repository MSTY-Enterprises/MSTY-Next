'use client';

import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import logo from "@/assets/images/footer-logo.svg";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
  };

  const Linkdata = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Sales & Offer", link: "/Offer" },
    { id: 5, name: "Portfolio", link: "/portfolio" },
    
    { id: 6, name: "Blogs", link: "/blogs" },
    { id: 7, name: "Careers", link: "/career" },
    { id: 8, name: "Get Quote", link: "/Quote" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="relative overflow-hidden  mb-12  max-sm:hidden " >
      <div className="bg-[#55d0ff] text-slate-700 py-3 px-4 text-sm max-sm:hidden fixed w-full z-[999] mb-3.5 " >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <IoIosNotificationsOutline className="w-6 h-6" />
            <span className="font-medium">
              We Will Grow Your Business To The Next Level
            </span>
          </div>
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 font-medium text-sm">
            <li className="flex items-center gap-2 ">
              <HiOutlineMailOpen className="w-5 h-5" />
              <a
                href="mailto:info@mstyenterprises.com"
                className="hover:underline"
              >
                info@mstyenterprises.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <LuPhone className="w-5 h-5" />
              <a href="tel:+919910741417" className="hover:underline">
                +91 99107 41417
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>

      {/* Main Nav */}
      <header className="border-b border-[#e3e3e3] py-6 px-4 relative z-50 "  >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="/" aria-label="Home">
              <Image src={logo} alt="MSTY Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-[#151515] text-[16px] items-center">
            {Linkdata.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="hover:text-[#55d0ff] transition font-normal"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/contactus"
              className="flex items-center text-white gap-2 font-normal bg-[#1b1b1b] p-2 px-6 relative border border-neutral-700 transition-all duration-200 ease-in text-lg hover:text-black group overflow-hidden z-10 pr-6.5 get-in-touch-button"
            >
              <span>Contact Us</span>
              <GoArrowUpRight className="w-[18px] h-[18px]" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-2xl text-black z-[999999]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col pt-20 px-4 overflow-y-auto">
            <nav className="flex flex-col gap-6 text-[#151515] text-[18px]">
              {Linkdata.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="hover:text-[#55d0ff] transition font-medium"
                  onClick={closeMenus}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contactus"
                className="mt-6 flex items-center gap-2 bg-[#1b1b1b] text-white px-5 py-3 rounded-md hover:bg-[#55d0ff] hover:text-black transition duration-200 max-w-max"
                onClick={closeMenus}
              >
                Contact Us <GoArrowUpRight className="w-5 h-5" />
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Nav;
