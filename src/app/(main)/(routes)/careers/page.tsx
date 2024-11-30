"use client";

import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";
import React, { useState } from "react";
import CardsCareers from "./_components/cardsCareers";
import { cn } from "@/lib/utils";
import Recuritprocess from "./_components/recuritprocess";
import LetsCollab from "../../_components/letsCollab";
import { Separator } from "@/components/ui/separator";

function CareersPage() {
  const recuritmentData = [
    {
      title: "Review Applications & CV’s",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
    {
      title: "Interview InVitation",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
    {
      title: "The Interview",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
    {
      title: "Task",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
    {
      title: "Onboarding",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const jobs = [
    {
      title: "Digital Marketing & SEO Specialist",
      experience: "2+ years",
    },
    {
      title: "Business Development Expert",
      experience: "4+ years",
    },
    {
      title: "Shopify Developer",
      experience: "2+ years",
    },
    {
      title: "WordPress / WooCommerce Developer",
      experience: "2+ years",
    },
    {
      title: "UI/UX Designer",
      experience: "2+ years",
    },
  ];
  return (
    <div>
      <div className="my-10">
        <div className="w-[900px] mx-auto text-5xl uppercase font-bold text-center mb-2 ">
          CAREERS
        </div>

        <div className="flex w-fit gap-4 items-center mb-5 mx-auto">
          <Image src={"/vectors/Star 1.svg"} alt="" height={30} width={30} />
          <h3 className="text-xl text-[#525252]">
            Our friendly team would love to hear from you
          </h3>
          <Image src={"/vectors/Star 1.svg"} alt="" height={30} width={30} />
        </div>
      </div>

      <div className="grid grid-cols-2 py-14 grid-rows-2 gap-12">
        <div className=" row-span-2">
          <div className="flex gap-2 items-center">
            <Image src={"/vectors/Star 1.svg"} alt="" height={20} width={20} />
            <h3 className=" text-[#525252]">Job Openings</h3>
          </div>

          <div className="text-7xl uppercase font-bold my-8">Join Team</div>

          <div className="mt-8">
            <div className="">Please send your resume here:</div>
            <a
              href="mailto:career@codebiosis.com"
              className="text-xl font-bold underline underline-offset-8 mt-5"
            >
              career@codebiosis.com
            </a>
          </div>
        </div>

        {jobs.map((job, index) => (
          <div
            className="col-span-1 text-[#525252] mt-4 border-b border-[#D8D8D8] pb-4 flex justify-between pr-4"
            key={index}
          >
            <div className="">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className=" ">{"(" + job.experience + " Experience)"}</div>
            </div>{" "}
            <div className="">
              <Image src={"/careers/goto.svg"} alt="" height={12} width={12} />
            </div>
          </div>
        ))}
        <div className="col-span-1">
          <div className="flex w-full h-full justify-center items-center">
            <AnimatedButton className="w-fit h-fit">Apply Now</AnimatedButton>
          </div>
        </div>
      </div>
     
     <div className="py-14">
      <CardsCareers />
      </div>
      <div className="flex py-14 justify-between">
        <div className="w-[49%]">
          <Recuritprocess data={recuritmentData[currentCard]}/>
        </div>
        <div className="w-[49%]">
          <div className="text-3xl font-bold text-center">Recuritment Process</div>
          <Separator className="h-px w-full max-w-[100px] bg-[#D8D8D8] my-4 mx-auto" />
          <div className="mt-12">
            {recuritmentData.map((item, index) => (
              <div className={cn("flex gap-4 items-center my-4 pl-6 border-l border-[#525252] cursor-pointer" , currentCard === index && "font-semibold")} onClick={() => setCurrentCard(index)} key={index}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <LetsCollab title="Meet the team" className="py-14" substring="From creative thinkers to technical experts, our team is united by a passion for innovation and a dedication to excellence. Get to know the faces behind our success stories, and discover what drives each member to contribute their unique skills and perspectives to our mission." subGHeading="Brilliant Minds Behind CodeBiosis"/>
    </div>
  );
}

export default CareersPage;
