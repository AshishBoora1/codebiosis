import { SocialButton } from "@/app/(main)/_components/navigationbar";
import { TeamInterface } from "@/components/data/team";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const TeamCards = ({
  name,
  image,
  description,
  icon,
  insta,
  linkedin,
  role,
  experience,
  tags,
}: TeamInterface) => {
  const socials = {
    linkedin: {
      darkIcon: "/icons/LinkedIn.svg",
      lightIcon: "/icons/LinkedIn_light.svg",
    },
    insta: {
      darkIcon: "/icons/Instagram.svg",
      lightIcon: "/icons/Instagram_light.svg",
    },
  };

  return (
    <div>
      <div className="flex justify-between gap-24">
        <div className="">
          <Image src={image} alt="" width={200} height={200} />
        </div>

        <div className="flex items-start">
          <div className="flex max-w-[200px] text-[#000] font-semibold text-2xl items-center gap-2">
            {experience}{" "}
            <span className="text-sm !text-[8px] max-w-[60px] leading-3">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <Image src={icon} alt="" width={30} height={30} />
            <SocialButton
              title={name}
              darkIcon={socials.linkedin.darkIcon}
              link={linkedin}
            />
            <SocialButton
              title={name}
              darkIcon={socials.insta.darkIcon}
              link={insta}
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-4xl font-semibold capitalize my-2">{name}</div>
        <div className="font-medium my-2">{role}</div>
        <div className="text-[#525252] leading-5 text-[12px] max-w-[450px]">{description}</div>
      </div>

      <div className="max-w-[450px]">
        <div className="my-4">Expert in:</div>
        <div className="flex gap-1 flex-wrap">
            {
                tags.map((tag, index) => (
                    <Button variant={"outline"} key={index} className="text-[10px] rounded-3xl">
                        {tag}
                    </Button>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
