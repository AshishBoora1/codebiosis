"use client";

import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import solution from '../../../../public/Home_Page/homepage_images/powerAi-mobile-img.png'
import { ourWorkData } from "./ourWork";

const OurServiceSection = () => {
  // const scrollRef = useRef(null); 1st & 2nd Method
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    {
      /* 1st Method */
    }

    // const totalWidth = scrollContainer.scrollWidth;
    // const scrollDuration = (totalWidth / 100) * 3;

    // const keyframes = [
    //   { transform: 'translateX(0)' },
    //   { transform: `translateX(-${totalWidth / 2}px)` }
    // ];

    // const scrollAnimation = scrollContainer.animate(keyframes, {
    //   duration: scrollDuration * 1000,
    //   iterations: Infinity,
    //   easing: 'linear'
    // });

    // return () => scrollAnimation.cancel();

    {
      /* 2nd Method */
    }

    if (scrollContainer) {
      const totalWidth = scrollContainer.scrollWidth;
      const scrollDuration = (totalWidth / 100) * 3;

      const keyframes = [
        { transform: "translateX(0)" },
        { transform: `translateX(-${totalWidth / 2}px)` },
      ];

      const scrollAnimation = scrollContainer.animate(keyframes, {
        duration: scrollDuration * 1000,
        iterations: Infinity,
        easing: "linear",
      });

      return () => scrollAnimation.cancel();
    }
  }, []);

  return (
    <div id="oursolution" className="pb-24 pt-2.5 md:pt-24">
      <div className="flex gap-4 items-center mb-5 md:mb-[70px]">
        <Image
          src={"/vectors/Union.svg"}
          alt=""
          height={30}
          width={30}
          className="hidden md:block"
        />
        <h3 className="text-lg font-normal text-[#525252] sm:text-3xl lg:text-[42px]">
          Our Solutions
        </h3>
      </div>

      <div className="overflow-x-hidden relative">
        <div ref={scrollRef} className=" flex whitespace-nowrap ">
          {ourWorkData.concat(ourWorkData).map((work, index) => (
            <Link href="/services" target="_blank" key={index} passHref>
              <div
                key={index}
                className="w-screen md:w-[48vw] 2xl:w-[30vw] px-5 bg-white border-r-[0.5px] border-y-0 border-[#dbdbdb] text-center cursor-pointer lg:px-10 flex flex-col justify-between"
              >
                <div className="min-h-[400px]">
                  <h3 className="text-[34px] lg:text-5xl xl:text-6xl text-black font-medium mb-3 text-wrap line-clamp-2">
                    {work.title}
                  </h3>

                  <p className="text-lg sm:text-xl lg:text-3xl text-gray-600 text-wrap mb-3 mt-5 leading-6 lg:leading-10">
                    {work.description}
                  </p>
                </div>
               <div className="lg:mt-10 w-full">
               <Image
                  src={work.image}
                  alt={work.title}
                  width={100}
                  height={100}
                  className="w-full mx-auto hidden lg:block lg:w-full h-auto mb-4 rounded-lg"
                />
              
               <Image
                  src={solution}
                  alt={work.title}
                  width={100}
                  height={100}
                  className="w-[90%] mx-auto lg:w-full block lg:hidden h-auto mb-4 rounded-lg"
                />
              

                <div className="flex flex-wrap gap-2 mt-10">
                  {work.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 border rounded-full bg-gray-100 text-xs lg:text-xl text-[black]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection;


// import Link from 'next/link'
// import React from 'react'
// import { ourWorkData } from './ourWork'
// import solution from '../../../../public/Home_Page/homepage_images/powerAi-mobile-img.png'
// import Image from 'next/image'

// const OurServiceSection = () => {
//   return (
//     <div>
//       <div>
//       {ourWorkData.concat(ourWorkData).map((work, index) => (
//             <Link href="/services" target="_blank" key={index} passHref>
//               <div
//                 key={index}
//                 className="w-screen md:w-[48vw] 2xl:w-[30vw] px-5 bg-white border-r-[0.5px] border-y-0 border-[#dbdbdb] text-center cursor-pointer hover:bg-primary-natural hover:text-primary-white lg:px-10 min-h-full flex flex-col justify-between"
//               >
//                 <div>
//                   <h3 className="text-[34px] lg:text-5xl xl:text-6xl text-black font-medium mb-3 text-wrap line-clamp-2">
//                     {work.title}
//                   </h3>

//                   <p className="text-lg sm:text-xl lg:text-3xl text-gray-600 text-wrap mb-3 mt-5 leading-6 lg:leading-10">
//                     {work.description}
//                   </p>
//                 </div>
//                <div className="lg:mt-10 w-full">
//                <Image
//                   src={work.image}
//                   alt={work.title}
//                   width={100}
//                   height={100}
//                   className="w-full mx-auto hidden lg:block lg:w-full h-auto mb-4 rounded-lg"
//                 />
              
//                <Image
//                   src={solution}
//                   alt={work.title}
//                   width={100}
//                   height={100}
//                   className="w-[90%] mx-auto lg:w-full block lg:hidden h-auto mb-4 rounded-lg"
//                 />
              

//                 <div className="flex flex-wrap gap-2 mt-10">
//                   {work.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="px-2 py-1 border rounded-full bg-gray-100 text-xs lg:text-xl text-[black] hover:text-primary-white hover:border-primary-white"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//       </div>
//     </div>
//   )
// }

// export default OurServiceSection