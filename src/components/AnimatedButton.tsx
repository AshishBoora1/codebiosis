'use client'
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { HtmlHTMLAttributes, ReactNode, useEffect, useRef } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  btnClassName?: string;
  icon?: string;
  onClick?: () => void;
}

const AnimatedButton = ({ children, className, btnClassName,icon ,onClick }: AnimatedButtonProps) => {
  let ref = useRef<HTMLButtonElement>(null);

  const inView = useInView(ref, {
    once: true, // Trigger animation only once
    amount: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <button
      className={cn(`mt-8 relative Animatedbutton rounded-full text-lg lg:text-[28px] font-bold ps-5 pe-3 py-2 md:py-2.5 flex flex-row justify-center items-center gap-2 z-[5] overflow-visible border border-black  ` , className)}
      onClick={onClick}
      ref={ref}
    >
      <div className="z-10">
      {children}
      </div>
      <div className={cn("bg-primary-natural relative rounded-full h-8 lg:h-12 w-8 lg:w-12" , btnClassName)}>
        <motion.div
          initial={{ x: -15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 15, opacity: 0 }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            repeatDelay: 1,
          }}
          className="relative h-full"
        >
          <Image
            className="absolute top-0 p-[10px]"
            alt=""
            src={icon ? icon : "/icons/angle_icon.svg"}
            fill
          />
        </motion.div>
      </div>

      {/* {
        inView ? <svg
        viewBox={`0 0 ${ref?.current?.getBoundingClientRect().width || 0} ${ref?.current?.getBoundingClientRect().height || 0}`}
        fill="none"
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width={ref?.current?.getBoundingClientRect().width ? ref?.current?.getBoundingClientRect().width - 2 : 0}
          height={ref?.current?.getBoundingClientRect().height ? ref?.current?.getBoundingClientRect().height - 2 : 0}
          rx="30"
          fill="none"
          stroke="#222222"
          stroke-width="1"
          strokeDasharray="600, 600"
          className="animate-button-ellipse"
        ></rect>
      </svg> : null
      } */}

    </button>
  );
};

export default AnimatedButton;
