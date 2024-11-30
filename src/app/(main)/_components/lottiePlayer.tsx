"use client";

import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import { useInView } from 'framer-motion';

const LottieAnimation = ({ animationData , className , noAnimation = false} : any) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true, // Trigger animation only once
  })
  

    const interactivity : any = {
        mode: "scroll",
        actions: [
          {
            visibility: [0, 0.2],
            type: "stop",
            frames: [0],
          },
          {
            visibility: [0.2, 0.45],
            type: "seek",
            frames: [0],
          },
          {
            visibility: [0.45, 1.0],
            type: "once",
            frames: [0 , animationData.op],
          }
        ],
      };

  return (
    <div ref={ref}>
      {
        inView && 
        <Lottie 
        height={400}
        width={400}
        animationData={animationData}
        
        loop = {false}
        className={className}
      />
      }
   
      </div>
  );
};

export default LottieAnimation;
