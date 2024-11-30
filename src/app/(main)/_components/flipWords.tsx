"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  word,
  className,
  border = 0,
}: {
  word: string;
  className?: string;
  border? : number;
}) => {
  const [currentWord, setCurrentWord] = useState(word);
  const ref = useRef(null);
  const inView = useInView(ref);


  useEffect(() => {
    setCurrentWord(word);
  },[word]);

  return (
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left px-2",
          className
        )}
        key={currentWord}
        ref={ref}
      >
        {inView && Array.from(currentWord).map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" , borderBottom: `0 solid black` }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" , borderBottom: `${border}px solid black` }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
  );
};
