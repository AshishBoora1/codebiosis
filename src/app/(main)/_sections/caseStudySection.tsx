/* eslint-disable @next/next/no-img-element */
import React from "react";
import LottieAnimation from "../_components/lottiePlayer";

interface SectionProps {
  title: string;
  logoSrc: any;
  altText: string;
  items: {
    heading: string;
    description: string;
  }[];
}

const CaseStudySection: React.FC<SectionProps> = ({
  title,
  logoSrc,
  altText,
  items,
}) => {
  return (
    <div className="flex-1">
      <div className="mb-4">
        <div className="flex items-center mb-4 pt-10">
          <LottieAnimation animationData={logoSrc} className="w-12 h-12 mr-4" />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className=" flex gap-[2%] flex-wrap mt-10">
          {items.map((item, index) => (
            <div className="mb-5 w-[49%]" key={index}>
              <h3 className="text-xl mb-3 font-semibold">{item.heading}</h3>
              <p className="text-[#525252] max-w-[550px]"  style={{ color: "#525252" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;
