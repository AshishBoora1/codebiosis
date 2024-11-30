/* eslint-disable react/display-name */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import AnimatedButton from '@/components/AnimatedButton';
import ArrowIconButton from '@/components/ArrowIconButton';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const listOfresources = [
  {
    title: 'Dominate the E-commerce World with a Stunning Shopify Design System',
    readTime: '10min read',
    image: '/illustrations/1.png',
    link: 'https://codebiosis.com/e-commerce-world-with-a-stunning-shopify-design-system/',
  },
  {
    title: 'What Does an SEO Agency Do?',
    readTime: '15min read',
    image: '/illustrations/2.png',
    link: 'https://codebiosis.com/what-does-an-seo-agency-do/',
  },
  {
    title: 'What Is the Cost of Building an eCommerce Website in India?',
    readTime: '10min read',
    image: '/illustrations/3.png',
    link: 'https://codebiosis.com/ecommerce-website-development-costs-in-india/',
  },
  {
    title: 'What Is the Cost of Building an eCommerce Website in India?',
    readTime: '10min read',
    image: '/Home_Page/homepage_images/home-resorces-img.png',
    link: 'https://codebiosis.com/ecommerce-website-development-costs-in-india/',
  },
];

const handleBlogClick = (url: string | URL | undefined) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

function ResourcesSections() {
  const [show, setShow] = useState(0);

  const router = useRouter();

  const handleBlogNavigation = () => {
    router.push('/blog');
  };

  return (
    <div className='hidden md:flex py-14  min-h-[200px]  flex-col '>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-4 items-center'>
          <Image alt='' src={'/vectors/Union.svg'} height={30} width={30} />
          <h3 className="text-lg sm:text-xl lg:text-3xl xl:text-[42px] text-[#525252] font-normal ">Resources</h3>
        </div>
        <AnimatedButton className='mt-0' onClick={handleBlogNavigation}>Explore All</AnimatedButton>
      </div>
      <Separator className='h-px w-full bg-[#D8D8D8] my-4 mt-14' />
      <div className='mt-[175px]'>
        {listOfresources.map((res, index) => (
          <div
            className={cn(
              ' opacity-65  transition-all duration-500',
              index === show && 'opacity-100 font-bold',
            )}
            key={index}
            onMouseEnter={() => setShow(index)}
          >
            <ResourcesSections.ResourceCard {...res} />
            <Separator className='h-px w-full bg-[#D8D8D8] my-8' />
          </div>
        ))}
      </div>
    </div>
  );
}

interface ResourceCardProps {
  title: string;
  readTime: string;
  image: string;
  link: string;
}

ResourcesSections.ResourceCard = ({
  title,
  readTime,
  link,
  image,
}: ResourceCardProps) => {
  return (
    <div key={title} className='flex  max-lg:gap-8 flex-wrap w-full justify-between '>
      <div className='div w-full lg:w-1/2 lg:pe-3'>
        <h2 className='text-xl md:text-4xl 2xl:text-5xl font-bold max-w-[890px] !leading-[64px] text-black'>{title}</h2>
        <h4 className='font-normal text-xl lg:text-[30px] text-black mt-4 mb-5'>{readTime}</h4>
        <ArrowIconButton invertArrow onClick={() => handleBlogClick(link)} />
      </div>
      <Image src={image} width={600} height={200} alt='' className='w-full lg:w-1/2' />
    </div>
  );
};

export default ResourcesSections;
