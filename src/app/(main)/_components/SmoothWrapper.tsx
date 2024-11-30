"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

// import { useEffect, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, {});

const SmoothWrapper = ({ children }: { children: React.ReactNode }) => {
  // const container = useRef(null);

  // const { contextSafe } = useGSAP({ scope: container });

  // useEffect(() => {
  //   ScrollSmoother.create({
  //     smooth: 1,
  //     effects: true,
  //     smoothTouch: 0.1,
  //   });
  // }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 3000,smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothWrapper;
