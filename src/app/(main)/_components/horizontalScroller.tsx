"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Lenis from "@studio-freight/lenis";

export const ParallaxHorizontalScroll = ({
  images,
  className,
  imageH,
  imageW,
}: {
  images: string[];
  className?: string;
  imageH?: number;
  imageW?: number;
}) => {
  const gridRef = useRef<any>(null);
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    container: gridRef.current,
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("items-start max-h-[350px] md:h-[350px] rounded-md max-w-[600px] object-center overflow-hidden h-full w-full hover:scale-[1.02] transition-all duration-100", className)}
      ref={gridRef}
    >
      <div className="grid items-start mx-auto gap-4 overflow-x-hidden">
        <div className={cn("flex w-full h-[150px] md:h-[350px] overflow-x-hidden gap-4 mt-[-50px]", imageH && imageW && `h-[${imageH}px] mt-[-300px]`)}>
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ x: translateFirst, transitionDuration: "2s" }}
              key={`grid-1-${idx}`}
            >
              <Image
                src={el}
                className={cn("gap-2 h-[150px] md:h-[350px] rounded-md w-[400px] max-w-[200px] aspect-video object-cover !m-0 !p-0", imageH && imageW && `h-[${imageH}px] w-[${imageW}px] max-w-[${imageW}px] `)}
                height={imageH || 400}
                width={imageW || 400}
                alt="thumbnail"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        <div className={cn("flex w-full h-[150px] md:h-[350px] overflow-x-hidden gap-4", imageH && imageW && `h-[${imageH}px]`)}>
          {secondPart.map((el, idx) => (
            <motion.div style={{ x: translateSecond, transitionDuration: "2s" }} key={`grid-2-${idx}`}>
              <Image
                src={el}
                className={cn("gap-2 h-[150px] md:h-[350px] rounded-md w-[400px] max-w-[200px] aspect-video object-cover !m-0 !p-0", imageH && imageW && `h-[${imageH}px] w-[${imageW}px] max-w-[${imageW}px]`)}
                height={imageH || 400}
                width={imageW || 400}
                alt="thumbnail"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        <div className={cn("flex w-full h-[150px] md:h-[350px] overflow-x-hidden gap-4", imageH && imageW && `h-[${imageH}px]`)}>
          {thirdPart.map((el, idx) => (
            <motion.div style={{ x: translateThird, transitionDuration: "2s" }} key={`grid-3-${idx}`}>
              <Image
                src={el}
                className={cn("gap-2 h-[150px] md:h-[350px] rounded-md w-[400px] max-w-[200px] aspect-video object-cover !m-0 !p-0", imageH && imageW && `h-[${imageH}px] w-[${imageW}px] max-w-[${imageW}px]`)}
                height={imageH || 400}
                width={imageW || 400}
                alt="thumbnail"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
