'use client';

import React from 'react';
import BannerDetails from './_sections/bannerDetails';
import { works } from '@/components/data/main';
import AnimatedButton from '@/components/AnimatedButton';
import LetsCollab from '../../_components/letsCollab';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import OurStatsRightSection from '@/components/sections/ourStatsRightSection';
import OurStatsSection from '@/components/sections/OurStatsSection';

function Work() {
  return (
    <div className='px-[30px] md:px-0'>
      {
        works.map((work) => <BannerDetails key={work.id} {...work} buttonText="View full Details"/>)
      } 

      <div className='flex w-full justify-center mb-10 md:mb-0'>
        <AnimatedButton>Load More</AnimatedButton>
      </div>

      <div className='hidden md:block'>
        <OurStatsRightSection />
      </div>
      <div className='block md:hidden'>
        <OurStatsSection />
      </div>

      <LetsCollab
        title='Got a Project'
        substring='We’re a team of creatives who are excited about unique ideas and help companies to create amazing identity by crafting top-notch UI/UX & E-Commerce stores.'
      />

      <GetInTouchSection />
    </div>
  );
}

export default Work;
