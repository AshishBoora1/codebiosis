// "use client";

// import React, { useRef, useEffect } from "react";

// import Image from "next/image";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import Marquee from "react-fast-marquee";
// import { clientLogos } from "@/components/data/images";
// import { moreClientLogos } from "@/components/data/images";

// gsap.registerPlugin(useGSAP);

// function LogosSection() {
//   const scrollRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;

//     if (!scrollContainer) return;

//     const totalWidth = scrollContainer.scrollWidth;
//     const scrollDuration = (totalWidth / 100) * 1.5;


//     const keyframes = [
//       { transform: 'translateX(0)' },
//       { transform: `translateX(-${totalWidth / 2}px)` },
//     ];


//     const scrollAnimation = scrollContainer.animate(keyframes, {
//       duration: scrollDuration * 1000,
//       iterations: Infinity,
//       easing: 'linear',
//     });

//     return () => scrollAnimation.cancel();
//   }, []);

//   return (

//     <div className="py-14">

//       <Marquee speed={40}>
//         <div className="flex gap-20 w-full px-2 py-4 ob-img">
//           {clientLogos.slice(0, 8).map((logo, index) => (
//             <img
//               src={`/logos/HomeClientLogo/${logo}`}
//               alt={`Client Logo ${logo}`}
//               key={index}
//             />
//           ))}
//         </div>
//       </Marquee>

//       <Marquee speed={30} direction="right">
//         <div className="flex gap-20 w-full px-2 py-4 pb-0 ob-img">
//           {clientLogos.slice(8).map((logo, index) => (
//             <img
//               src={`/logos/HomeClientLogo/${logo}`}
//               alt={`Client Logo ${logo}`}
//               key={index}
//             />
//           ))}
//         </div>
//       </Marquee>

//       <div className="infiniteContainer pt-12 overflow-hidden">
//         <div ref={scrollRef} className="flex gap-[10rem] horizontal-scrolling-items">
//           {moreClientLogos.concat(moreClientLogos).map((logo, index) => (
//             <AspectRatio key={index} ratio={100 / 2}>
//               <div className="horizontal-scrolling-items__item flex justify-around items-center gap-0">
//                 <div className="flex-shrink-0">
//                   <Image
//                     src="/vectors/start_2.svg"
//                     height={20}
//                     width={20}
//                     alt="Star Icon"
//                   />
//                 </div>
//                 <div className="flex-shrink-0 px-10">
//                   <Image
//                     src={`/partner/${logo}`}
//                     width={60}
//                     height={60}
//                     alt={`Client Logo ${logo}`}
//                   />
//                 </div>
//               </div>
//             </AspectRatio>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// export default LogosSection;


// {/*
//   SVG Reveal Animation in Css:

//   svg path {
//   fill: transparent ;
//   stroke: #0000000;
//   stroke-width : 0.1;
//   stroke-dasharray: 50;
//   stroke-dashoffset: 50;
//   animation: textAnimation 4s ease-in-out 1 forwards;
// }
//   @keyframes textAnimation {

//   0%{
//   stroke-dashoffset: 50;
//   }

//   80%{
//   fil: transparent;
//   }

//   100%{
//   fill: #000000;
//   stroke-dashoffset: 0;
//   }
// }

//   */}
