'use client'
import React, { useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";


function Video() {
  const section = useRef();
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "start center"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0.95, 1]);


  return (
    <motion.div
      ref={section}
      className="mx-auto flex justify-center item-center mt-18 max-sm:mt-7"
    >
      <motion.video
        autoPlay
        muted
        loop
        style={{ scaleX }}
        playsInline
        preload="auto"
        className="h-auto"
      >
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

    </motion.div>
  );
}

export default Video;
