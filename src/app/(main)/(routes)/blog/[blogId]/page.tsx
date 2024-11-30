"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import MusicButton from "../_components/musicButton";
import { useParams } from "next/navigation";
import { BlogCards, blogCards, blogDetailsData } from "@/components/data/blog";
import DetailPoints from "./_components/detailPoints";
import { Separator } from "@/components/ui/separator";
import BlogCard from "../_components/blogCards";
import CardsCarousel from "@/app/(main)/_components/cardsCarousel";
import { Button } from "@/components/ui/button";

function BlogDetails() {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState<BlogCards | null>(null);
  const [cardsData, setCardsData] = useState<any>([]);

  const finalCards: React.JSX.Element[] = [];

  useEffect(() => {
    setBlogData(blogCards.filter((blog) => blog.id === blogId)[0]);
    setCardsData(blogCards.filter((blog) => blog.id !== blogId));
  }, []);

  cardsData.map((card: any) => {
    finalCards.push(
      <BlogCard
        key={card.id}
        id={card.id}
        icon={card.icon}
        title={card.title}
        description={card.description}
        time={card.time}
      />
    );
  });

  return (
    <div className="px-[30px] md:px-0">
      <div className="mt-[43px] xl:mt-[110px] flex justify-between items-center">
        <Image src={"/vectors/backButton.svg"} alt="" width={80} height={80} />
        <div className="block md:hidden">
          <MusicButton musicLink="/blog/Song.mp3" />
        </div>
      </div>

      <div className="text-center text-[30px] md:text-5xl 2xl:text-[72px]  font-[900] pt-20 xl:pt-[130px] md:max-w-[1100px] mx-auto   ">
        {blogData?.title}
      </div>
      <div className="w-full sm:w-[250px] mx-auto my-[15px] sm:my-5 border-b-[.5px] rounded-[5px] border-[#525252]"></div>
      <div className="text-center text-[#8D8D8D] text-lg sm:text-xl md:text-2xl xl:text-[34px] font-normal  ">
        {blogData?.description} | {blogData?.time}
      </div>

      <div className=" py-10 lg:pb-[80px] lg:pt-[98px] 2xl:pt-[130px] 2xl:pb-[100px] hidden md:block">
        <MusicButton musicLink="/blog/Song.mp3" />
      </div>

      <div>
        {/* <Image
          src={"/vectors/Star 1.svg"}
          alt=""
          height={20}
          width={20}
          className=" float-left mr-1"
        /> */}
        {/* <div className="text-[#525252] text-[30px] font-normal mb-[43px] 2xl:mb-[59px] ">
          In the fast-paced business landscape of today, staying ahead requires
          smart strategies and cutting-edge tools. Customer Relationship
          Management (CRM) platforms are among the key weapons in the arsenal of
          successful businesses. In this article, we’ll delve into the six
          greatest{" "}
          <a
            target="_blank"
            href=""
            className="underline underline-offset-4 font-semibold"
          >
            benefits of CRM platforms
          </a>{" "}
          that every forward-thinking entrepreneur should be aware of.
        </div> */}
      </div>

      <div className="text-[#525252] text-xl lg:text-[30px] font-normal max-md:mt-10 mb-[43px] 2xl:mb-[59px] lg:leading-[40px] leading-[21px] ">
        In the fast-paced world of e-commerce, standing out from the competition
        is crucial. A visually appealing and user-friendly website can make all
        the difference in capturing the attention of potential customers and
        driving them toward making a purchase. This is where a Shopify design
        system comes into play.
      </div>

      <Image
        src={"/blog/blodDetails.svg"}
        alt="img"
        className="rounded-[25px] mx -auto "
        width={2100}
        height={750}
      />

      <DetailPoints data={blogDetailsData} />

      {/* <div className="py-14">
        <div className="text-3xl font-bold text-center">
          Partner with CodeBiosis for Exceptional Services
        </div>
        <Separator className="w-[200px] h-px mx-auto mt-4 mb-10 bg-[#D8D8D8]" />

        <div className="max-w-[950px] mx-auto text-center mt-14 text-[#525252]">
          As you embark on the journey of harnessing the benefits of CRM
          platforms, consider CodeBiosis as your trusted partner{" "}
          <a
            target="_blank"
            href=""
            className="underline underline-offset-4 font-semibold"
          >
            CodeBiosis
          </a>{" "}
          specializes in{" "}
          <a
            target="_blank"
            href="https://codebiosis.com/the-importance-of-web-development-services-for-your-business/"
            className="underline underline-offset-4 font-semibold"
          >
            website development
          </a>
          , app development, and business management solutions. Our team of
          experts is committed to delivering top-notch services that align with
          your unique business requirements.
        </div>

        <div className="max-w-[950px] mx-auto text-center mt-8 text-[#525252]">
          Contact CodeBiosis today to elevate your business to new heights
          through cutting-edge technology and strategic development.
        </div>
      </div> */}

      <div className="py-[20px] md:py-[60px] xl:py-[125px]">
        <div className="flex justify-between items-center flex-col xl:flex-row gap-y-[35px] ">
          <div className="xl:w-[49%] ">
            <div className="flex gap-4 items-center mb-5">
              <h3 className="text-3xl md:text-[48px] 2xl:text-[60px] font-bold">
                Conclusion :{" "}
              </h3>
            </div>

            <div className="text-[#525252] text-lg md:text-2xl 2xl:text-[30px] lg:leading-[40px] leading-[21px] 2xl:max-w-[900px] mt-10 ">
              In the competitive world of e-commerce, a stunning Shopify design
              system can give you the edge you need to dominate the market. By
              focusing on consistent branding, intuitive navigation, mobile
              responsiveness, optimized product pages, and a seamless checkout
              process, you can create an exceptional shopping experience for
              your customers. Customization, SEO optimization, and integration
              of third-party apps further enhance the capabilities of your
              design system. Regularly measure success, gather user feedback,
              and iterate based on data-driven insights to continually improve
              and stay ahead of the competition.
            </div>
          </div>

          <Separator
            className="w-px bg-[#D8D8D8] h-[530px] xl:block hidden"
            orientation="vertical"
          />

          <Separator
            className=" bg-[#D8D8D8] w-[100%] xl:hidden block"
            orientation="horizontal"
          />
          <div className="xl:w-[49%] ">
            <div className="flex gap-3 xl:gap-6 text-4xl font-semibold items-center justify-center 2xl:max-w-[825px] flex-wrap ">
              <Button
                variant={"outline"}
                className="px-2.5 md:px-4 py-2.5 md:py-[28px] font-bold text-[11px] sm:text-lg md:text-xl xl:text-[28px] text-[#2B2B2B] rounded-[40px]  "
              >
                Shopify
              </Button>
              <Button
                variant={"outline"}
                className="px-2.5 md:px-4 py-2.5 md:py-[28px] font-bold text-[11px] sm:text-lg md:text-xl xl:text-[28px] text-[#2B2B2B] rounded-[40px]  "
              >
                Design System
              </Button>
              <Button
                variant={"outline"}
                className="px-2.5 md:px-4 py-2.5 md:py-[28px] font-bold text-[11px] sm:text-lg md:text-xl xl:text-[28px] text-[#2B2B2B] rounded-[40px]  "
              >
                Web Development
              </Button>
              <Button
                variant={"outline"}
                className="px-2.5 md:px-4 py-2.5 md:py-[28px] font-bold text-[11px] sm:text-lg md:text-xl xl:text-[28px] text-[#2B2B2B] rounded-[40px]  "
              >
                E-Commerce
              </Button>
              <Button
                variant={"outline"}
                className="px-2.5 md:px-4 py-2.5 md:py-[28px] font-bold text-[11px] sm:text-lg md:text-xl xl:text-[28px] text-[#2B2B2B] rounded-[40px]  "
              >
                Shopify Design
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[20px] md:py-14 xl:my-[70px]">
        <CardsCarousel data={finalCards} />
      </div>

      <Separator className="w-full h-px mt-6 mb-10 bg-[#D8D8D8]" />
    </div>
  );
}

export default BlogDetails;
