import { axisBank, kotakBank, tataSonet } from "./images";

export interface WorkCardProps {
    img: string;
    id: string;
    name?: string;
    description?: string;
    strategy?: string;
    design?: string;
    mainDescription?: string;
    imageArr?: string[];
  }
export const works : WorkCardProps[] = [
    {
      img: "/ourWork/work-01.svg",
      id: "works2",
      name: "Medimix Ayurvedic",
      description: "E-commerce Store, Skincare",
      strategy: "Brand Strategy, UX Strategy",
      design: "UI/UX Design, Art Direction",
      imageArr:kotakBank,
      mainDescription:'We have produced a well-designed website that allows our users to visit the site in a simple and efficient manner. We make it a point to maintain the information fresh and available at all times, thanks to a dedicated post-deployment crew.'
    },
    {
      img: "/ourWork/work-02.svg",
      id: "works3",
      name: "VLCC Personal Care",
      imageArr: axisBank,
      description: "E-commerce Store, Skincare",
      strategy: "Brand, Development",
      design: "UI/UX Design",
      mainDescription: `We have produced a well-designed website that allows our users to visit the site in a simple and efficient manner. We make it a point to maintain the information fresh and available at all times, thanks to a dedicated post-deployment crew.`
    },
    {
      img: "/ourWork/work-03.svg",
      id: "works4",
      name: "TATA Sonnets",
      imageArr:tataSonet,
      description: "E-commerce Store, Skincare",
      strategy: "Optimization, Development",
      design: "UI/UX Design, Development",
      mainDescription:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or less normal distribution of letters,`
    },
  ];