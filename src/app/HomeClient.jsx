// components/HomeClient.jsx
"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from "@/app/_section/Hero";
import Logo from "@/app/_section/Logo";
import Video from "@/app/_section/Video";
import Fallingcard from "@/utilites/Fallingcard";
import About from "@/app/_section/About";
import Service from "@/app/_section/Service";
import Project from "@/app/_section/Project";
import Success from "@/app/_section/Success";
import Testimonials from "@/app/_section/Testimonials";
import Faq from "@/app/_section/Faq";
import Blog from "@/app/_section/Blog";
import Contact from "@/app/_section/Contact";

export default function HomeClient() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <main>
      <Hero />
      <Logo />
      <Video />
      <Fallingcard />
      <About />
      <Service />
      <Project />
      <Success />
      <Testimonials />
      <Faq />
      <Blog />
      <Contact />
    </main>
  );
}
