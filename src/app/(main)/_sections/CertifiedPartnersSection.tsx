"use client";

import AnimatedButton from '@/components/AnimatedButton';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const PartnerImages = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',
  '12.png',
  '13.png',
  '14.png',
  '15.png',
  '16.png',
  '17.png',
  '18.png',
  '19.png',
  '20.png',
  '21.png',
  '22.png',
  '23.png',
  '24.png',
  '25.png',
  '26.png',
  '27.png',
  '28.png',
  '29.png',
  '30.png',
];

function CertifiedPartnersSection() {
  return (
    <div className='lg:mt-44'>
      <div className='md:flex w-full justify-between items-center hidden'>
        <div className='flex gap-4 items-center'>
          <Image src={'/vectors/Union.svg'} alt='' height={30} width={30} />
          <h3 className="text-lg sm:text-xl lg:text-3xl xl:text-[42px] text-[#525252] font-normal ">Certified Partners</h3>
        </div>

        <AnimatedButton className='mt-0 hidden md:flex'>
          Our Strengths
        </AnimatedButton>
      </div>
      <Separator className='h-px w-full bg-[#D8D8D8] my-8 hidden md:block' />

      {Array.from({ length: 6 }).map((item, index) => (
        <Marquee key={index}>
          <div className='flex gap-16 justify-center w-full' key={index}>
            {PartnerImages.slice(
              (index * PartnerImages.length) / 6,
              (PartnerImages.length / 6) * (index + 1),
            ).map((partner, index) => (
              <Image
                key={index}
                src={`/Home_Page/Partners_Logos/${partner}`}
                alt={partner}
                height={105}
                width={228}
                className='grayscale'
              />
            ))}
          </div>
        </Marquee>
      ))}

      <div className='mt-0 block md:hidden'>
        <AnimatedButton className='mx-auto'>Our Strengths</AnimatedButton>
      </div>
    </div>
  );
}

export default CertifiedPartnersSection;

// import AnimatedButton from "@/components/AnimatedButton";
// import { Separator } from "@/components/ui/separator";
// import Image from "next/image";
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const CertifiedPartnersSection = () => {
//   const PartnerImages = [
//     "/Home_Page/homepage_images/home-certified-partners-img1.png",
//     "/Home_Page/homepage_images/photoshop.png",
//     "/Home_Page/homepage_images/pipedrive.png",
//     "/Home_Page/homepage_images/salesforce.png",
//     "/Home_Page/homepage_images/semurus.png",
//     "/Home_Page/homepage_images/spotifyplus.png",
//     "/Home_Page/homepage_images/wordpress.png",
//     "/Home_Page/homepage_images/zoho.png",
//     "/Home_Page/homepage_images/zoomnifo.png",
//     "/Home_Page/homepage_images/adobe.png",
//     "/Home_Page/homepage_images/Ae.png",
//     "/Home_Page/homepage_images/appolo.png",
//     "/Home_Page/homepage_images/callrail.png",
//     "/Home_Page/homepage_images/figma.png",
//     "/Home_Page/homepage_images/google-enalystic.png",
//     "/Home_Page/homepage_images/google-partners.png",
//     "/Home_Page/homepage_images/google-console.png",
//     "/Home_Page/homepage_images/hub.png",
//     "/Home_Page/homepage_images/Ai.png",
//     "/Home_Page/homepage_images/klivia.png",
//     "/Home_Page/homepage_images/rasa.png",
//     "/Home_Page/homepage_images/mailchimp.png",
//     "/Home_Page/homepage_images/framer.png",
//     "/Home_Page/homepage_images/Frame 4679@2x.png",
//     "/Home_Page/homepage_images/aws.png",
//   ];

//   // Helper function to group images into chunks
//   const chunkArray = (array: string[], size: number) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += size) {
//       result.push(array.slice(i, i + size));
//     }
//     return result;
//   };

//   const desktopSlides = chunkArray(PartnerImages, 5);
//   const mobileSlides = chunkArray(PartnerImages, 3);

//   const settings = {
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     speed: 800,
//     pauseOnHover: true,
//     cssEase: "linear",
//     infinite: true,
//     responsive: [
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           dots: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       <div className="lg:mt-44">
//         <div className="md:flex w-full justify-between items-center hidden">
//           <div className="flex gap-4 items-center">
//             <Image src={"/vectors/Union.svg"} alt="" height={30} width={30} />
//             <h3 className="text-lg sm:text-xl lg:text-3xl xl:text-[42px] text-[#525252] font-normal">
//               Certified Partners
//             </h3>
//           </div>

//           <AnimatedButton className="mt-0 hidden md:flex">
//             Our Strengths
//           </AnimatedButton>
//         </div>

//         <Separator className="h-px w-full bg-[#D8D8D8] my-8 hidden md:block" />

//         {/* Desktop Slider */}
//         <div className="hidden md:block mt-[127px]">
//           <Slider {...settings}>
//             {desktopSlides.map((group, groupIndex) => (
//               <div key={groupIndex} className="flex justify-center sm:gap-4">
//                 {group.map((image, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-wrap scale-105 justify-center py-10 px-5 gap-4 border-r border-b border-black/50"
//                   >
//                     <Image
//                       src={image}
//                       alt={`Partner ${index}`}
//                       height={105}
//                       width={228}
//                       className="grayscale"
//                     />
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* Mobile Slider */}
//         <div className="md:hidden block">
//           <Slider {...settings}>
//             {mobileSlides.map((group, groupIndex) => (
//               <div key={groupIndex} className="flex justify-center sm:gap-4">
//                 {group.map((image, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-wrap scale-105 justify-center py-10 px-5 gap-4 border-r border-b border-black/50"
//                   >
//                     <Image
//                       src={image}
//                       alt={`Partner ${index}`}
//                       height={105}
//                       width={228}
//                       className="grayscale"
//                     />
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </Slider>
//         </div>

//         <div className="flex justify-center items-center mb-20">
//           <AnimatedButton className="md:hidden flex mt-9">
//             Our Strengths
//           </AnimatedButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertifiedPartnersSection;
