"use client";

import Image from "next/image";
import React from "react";
import TeamCards from "./_components/teamCards";
import { team } from "@/components/data/team";
import { cn } from "@/lib/utils";
import AnimatedButton from "@/components/AnimatedButton";
import LetsCollab from "../../_components/letsCollab";
import { Separator } from "@/components/ui/separator";

function OurTeam() {
  return (
    <div>
      <div className="my-10">
        <div className="w-[900px] mx-auto text-5xl uppercase font-bold text-center mb-2 ">
          Our Team
        </div>

        <div className="flex w-fit gap-4 items-center mb-5 mx-auto">
          <Image src={"/vectors/Star 1.svg"} alt="" height={30} width={30} />
          <h3 className="text-xl text-[#525252]">
            Brilliant Minds Behind CodeBiosis
          </h3>
          <Image src={"/vectors/Star 1.svg"} alt="" height={30} width={30} />
        </div>
      </div>

      <div className="flex flex-wrap py-14">
        {team.map((card, index) => (
          <div
            className={cn(
              "flex justify-center basis-1/2 border-b border-[#D8D8D8] my-4 py-4"
            )}
            key={index}
          >
            <div
              className={cn(
                "w-full flex items-start justify-center",
                index % 2 === 0 && "border-r border-[#D8D8D8]"
              )}
            >
              <TeamCards {...card} />
            </div>
          </div>
        ))}
      </div>

      <AnimatedButton className="w-fit mx-auto my-14">Know Them</AnimatedButton>

      <div className="py-14">
        <LetsCollab
          title="Join Our Team"
          substring="We’re a team of creatives who are excited about unique ideas and help digital and fin-tech companies to create amazing identity."
          subGHeading="Look Out Open Positions"
        />
      </div>

      <Separator className="mt-14 w-full bg-[#D8D8D8] h-px " />
    </div>
  );
}

export default OurTeam;
