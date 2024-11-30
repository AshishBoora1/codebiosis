import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FlipWords } from "./flipWords";

interface LetsCollabProps {
  className?: string;
  title: string;
  substring: string;
  subGHeading?: string;
}

const LetsCollab = (
    {className, title, substring , subGHeading}: LetsCollabProps
) => {
  return (
    <div className={cn("md:flex justify-between",
        className
    )}>
      <div className="md:w-[49%] ">
        <div className="flex gap-4 items-center justify-center md:justify-start mb-5">
          <Image src={"/vectors/Union.svg"} alt="" height={30} width={30} />
          <h3 className="text-xl ">{subGHeading || "Let's Collaborate"}</h3>
        </div>

        <div className="text-[#525252] md:max-w-[500px] text-sm text-center md:text-start">
         {substring}
        </div>
      </div>

      <Separator className="w-px bg-[#D8D8D8] my-4 h-auto" orientation="vertical" />

      <div className="flex gap-3 text-4xl font-semibold items-center justify-center md:w-[49%] md:mt-0 mt-10">
        <FlipWords word={title} className="z-[5] w-fit px-0 pb-2" border={4} /><Image src={"/illustrations/briefcase.svg"} alt="" height={48} width={48} />
      </div>
    </div>
  );
};

export default LetsCollab;
