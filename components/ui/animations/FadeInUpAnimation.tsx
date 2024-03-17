"use client"

import {AnimationControls, motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const animationEffect = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  hidden: {
    y: 100,
    opacity: 0.2,
  },
};

const FadeInUpAnimation = ({ children }: any) => {
  const control: AnimationControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    // else {
    //     control.start("hidden");
    // }
  }, [control, inView]);

  return (
    <motion.div
      className="fadeInUpAnimation"
      ref={ref}
      variants={animationEffect}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUpAnimation;
