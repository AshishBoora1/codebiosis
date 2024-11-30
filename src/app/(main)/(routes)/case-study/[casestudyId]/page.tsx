/* eslint-disable react/no-unescaped-entities */
"use client";
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import LetsCollab from "@/app/(main)/_components/letsCollab";
import CaseStudySection from "@/app/(main)/_sections/caseStudySection";
import { Separator } from "@radix-ui/react-separator";
import CardsCarousel from "@/app/(main)/_components/cardsCarousel";
import CaseStudyCard from "@/app/(main)/_components/caseStudyCard";
import LottieAnimation from "@/app/(main)/_components/lottiePlayer";

const CaseStudyDetail = () => {
  const data = [
    {
      id: "caseStudy1",
      title: "SECUREINTELI",
      description: "Lectus congue pharetra id imperdiet arcu tristique dui...",
      image: "/caseStudy/card1.svg",
      categories: ["UX", "Redesign", "Web Development"],
    },
    {
      id: "caseStudy2",
      title: "MESON VALVES INDIA",
      description:
        "Created an efficient website for a leading hardware material...",
      image: "/caseStudy/card2.svg",
      categories: ["UX", "e-Commerce", "SEO"],
    },
    {
      id: "caseStudy3",
      title: "NEW CARDS",
      description:
        "Created an efficient website for a leading hardware material...",
      image: "/caseStudy/card1.svg",
      categories: ["UX", "e-Commerce", "SEO"],
    },
    
    // More cards...
  ];


  const cardsArray: React.JSX.Element[] = [];

  data.map((card) => {
    cardsArray.push(<CaseStudyCard key={card.id} {...card} />);
  })

  // Define items for Approach section
  const approachItems = [
    {
      heading: "Brand Discovery :",
      description:
        "Conducted in-depth research to understand Tata Sonnets' brand essence, values, and target audience. Analyzed competitor strategies and industry trends to identify opportunities for differentiation.",
    },
    {
      heading: "Strategy Development :",
      description:
        "Developed a comprehensive brand strategy focusing on storytelling, emotional connection, and experiential marketing. Defined key messaging pillars and brand narratives to resonate with the target audience.",
    },
    {
      heading: "Web Design & Development :",
      description:
        "Collaborated with Tata Sonnets' team to translate the brand strategy into a visually stunning website. Implemented responsive design principles for seamless user experience across devices. Prioritized intuitive navigation, striking visuals, and persuasive copywriting to engage visitors and drive conversions.",
    },
    {
      heading: "Content Strategy :",
      description:
        "Developed engaging content that tells the story of Tata Sonnets' products and heritage, fostering a deeper connection with the audience. Focused on creating high-quality visuals, compelling narratives, and informative product descriptions",
    },
    {
      heading: "SEO & Digital Marketing :",
      description:
        "Implemented search engine optimization (SEO) best practice to improve the website's visibility and organic traffic. Developed a digital marketing strategy encompassing social media, email marketing, and influencer partnership to expand Tata Sonnets' online reach and foster community engagement.",
    },
    // Add more items as needed
  ];

  // Define items for Result section
  const resultItems = [
    {
      heading: "Elevated Brand Presence",
      description:
        "The redesign design reflects Tata Sonnects' Brands identity and values, reinforcing its position as a premium luxury brand in the home fragrance industry.",
    },
    {
      heading: "Increase Engagement & Conversion :",
      description:
        "User engagement metrics, including time spent on site and page view, have significantly improved, indicating a high level of interest and interaction with Tata Sonnets' content. Conversion rates have also increased, resulting in a tangible impact on sales and revenue.",
    },
    {
      heading: "Positive Customer Feedback :",
      description:
        "Customer feedback has been overwhelming positive ,with user praising the website'aesthetic ,usability and informative content .The semaless onlineshopping experince has enhance customer statisfaction and loyality",
    },
    {
      heading: "Enhanced Brand Equality :",
      description:
        "Tata Sonnets' enhnaced online presence and  cohesive brand messaging have strengthened its brand equality and resonance with the target audience.The brand is now positioned for sustained growth and success in the competitive luxury home fragnance market",
    },
    // Add more items as needed
  ];

  return (
    <div className="relative">
      <div
        className="nx-auto mt-10 h-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/caseStudy/bannerOne.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "1300px",
          height: "750px",
        }}
      ></div>
      <div className="p-10">
        {/* Title and Industry */}
        <div className="flex justify-between gap-10 items-start mb-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold pb-8">TATA Sonnets</h1>{" "}
            <div className="text-xl pb-8">
              {" "}
              <span className="font-semibold">Industry:</span>
              <br /> {/* Added line break */}
              <span style={{ color: "#525252" }}>Coffee, eCommerce</span>
            </div>
            <div className="text-xl pb-8">
              {" "}
              <span className="font-semibold">What We Did:</span>
              <br /> {/* Added line break */}
              <span style={{ color: "#525252" }}>
                Brand Strategy, UX Strategy, Art Direction, UI/UX
              </span>
            </div>
          </div>
          {/* Overview */}
          <div className="flex-1 ml-10">
            <h2 className="text-2xl font-bold mb-4">Overview:</h2>
            <p className="text-lg leading-relaxed" style={{ color: "#525252" }}>
              Tata Sonnets is a premium brand under the Tata Group, specializing
              in luxury home fragrances. With a commitment to quality and
              innovation, Tata Sonnets offers a range of exquisite scents
              crafted to elevate everyday experiences. As the market for luxury
              home fragrances grows, Tata Sonnets aims to solidify its position
              as a leader in the industry through a comprehensive web redesign
              and brand strategy overhaul.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mb-3 nx-auto items-center justify-center"
        style={{
          backgroundImage: `url('/caseStudy/bannerTwo.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "1300px",
          height: "1000px",
        }}
      ></div>
      {/* New Section - Statistics and Project Goals */}
      <div className="flex py-20 justify-between items-end">
        {/* Statistics */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">19 Million</h2>
            <p className="mt-4" style={{ color: "#525252" }}>
              There are many variations of passages
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold">75+</h2>
            <p className="mt-4" style={{ color: "#525252" }}>
              If you are going to use a passage
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold">2% to 15.8%</h2>
            <p className="mt-4" style={{ color: "#525252" }}>
              Contrary to popular belief
            </p>
          </div>
        </div>
        {/* Project Goals */}
        <div className="flex-1 ml-30">
          <div className="flex items-center mb-4">
          <LottieAnimation animationData={require("@/../public/lottiee/Case_Study/Mission.json")} className="max-w-12 max-h-12 mr-4" />
            <h2 className="text-3xl m-4 font-bold">Project Goals :</h2>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Enhance Online Presence :</h3>
            <p className="mt-4" style={{ color: "#525252" }}>
              Develop a modern, user-friendly website that reflects Tata
              Sonnets' brand identity and showcases its product range
              effectively.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Brand Consistency :</h3>
            <p className="mt-4" style={{ color: "#525252" }}>
              Ensure consistency across all digital touchpoints to reinforce
              Tata Sonnets' brand identity and values.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              Drive Engagement & Conversion:
            </h3>
            <p className="mt-4" style={{ color: "#525252" }}>
              Increase user engagement and drive conversions through intuitive
              design, compelling content, and seamless user experience.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/caseStudy/bannerThree.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "1300px",
          height: "750px",
        }}
      ></div>
      {/* Approach Section */}
      <div className="">
        <CaseStudySection
          title="Approach :"
          logoSrc={require("@/../public/lottiee/Case_Study/Approach.json")}
          altText="Approach Logo"
          items={approachItems}
        />
      </div>
      <div
        className="mt-20 nx-auto bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/caseStudy/placeImg.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "1300px",
          height: "300px",
        }}
      ></div>
      {/* Result Section */}
      <div className="">
        <CaseStudySection
          title="Result :"
          logoSrc={require("@/../public/lottiee/Case_Study/Results.json")}
          altText="Result Logo"
          items={resultItems}
        />
      </div>
      {/* Conclusion Section */}
      <div className="max-w-[1200px] mx-auto m-20">
        <h2 className="text-3xl text-center text-ul font-bold ">Conclusion </h2>
        <Separator
          className="h-px w-28 mx-auto mb-4 bg-[#8a8282]"
          orientation="horizontal"
        />
        <p className=" text-[#525252] text-sm leading-relaxed text-center">
          The comprehensive redesign and strategic overhaul of Tata Sonnets'
          online presence have significantly bolstered the brand's market
          position. By focusing on brand storytelling, intuitive design, and
          engaging content, Tata Sonnets has not only enhanced its brand
          perception but also driven user engagement and conversion rates. This
          case study highlights the importance of a holistic approach to brand
          strategy and digital presence in achieving business success.
        </p>
      </div>
      <div className="py-14">
        <CardsCarousel data={cardsArray} />
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

export default CaseStudyDetail;
