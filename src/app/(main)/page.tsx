import OurStatsSection from '@/components/sections/OurStatsSection';
import React from 'react';
import OurApproachSection from './_sections/OurApproachSection';
import OurWorkSection from './_sections/OurWorkSection';
import OurServiceSection from './_sections/OurServiceSection';
import LogosSection from './_sections/LogosSection';
import WhatWeDoSection from './_sections/WhatWeDoSection';
import HeroHeader from '@/components/sections/HeroHeader';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import OurOfficeLocatedSection from '@/components/sections/OurOfficeLocatedSection';
import ResourcesSections from './_sections/ResourcesSections';
import CertifiedPartnersSection from './_sections/CertifiedPartnersSection';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import { Button } from '@/components/ui/button';
// import NewWorkSection from './_sections/newWorkSection';

function HomePage() {
  return (
    <div>
      <HeroHeader
        title='Websites that mean business'
        featureText={`Make Your Brand Rise Online`}
        iconPath={require('@/../public/lottiee/HomePage/Hero_Section_Home_Page.json')}
        titleClassName='max-w-[320px] md:max-w-[500px] 2xl:max-w-[800px]  text-black text-center'
        hasLottie={true}
      />
      <div className='px-[30px] md:px-0'>
        <WhatWeDoSection />
        <LogosSection />
        <OurServiceSection/>
        <OurWorkSection />
        <OurApproachSection />
        <OurStatsSection />
        <TestimonialsSection />
        <ResourcesSections />
        <CertifiedPartnersSection />
        <div className='hidden md:block '>
          <OurOfficeLocatedSection />
        </div>

        <GetInTouchSection />
      </div>
    </div>
  );
}

export default HomePage;
