'use client';

import { SocialButton } from '@/app/(main)/_components/navigationbar';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const GetInTouchSection = () => {
  const socials = [
    {
      title: 'linkedin',
      darkIcon: '/icons/LinkedIn.svg',
      lightIcon: '/icons/LinkedIn_light.svg',
      link: '#',
    },
    {
      title: 'Instagram',
      darkIcon: '/icons/Instagram.svg',
      lightIcon: '/icons/Instagram_light.svg',
      link: '#',
    },
    {
      title: 'Facebook',
      darkIcon: '/icons/Facebook.svg',
      lightIcon: '/icons/Facebook_light.svg',
      link: '#',
    },
  ];

  return (
    <div className='pt-14'>
      <div className='md:w-[900px] mx-auto text-center text-3xl font-bold'>
        Get in touch
      </div>
      <Separator className='h-px w-full max-w-[100px] bg-[#D8D8D8] my-4 mx-auto' />

      <div className='md:flex justify-center'>
        <div className='flex md:block md:text-center text-[#2b2b2b] justify-between'>
          <div>
            <div className='font-bold text-xl text-[#000]'>Work Enquires</div>
            <div className='text-sm mt-5'>
              <div className='mb-2'>+91 6307 080 414</div>
              <div className=''>sales@codebiosis.com</div>
            </div>
          </div>
          <Separator
            className='h-px w-full max-w-[50px] bg-[#D8D8D8] my-4 mx-auto hidden md:block'
          />
          <div className='text-sm'>
            <div className='mb-2'>Assistance Hours:</div>
            <div className='mb-2'>Monday - Friday</div>
            <div className='flex flex-col justify-center'>
              <div className=''>9AM - 2PM IST</div>
              <div className=''>9AM - 2PM EST</div>
            </div>
          </div>
        </div>

        <Separator className='h-px md:h-auto w-full md:w-px bg-[#D8D8D8] md:mx-16 md:my-0 my-5' />
        <div className='flex md:block md:text-center text-[#2b2b2b] justify-between'>
          <div>
            <div className='font-bold text-xl text-[#000]'>Careers & Press</div>
            <div className='text-sm mt-5'>
              <div className=''>+91 6307 080 414</div>
            </div>
          </div>
          <Separator className='hidden md:block h-px w-full max-w-[50px] bg-[#D8D8D8] my-4 mx-auto' />
          <div className='text-sm'>
            <div className='mb-2'>Assistance Hours:</div>
            <div className='mb-2'>Monday - Friday</div>
            <div className='flex flex-col justify-center'>
              <div className=''>9AM - 2PM IST</div>
              <div className=''>9AM - 2PM EST</div>
            </div>
          </div>
        </div>

        <Separator className='h-px md:h-auto w-full md:w-px bg-[#D8D8D8] md:mx-16 md:my-0 my-5' />


        <div className='flex md:block md:text-center text-[#2b2b2b] justify-between items-center'>
          <div className='font-bold text-xl text-[#000]'>Work Enquires</div>
          <div className='flex flex-row justify-center items-center gap-3 mt-5'>
            {socials.map((social, index) => (
              <SocialButton
                key={index}
                title={social.title}
                darkIcon={social.darkIcon}
                onClick={() => console.log(`Clicked on ${social.title}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
