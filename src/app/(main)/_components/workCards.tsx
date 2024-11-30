"use client";

import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React from "react";
import { ParallaxHorizontalScroll } from "./horizontalScroller";
import { images } from "@/components/data/images";
import { ParallaxTiltedScroll } from "./tiltedScroller";

interface WorkCardProps {
  img?: string;
  name?: string;
  description?: string;
  strategy?: string;
  design?: string;
  id?: string;
  hideLowerSection?: boolean;
}

const WorkCards = ({
  img,
  name,
  description,
  strategy,
  design,
  cardType,
  imgArray,
  id,
  onClick,
  hideLowerSection = false,
}: WorkCardProps & { cardType?: string } & { imgArray?: string[] } & {
  onClick?: () => void;
}) => {
  return (
    <div className="max-2xl:max-w-[900px] 2xl:!w-full 2xl:px-16">
      <div className="relative">
        {cardType === "horizontal" ? (
          <ParallaxHorizontalScroll images={imgArray || images} />
        ) : (
          <ParallaxTiltedScroll images={imgArray || images} />
        )}

        {/* <Image
          src='/icons/angle_icon.svg'
          alt=''
          width={25}
          height={25}
          className='absolute -bottom-10 outline outline-8 outline-primary-white right-5 w-14 h-14 bg-primary-natural rounded-full p-2 md:hidden'
        /> */}
        <span
          onClick={onClick}
          className="absolute -bottom-10 outline outline-8 outline-primary-white right-5 w-14 h-14 bg-primary-natural rounded-full p-2 md:hidden flex justify-center items-center"
        >
          <svg
            width="17"
            height="22"
            viewBox="0 0 17 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.438008 4.97485L0.438008 0.200779L16.3516 8.39096L16.3516 13.6106L0.438006 21.8008L0.438007 17.0267L11.673 11.0008L0.438008 4.97485Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div
          className={` flex flex-col lg:flex-row lg:justify-center lg:text-center my-7 md:mt-12 ${
            hideLowerSection ? "flex flex-col" : "flex lg:items-center gap-1"
          }`}
        >
          <span className="text-2xl lg:text-3xl xl:text-[38px] text-black font-bold ">
            {name}
          </span>{" "}
          {!hideLowerSection && (
            <span className="text-[#8D8D8D] text-sm sm:text-xl xl:text-[26px] font-normal">
              
             <span className="hidden lg:block"> : {description}</span>
             <span className="lg:hidden block">  {description}</span>
            </span>
          )}
          {hideLowerSection && (
            <span className="text-[#8D8D8D] text-sm sm:text-xl xl:text-[26px] font-normal">
              
              {description}
            </span>
          )}
        </div>

        {!hideLowerSection && (
          <div className="flex lg:justify-center">
            <div className="flex-1">
              <div className="lg:text-center text-xl sm:text-2xl xl:text-[28px] font-bold text-[#525252] py-1">
                Strategy
              </div>
              <div className="text-[12px] text-[#525252] sm:text-base xl:text-xl text-start lg:text-center mt-2 font-bold">
                {strategy}
              </div>
            </div>
            <Separator className="w-px bg-[#D8D8D8] mx-6" />
            <div className="flex-1">
              <div className="lg:text-center text-xl sm:text-2xl xl:text-[28px] font-bold text-[#525252] py-1">
                Design
              </div>
              <div className="text-[12px] text-[#525252] sm:text-base xl:text-xl text-start lg:text-center mt-2 font-bold">
                {design}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkCards;
