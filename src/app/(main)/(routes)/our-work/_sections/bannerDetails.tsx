'use client';

import { ParallaxHorizontalScroll } from '@/app/(main)/_components/horizontalScroller';
import { ParallaxTiltedScroll } from '@/app/(main)/_components/tiltedScroller';
import AnimatedButton from '@/components/AnimatedButton';
import { images } from '@/components/data/images';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface WorkCardProps {
  img: string;
  name?: string;
  description?: string;
  strategy?: string;
  design?: string;
  id?: string;
  mainDescription?: string;
  buttonText: string;
  imageArr?: string[];
}

const BannerDetails = ({
  img,
  name,
  description,
  strategy,
  design,
  id,
  mainDescription,
  buttonText,
  imageArr,
}: WorkCardProps) => {
  const navigate = useRouter();
  return (
    <div className='w-full pt-5 md:pt-20'>
      <div className='relative w-full h-full'>
    
      
        {id === 'works4' ? ( 
          <ParallaxTiltedScroll
            images={imageArr || images}
            imageH={200}
            imageW={800}
            className='max-w-full w-full md:h-[550px] max-h-full'
            childrenClassName='md:w-[200vw] ml-[-25%] mt-[-50%]'
          />
        ) : (
          <ParallaxHorizontalScroll
            images={imageArr || images}
            imageH={200}
            imageW={800}
            className='max-w-full w-full md:h-[550px] max-h-full'
          />
        )}
         
        <div className='absolute bottom-0 md:bottom-12 right-3 '>
          <AnimatedButton
            className='bg-[#2B2B2B] text-primary-white'
            btnClassName='bg-primary-white'
            icon='/vectors/blacktick.svg'
            onClick={() => {
              navigate.push(`/our-work/${id}`);
            }}
          >
            {buttonText}
          </AnimatedButton>
        </div>
      </div>

      <div className='my-5 mt-3'>
        <div className='md:flex justify-between'>
          <div className=''>
            <div className='text-xl capitalize font-bold'>{name}</div>
            <div className='text-[#8D8D8D] mt-3'>{description}</div>
            <div className='hidden md:flex text-[#525252] items-baseline my-5'>
              <div className='mr-2 font-semibold'>Strategy : </div>
              <div className='text-sm'>{strategy}</div>
              <Separator className='w-px bg-[#D8D8D8] mx-6' />
              <div className='mr-2 font-semibold'>Design : </div>
              <div className='text-sm'>{design}</div>
            </div>
            <div className='md:hidden flex md:justify-center'>
              <div className='flex-1'>
                <div className='md:text-center text-base font-semibold text-[#525252] py-1'>
                  Strategy
                </div>
                <div className='text-[12px] text-[#8D8D8D]'>{strategy}</div>
              </div>
              <Separator className='w-px bg-[#D8D8D8] mx-6' orientation="vertical" />
              <div className='flex-1'>
                <div className='md:text-center text-base font-semibold text-[#525252] py-1'>
                  Design
                </div>
                <div className='text-[12px] text-[#8D8D8D]'>{design}</div>
              </div>
            </div>
          </div>

          <div className='text-[#525252] max-w-[520px] text-[14px] text-right hidden md:block'>
            {mainDescription}
          </div>
        </div>
        <Separator className='h-px w-full bg-[#D8D8D8] mt-10 md:mt-2 mb-6' />
      </div>
    </div>
  );
};

export default BannerDetails;
