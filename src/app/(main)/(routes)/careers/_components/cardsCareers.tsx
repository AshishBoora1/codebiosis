import { cardDataCareers } from "@/components/data/careers";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const CardsCareers = () => {
  return (
    <div>
      <div className="text-3xl font-bold text-center">Benifits</div>
      <Separator className="h-px w-full max-w-[100px] bg-[#D8D8D8] my-4 mx-auto" />

      <div className="flex max-w-[1000px] justify-center gap-12 mx-auto flex-wrap">
        {
            cardDataCareers.map((card, index) => (
                <Card key={index} {...card} />
            ))
        }
      </div>
    </div>
  );
};

type CardData = {
  img?: string;
  icon?: string;
  title?: string;
};

const Card = ({ img, icon, title }: CardData) => {
  return (
    <div className="border border-[#D8D8D8] rounded-3xl overflow-hidden max-w-[150px]">
      {img ? (
        <div className="">
          <Image src={img} alt="" width={150} height={250} />
        </div>
      ) : (
        <div className="p-4 flex items-center justify-center flex-col h-full gap-3">
          <Image src={icon || ""} alt="" width={40} height={40} />
          <div className="font-semibold max-w-[150px] text-center text-[#525252]">{title}</div>
        </div>
      )}
    </div>
  );
};

export default CardsCareers;
