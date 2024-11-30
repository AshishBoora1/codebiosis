import { serviceDataMain } from "@/components/data/services";
import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";
import LottieAnimation from "./lottiePlayer";
interface ServiceAccordianCardsProps {
  section: string
  data: string
  index: number
}
const ServiceAccordianCards = ({
  section, data, index
}: ServiceAccordianCardsProps) => {
  return (
    <div className="group hover:bg-black transition duration-300 p-4 rounded-md cursor-pointer">
      <div className="w-full flex justify-between mb-6 items-center gap-4">

        <div className="text-lg font-semibold text-black group-hover:text-white transition duration-300">

          {data}

        </div>

        <LottieAnimation 

        animationData={require(`@/../public/lottiee/OurService/${serviceDataMain[section].description.icon}${(index + 1) > 9 ? index + 1 : `0${index + 1}`}.json`)} 
        
        className="w-10 h-10 max-h-10 max-w-10 transition duration-300 group-hover:filter group-hover:invert" 

        />

      </div>
      <div className="text-[#000000] text-sm">{serviceDataMain[section].sections[data]}</div>
    </div>
  );
};
export default ServiceAccordianCards;