"use client";
import React from "react";
import ArrowIconButton from "../ArrowIconButton";
import AnimatedButton from "../AnimatedButton";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
interface GetInTouchSectionProps {
  className?: string;
}
function GetInTouchSection({ className }: GetInTouchSectionProps) {
  const router = useRouter();

  const handleContactNavigation = () => {
    router.push("/contact-us");
  };
  return (
    <div
      className={cn(
        "mt-[27px] 2xl:mt-[60px] pb-[87px] 2xl:pb-[300px] md:pt-10 xl:pt-20 border-b border-[#D8D8D8]",
        className
      )}
    >
      <div className="lg:text-[84px] text-[36px] font-extrabold">
        Stay Updated !
      </div>

      <div className="md:flex justify-between items-end">
        <div className="w-full md:max-w-[800px]">
          <div className="flex border-b w-full max-w-[700px] justify-between  lg:mt-[65px] mt-[50px]">
            <input
              type="text"
              placeholder="yournname@email.com"
              className="w-full border-none mb-[20px] outline-none max-w-[600px]"
            />
            <ArrowIconButton
              invertArrow
              onClick={() => {}}
              className=" mb-[20px]"
            />
          </div>
          <div className="lg:text-[26px] text-[14px] w-full mt-[40px]">
            By providing your email, you agree for us to contact you via email
            with future updates. Your data is stored securely and we never pass
            it on to third parties.
          </div>
        </div>

        <AnimatedButton
          className="hidden xl:flex w-fit h-fit  mt-[40px]"
          onClick={handleContactNavigation}
        >
          Get in touch
        </AnimatedButton>
      </div>
    </div>
  );
}
export default GetInTouchSection;
