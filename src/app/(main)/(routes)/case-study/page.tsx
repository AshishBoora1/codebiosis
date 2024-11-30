"use client";
import Image from "next/image";
const caseStudies = [
  {
    id: "caseStudy1",
    title: "VLCC Personal Care",
    description: "Development of a new web store that showcases not only the latest products but informative blog and dynamic services.",
    categories: ["UX", "Web Store", "Development"],
    image: "caseStudy/card01.svg",
  },
  {
    id: "caseStudy2",
    title: "Medimix Ayurveda",
    description: "Redeveloped the website for Medimix and optimized it for higher AOV, better brand visibility and visual clarity.",
    categories: ["UX", "Higher AOV", "Optimization"],
    image: "caseStudy/card02.svg",
  },
  {
    id: "caseStudy3",
    title: "SECUREINTELI",
    description: "Lectus congue pharetra id imperdiet arcu tristique dui. Molestie velit at temurus. Nunc commodo congue eu leo id nullam augue. Sit ut ilisi. Mi velit.",
    categories: ["UX", "Redesign", "Web Development"],
    image: "caseStudy/card03.svg",
  },
  {
    id: "caseStudy4",
    title: "MESON VALVES INDIA",
    description: "Created an efficient website for a leading hardware material and ship valves provider, with their keywords reaching top spots.",
    categories: ["UX", "e-Commerce", "SEO"],
    image: "caseStudy/card04.svg",
  },
  // More case studies...
];
import { useState } from "react";
import CaseStudyCard from "../../_components/caseStudyCard";
import LetsCollab from "../../_components/letsCollab";
import { cn } from "@/lib/utils";
import AnimatedButton from "@/components/AnimatedButton";

const categories = [
  "All",
  "UI/UX Design",
  "Brand Identity",
  "Development",
  "Product",
];

const CaseStudiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCaseStudies, setVisibleCaseStudies] = useState(4);

  const filteredCaseStudies = caseStudies.filter(
    (caseStudy) =>
      selectedCategory === "All" ||
      caseStudy.categories.includes(selectedCategory)
  );

  const handleLoadMore = () => {
    setVisibleCaseStudies((prev) => prev + 4);
  };

  return (
    <div className="container mx-auto">
      <div className="flex gap-4 items-center pt-14 mb-5">
        <Image src={"/vectors/Star 1.svg"} alt="" height={20} width={20} />
        <h2 className="text-xl ">{"Case Studies"}</h2>
      </div>
      <div className="flex justify-left pb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`p-2 border-b border-[#8D8D8D] ${
              selectedCategory === category
                ? "bg-blue-500 text-white text-xl mx-4"
                : "bg-gray-200 text-gray-700 text-sm"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 pb-14 justify-center ">
        {filteredCaseStudies
          .slice(0, visibleCaseStudies)
          .map((caseStudy, index) => (
            <div className="py-12 border-b border-[#D8D8D8]" key={index}>
              <div
                className={cn(index % 2 === 0 && "border-r border-[#D8D8D8]")}
              >
                <CaseStudyCard
                  {...caseStudy}
                  className="max-w-[600px] mx-auto "
                />
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center py-14">
        <AnimatedButton className="px-4 py-2 bg-blue-500 text-black rounded-full">
          Load More
        </AnimatedButton>
      </div>
      <LetsCollab
        title={"Got A Project!"}
        substring={
          "We're a team of creatives who are excited about unique ideas and help companies to create amazing identity by crafting top-notch UI/UX & E-Commerce stores."
        }
        className="py-14"
      />
    </div>
  );
};

export default CaseStudiesPage;
