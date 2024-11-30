import Image from 'next/image';
import React from 'react';
import Form from './_components/form';
import OurOfficeLocatedSection from '@/components/sections/OurOfficeLocatedSection';
import LetsCollab from '../../_components/letsCollab';
import GetInTouchSection from './_components/getInTouchSection';
import { Separator } from '@/components/ui/separator';

function ContactUs() {
  return (
    <div className='px-[30px] md:px-0'>
      <div className='mt-[150px]  '>
        <div className='md:w-[900px] mx-auto text-3xl md:text-5xl 2xl:text-[84px] uppercase font-[900] text-center mb-[25px] '>
          CONTACT US
        </div>

        <div className='flex w-fit gap-4 items-center mx-auto'>
          <Image src={'/vectors/Star 1.svg'} alt='' height={36} width={36} />
          <h3 className='text-md text-center md:text-xl 2xl:text-[42px] text-[#525252] font-normal '>
            Our friendly team would love to hear from you
          </h3>
          <Image src={'/vectors/Star 1.svg'} alt='' height={36} width={36} />
        </div>
      </div>

      <Form />

      <div className='py-14'>
        <OurOfficeLocatedSection />
      </div>
      <div className='py-14'>
        <LetsCollab
          title='Join Our Team'
          subGHeading='Look Out Open Positions'
          substring='We’re a team of creatives who are excited about unique ideas and help digital and fin-tech companies to create amazing identity.'
        />
      </div>

      <GetInTouchSection />

      <Separator className='h-px w-full bg-[#D8D8D8] mt-14 mx-auto' />
    </div>
  );
}

export default ContactUs;
