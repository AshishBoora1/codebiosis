'use client';
import { Separator } from '@radix-ui/react-separator';
import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import CountUp from 'react-countup';

function OurStatsSection() {
  return (
    <div className='my-0 mb-10 py-0 md:my-20 xl:py-24  xl:min-h-[200px]  xl:grid grid-cols-5'>
      <div className='block xl:hidden mb-10'>
        <h1 className='text-[36px] font-black mb-2 md:h-[1.7em]'>Our Stats</h1>
        <p className='text-sm sm:text-xl font-medium '>
          Numbers don’t lie. We have an unparalleled  track record of digital
          excellence.
        </p>
      </div>
      <div className='flex'>
        <StatsInfo count={140} title='Succeeded Projects' />
        <Separator className='hidden xl:block h-full w-px bg-[#D8D8D8] p-[.5px] my-4' />
      </div>
      <Separator className='block xl:hidden h-full w-px bg-[#D8D8D8] p-[.5px] my-4' />
      <div className='flex'>
        <StatsInfo count={4000} title='Working hours were spent' />
        <Separator className='hidden xl:block h-full w-px bg-[#D8D8D8] p-[.5px] my-4' />
      </div>
      <Separator className='block xl:hidden h-full w-px bg-[#D8D8D8] p-[.5px] my-4' />
      <div className='flex'>
        <StatsInfo count={120} title='Stores Optimized' />
        <Separator className='hidden xl:block h-full w-px bg-[#D8D8D8] p-[.5px] my-4' />
      </div>
      <div className=' hidden xl:flex flex-col justify-end items-end col-span-2'>
        <h1 className='font-[900] text-7xl 2xl:text-[96px] leading-[129px]'>Our Stats</h1>
        <Separator className='h-px w-full bg-[#D8D8D8] my-4' />
        <p className='text-xl 2xl:text-4xl text-right font-medium p-4 h-[6rem] 2xl:h-[3rem] text-[#2B2B2B]'>
          Numbers don’t lie. We have an unparalleled 
          <br />
          track record of digital excellence.
        </p>
      </div>
    </div>
  );
}

function StatsInfo({ count, title }: { count: number; title: string }) {
  const countUpRef = useRef(null);
  const inView = useInView(countUpRef, { once: true });

  return (
    <div
      className='xl:flex flex-col justify-center items-center flex-1'
      ref={countUpRef}
    >
      <h1 className='text-5xl 2xl:text-[78px] font-medium text-black p-1 md:h-[1.7em]'>
        <CountUp end={inView ? count : 0} start={0} duration={3} />+
      </h1>
      <Separator className='hidden xl:block h-px w-full bg-[#D8D8D8] p-[.5px] my-4' />
      <h3 className='xl:p-4 xl:text-center xl:h-[3rem] text-base sm:text-xl 2xl:text-3xl font-normal text-[#2B2B2B]'>{title}</h3>
      <Separator className='block xl:hidden h-px w-full bg-[#D8D8D8] p-[.5px] my-4' />
    </div>
  );
}

export default OurStatsSection;
