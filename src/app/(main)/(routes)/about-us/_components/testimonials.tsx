'use client';

import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Rating from '@/components/Rating';
import ArrowIconButton from '@/components/ArrowIconButton';
import Marquee from 'react-fast-marquee';
import { clientLogos } from '@/components/data/images';
interface TestimonialsardProps {
  name: string;
  description: string;
  rating: number;
  inverted: boolean;
  image: string;
}

interface TestimonialProps {
  index: number;
}

const testimonials = [
  '/logos/client_1868.svg',
  '/logos/client_almondhouse.svg',
  '/logos/client_bansiwala.svg',
  '/logos/client_dulaar.svg',
  '/logos/client_evo.svg',
  '/logos/client_galgal.svg',
  '/logos/client_medimix.svg',
  '/logos/client_ocuwear.svg',
  '/logos/client_sonnets.svg',
  '/logos/client_talitha.svg',
  '/logos/client_truvitals.svg',
  '/logos/client_vlcc.svg',
  '/logos/client_1868.svg',
  '/logos/client_almondhouse.svg',
  '/logos/client_bansiwala.svg',
  '/logos/client_dulaar.svg',
  '/logos/client_evo.svg',
  '/logos/client_galgal.svg',
  '/logos/client_medimix.svg',
  '/logos/client_ocuwear.svg',
  '/logos/client_sonnets.svg',
  '/logos/client_talitha.svg',
  '/logos/client_truvitals.svg',
  '/logos/client_vlcc.svg',
];

function TestimonialsSection() {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className='md:py-14  md:min-h-[200px] flex flex-col '>
      <div className='md:flex flex-row justify-between items-center mb-5 md:mb-0'>
        <div className='hidden md:flex flex-row gap-4 items-center'>
          <Image alt='' src={'/vectors/Union.svg'} height={30} width={30} />
          <h3 className='text-xl'>Testimonials</h3>
        </div>
        <h2 className='text-3xl font-semibold'>
          Some friends we’ve made in the process !
        </h2>
      </div>
      <Separator className='hidden md:block h-px w-full bg-[#D8D8D8] my-4' />
      <div className='hidden md:flex justify-around flex-row py-14 gap-7 h-[200px]'>
        <div className='h-full w-full flex flex-col justify-center col-span-1'>
          <div className='text-3xl font-semibold'>Excellent Team</div>
          <p>
          Our team stands out for its creativity and skill. We bring together diverse talents to craft exceptional web development, digital marketing, and design solutions. With a shared commitment to excellence, we turn ideas into successful outcomes and drive innovation in every project.
          </p>
        </div>
        <Separator className='h-full w-px bg-[#D8D8D8]' />
        <div className='h-full w-full flex flex-col justify-center col-span-1 relative'>
          <div className='text-3xl font-semibold'>Best Solution Providers</div>
          <p>
          We deliver tailored solutions that align with your business goals. Combining cutting-edge technology with industry expertise, we solve complex challenges and drive sustainable growth, exceeding your expectations.
          </p>
        </div>
      </div>
      <Separator className='hidden md:block h-px w-full bg-[#D8D8D8] my-4' />
      <div className='mt-20 md:mt-0'>
        <Marquee speed={40}>
          <div className='flex gap-20 w-full px-2 py-4 ob-img'>
            {clientLogos.slice(0, 10).map((logo, index) => (
              <img
                src={`/logos/HomeClientLogo/${logo}`}
                alt={`Client Logo ${logo}`}
                key={index}
              />
            ))}
          </div>
        </Marquee>
        <Marquee speed={30} direction='right'>
          <div className='flex gap-20 w-full px-2 py-4 pb-0 ob-img'>
            {clientLogos.slice(10).map((logo, index) => (
              <img
                src={`/logos/HomeClientLogo/${logo}`}
                alt={`Client Logo ${logo}`}
                key={index}
              
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default TestimonialsSection;
