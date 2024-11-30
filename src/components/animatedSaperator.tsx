import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { motion, MotionProps } from "framer-motion";
import React from "react";

interface AnimatedSeparatorProps extends MotionProps {
  className?: string;
  duration?: number;
}

const AnimatedSeparator: React.FC<AnimatedSeparatorProps> = ({
  className,
  duration = 2,
}) => {
  return (
    <motion.div
      className=" bg-primary-white"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: duration }}
    >
      <Separator
        className={cn(className, "h-px bg-[#D8D8D8] w-full opacity-50")}
      />
    </motion.div>
  );
};

export default AnimatedSeparator;
