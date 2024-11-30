"use client"

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ArrowIconButtonProps {
  invertArrow?: boolean;
  height?: number;
  width?: number;
  onClick: () => void;
  className?: string;
}

function ArrowIconButton({
  invertArrow,
  height,
  width,
  onClick,
  className,
}: ArrowIconButtonProps) {
  return (
    <div
      onClick={onClick}
      className={cn("bg-primary-natural border border-black relative rounded-full cursor-pointer !w-[34px] lg:w-[70px] !h-[34px] lg:h-[70px]", className)}
      style={{
        height: `${height ?? 32}px`,
        width: `${width ?? 32}px`,
      }}
    >
      <div className="relative h-full ">
        <Image
          className={`absolute top-0 rotate-180 p-[6px] ${
            invertArrow && "rotate180"
          }`}
          alt=""
          src={"/icons/angle_icon.svg"}
          fill
        />
      </div>
    </div>
  );
}

export default ArrowIconButton;
