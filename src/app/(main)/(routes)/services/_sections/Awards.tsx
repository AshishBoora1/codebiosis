import Image from "next/image";
import React from "react";

const Awards = () => {
  return (
    <div className="w-full">
      <div className="w-full text-center">
        <div className="text-3xl font-bold uppercase mb-3">Awards</div>
        <div className="text-[#8D8D8D] py-3 border-t border-[#8D8D8D] w-fit mx-auto">
          Awards & Honors
        </div>
      </div>

      <div className="flex mt-16">
      <div className="p-8 flex flex-col gap-6 border-x border-[#D8D8D8]">
          <Image
            src="/services/award_01-1.svg"
            alt=""
            width={100}
            height={100}
            className="min-h-[100px] min-w-[100px]"
          />
          <div className="text-sm text-[#8D8D8D]">
            Currently have 36 active media campaigns across 24 projects, moving
            through a unique approach.
          </div>
        </div>
        <div className="p-8 flex flex-col gap-6  border-x border-[#D8D8D8]">
          <Image
            src="/services/award_02-1.svg"
            alt=""
            width={100}
            height={100}
            className="min-h-[100px] min-w-[100px]"
          />
          <div className="text-sm text-[#8D8D8D]">
            Currently have 36 active media campaigns across 24 projects, moving
            through a unique approach.
          </div>
        </div>
        <div className="p-8 flex flex-col gap-6  border-x border-[#D8D8D8]">
          <Image
            src="/services/award_03-1.svg"
            alt=""
            width={100}
            height={100}
            className="min-h-[100px] min-w-[100px]"
          />
          <div className="text-sm text-[#8D8D8D]">
            Currently have 36 active media campaigns across 24 projects, moving
            through a unique approach.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
