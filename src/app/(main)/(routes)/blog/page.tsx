'use client';

import { blogCards } from '@/components/data/blog';
import Image from 'next/image';
import React from 'react';
import BlogCard from './_components/blogCards';
import AnimatedButton from '@/components/AnimatedButton';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import { useRouter } from 'next/navigation';
import load_more from '../../../../../public/icons/load_more.svg';
function Blog() {
  const navigate = useRouter();
  return (
    <div className="px-[30px] md:px-0">
      <div className="pt-8 pb-1 md:pb-[80px] md:pt-[100px] 2xl:pt-[200px] xl:pb-[50px]">
        <div className="hidden md:block mx-auto lg:text-[84px] text-[42px]  uppercase font-extrabold text-center mb-2 ">
          Blogs
        </div>

        <div className="flex w-fit gap-4 items-center mb-5 mx-auto">
          <Image src={"/vectors/Star 1.svg"} alt="" height={30} width={30} />
          <h3 className="lg:text-[42px] text-[18px] text-[#525252]  font-normal">
            Explore the Latest Insights
          </h3>
          <Image src={"/vectors/Star 1.svg"} alt="" height={30} width={30} />
        </div>

        <div className="block md:hidden  mx-auto text-5xl uppercase font-bold text-center mb-2 ">
          Blogs
        </div>
      </div>

      <div className="md:flex flex-wrap">
        {blogCards.map((card, index) => (
          <div
            className="flex justify-center md:basis-1/3 2xl:basis-1/4 md:border-b border-[#D8D8D8] "
            key={index}
            onClick={() => navigate.push(`/blog/${card.id}`)}
          >
            <BlogCard
              key={index}
              id={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              time={card.time}
            />
          </div>
        ))}
      </div>
      <div className='hidden md:flex justify-center pt-0 md:pt-12 2xl:pt-[150px]'>
        <Image src={"/icons/load_more.svg"} alt="" height={30} width={30} />
      </div>
      <div className="flex justify-center py-[60px] text-[18px]">
        <AnimatedButton>Load More</AnimatedButton>
      </div>

      <div className="">
        <GetInTouchSection className="md:py-32" />
      </div>
    </div>
  );
}

export default Blog;
