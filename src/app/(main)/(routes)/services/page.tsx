'use client';
import React from 'react';
import HeroHeader from '@/components/sections/HeroHeader';
import OurOfficeLocatedSection from '@/components/sections/OurOfficeLocatedSection';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import ServiceAccordian from './_sections/serviceAccordian';
import LetsCollab from '../../_components/letsCollab';
import Awards from './_sections/Awards';
import { Separator } from '@radix-ui/react-separator';

function ServicesPage() {
  return (
    <div className='px-[30px] md:px-0'>
      {/* Hero header */}
      <div className='md:my-20'>
        <HeroHeader
          hasLottie
          title='What We Offer'
          featureText='Strategy. Design. Development.'
          iconPath={require('@/../public/lottiee/OurService/Service_Hero_Section.json')}
          subText='Driving e-commerce success with data-infused UX design and effective and amazing graphics.'
          buttonText='Get Services'
          titleClassName='text-5xl leading-[4rem] max-w-[500px] font-bold'
        />
      </div>

      <ServiceAccordian />

      {/* <Awards /> */}

      <LetsCollab
        title='Got A Project ?'
        className='py-10 md:my-10 md:mt-28'
        substring='We’re a team of creatives who are excited about unique ideas and help companies to create amazing identity by crafting top-notch UI/UX & E-Commerce stores.'
      />
      <Separator
        className='block md:hidden h-px w-full bg-[#D8D8D8] mt-10'
        orientation='horizontal'
      />

      <GetInTouchSection className='hidden md:block' />
      <GetInTouchSection className='block md:hidden my-5' />
    </div>
  );
}

export default ServicesPage;
