import React from "react";
import img1 from "@/assets/images/footer-white.svg";
import img2 from "@/assets/images/footer-logo.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const Linkdata = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Services",
      link: "/services",
    },
    {
      id: 3,
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/blogs",
    },
    {
      id: 5,
      name: "Careers",
      link: "/career",
    },
  ];
  const Services = [
    {
      id: 1,
      name: "Web Development",
      link: "/services/WebsiteDesign",
    },
    {
      id: 2,
      name: "Content Writing",
      link: "/services/ContentWritting",
    },
    {
      id: 3,
      name: "Digital Marketing",
      link: "/services/DigitalMarketing",
    },
    {
      id: 4,
      name: "Business Solutions",
      link: "/services/BusinessSolution",
    },
    {
      id: 5,
      name: "UI UX Designing",
      link: "/services/Uiux",
    },
  ];
  const Social = [
    {
      id: 1,
      name: "Facebook",
      link: "https://www.facebook.com/people/MSTYEnterprises/61566355984656/",
    },
    {
      id: 2,
      name: "Instagram",
      link: "https://www.instagram.com/mstyenterprises/",
    },
    {
      id: 3,
      name: "Twitter",
      link: "https://x.com/mstyenterp89085",
    },
    {
      id: 3,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/msty-39774332a/",
    },
    {
      id: 4,
      name: "Pinterest",
      link: "https://in.pinterest.com/mstyenterprises/",
    },
  ];
  return (
    <>
      <footer className="bg-[#090909] text-[#8b8b8b] pt-16 pb-8 px-3 max-sm:pb-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Description + Social */}
          <div>
            <a href="/" className=" relative group w-[80px] block h-[80px]">
              <Image
                src={img2}
                alt="Mysty Enterprises"
                className=" w-[80px]  mb-3 hidden group-hover:block"
              />
              <Image
                src={img1}
                alt="Mysty Enterprises"
                className=" w-[80px]  mb-3  top-0 left-0 group-hover:hidden "
              />
            </a>



            <p className="text-[16px] leading-relaxed text-[#a1a1a1]">
              Mysty Enterprise is a global UI/UX design agency that boosts brand
              value with user-friendly, effective designs for web, mobile, and
              SaaS platforms.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {Social.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  target="blank"
                  className="hover:bg-gradient-to-r hover:from-[#2684ff] hover:to-[#00ace5] 
               hover:bg-clip-text hover:text-transparent 
               transition-all duration-500 ease-in-out"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {Linkdata.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.link}
                    className="hover:bg-gradient-to-r hover:from-[#2684ff] hover:to-[#00ace5] 
               hover:bg-clip-text hover:text-transparent 
               transition-all duration-500 ease-in-out"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {Services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.link}
                    className="hover:bg-gradient-to-r hover:from-[#2684ff] hover:to-[#00ace5] 
               hover:bg-clip-text hover:text-transparent 
               transition-all duration-500 ease-in-out"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@mstyenterprises.com"
                  className="hover:bg-gradient-to-r hover:from-[#2684ff] hover:to-[#00ace5] 
               hover:bg-clip-text hover:text-transparent 
               transition-all duration-500 ease-in-out block"
                >
                  info@mstyenterprises.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919910741417"
                  className="hover:bg-gradient-to-r hover:from-[#2684ff] hover:to-[#00ace5] 
               hover:bg-clip-text hover:text-transparent 
               transition-all duration-500 ease-in-out block"
                >
                  +91 99107 41417
                </a>
              </li>
              <li>
                <span className="block hover:bg-gradient-to-r hover:from-[#2684ff] hover:to-[#00ace5] 
               hover:bg-clip-text hover:text-transparent 
               transition-all duration-500 ease-in-out">
                  33/33A, Tower No. 6, 3rd Floor, Rama Road, Industrial Area,
                  New Delhi 110015
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1f1f1f] mt-10 pt-4 text-center text-sm text-white">
          &copy; {new Date().getFullYear()} MSTY Enterprises. All Rights
          Reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
