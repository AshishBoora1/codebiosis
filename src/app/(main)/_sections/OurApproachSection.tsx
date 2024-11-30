'use client';

import AnimatedButton from '@/components/AnimatedButton';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import LottieAnimation from '../_components/lottiePlayer';
import { useRouter } from 'next/navigation';

function OurApproachSection() {
  
  const router = useRouter();

  const handleWorkNavigation = () => {
    router.push('/our-work');
  };
  return (
    <div className='lg:flex justify-around flex-col md:flex-row pt-[30px] pb-14 md:py-14 lg:mt-32 gap-7 2xl:h-[480px]'>
      <div className='h-full w-full flex flex-col justify-start items-start col-span-1 gap-2 md:gap-5'>
        <div className='text-lg font-normal text-[#525252] sm:text-3xl lg:text-[42px]'>
          Our Approach
        </div>
        <h1 className=' text-[34px] md:text-6xl xl:text-[84px] md:!leading-[5rem] xl:!leading-[7rem] font-[900]'>
        Build. Innovate. Grow.
        </h1>
        <div className='flex h-full w-full my-16 lg:hidden flex-col justify-center items-center col-span-1 relative'>
          <LottieAnimation
            animationData={require('@/../public/lottiee/HomePage/Our_Approach.json')}
            className='max-h-[400px] max-w-[400px]'
          />
        </div>
        <p className='text-[15px] md:text-2xl lg:text-3xl text-center lg:text-start text-[#2B2B2B]'>
        We build strong digital foundations, innovate with the latest technology, and drive growth by boosting traffic and engagement. Our mission is to turn your digital goals into real-world success.
        </p>
        <div className='flex lg:block justify-center items-center w-full pb-3'>
          <AnimatedButton onClick={handleWorkNavigation}>Our Process</AnimatedButton>
        </div>
      </div>
      <Separator className='h-full w-px bg-[#D8D8D8] min-[2100px]:ms-20' />
      <div className='hidden h-full w-full lg:flex flex-col justify-center items-center col-span-1 relative'>
        <LottieAnimation
          animationData={require('@/../public/lottiee/HomePage/Our_Approach.json')}
          className='max-h-[400px] max-w-[400px]'
        />
      </div>

      <Separator className='block lg:hidden h-px w-full bg-[#D8D8D8] mt-10 ' />
    </div>
  );
}

export default OurApproachSection;
