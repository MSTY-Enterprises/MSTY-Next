import Image from "next/image";
import Hero from "./_section/Hero";
import Logo from "./_section/Logo";
import Video from "./_section/Video";
import Fallingcard from "@/utilites/Fallingcard";
import About from "./_section/About";
import Service from "./_section/Service";
import Project from "./_section/Project";
import Success from "./_section/Success";
import Testimonials from "./_section/Testimonials";
import Faq from "./_section/Faq";
import Blog from "./_section/Blog";
import Contact from "./_section/Contact";

export default function Home() {
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
