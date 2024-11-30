import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";

const CardsCarousel = ({ data }: any) => {
  return (
    <div>
      <Carousel opts={{ slidesToScroll: 1, align: "start" }}>
        <div className="w-full flex justify-between pb-6 xl:pb-8 xl:py-8">
          <div className="flex gap-2 relative items-center">
            <CarouselPrevious
              className="rounded-none border-none relative left-0"
              icon={
                <Image
                  src={"/blog/left.svg"}
                  alt=""
                  height={50}
                  width={50}
                  className=""
                />
              }
            />{" "}
            Prev Post
          </div>
          <div className="flex gap-2 relative items-center">
            Next Post{" "}
            <CarouselNext
              className="rounded-none border-none relative right-0"
              icon={
                <Image
                  src={"/blog/right.svg"}
                  alt=""
                  height={50}
                  width={50}
                  className=""
                />
              }
            />
          </div>
        </div>
        <CarouselContent>
          {data.map((card: any) => (
            <CarouselItem
              key={card.id}
              className="basis-[50%] flex justify-center"
            >
              <div className="">
                {card}{" "}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CardsCarousel;


// CardsCarousel.tsx
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import React from "react";
// import Card from "./card";

// interface CarouselData {
//   id: number;
//   title: string;
//   description: string;
//   imageUrl: string;
//   tags: string[];
// }

// interface CardsCarouselProps {
//   data: CarouselData[];
// }

// const CardsCarousel: React.FC<CardsCarouselProps> = ({ data }) => {
//   return (
//     <div>
//       <Carousel opts={{ slidesToScroll: 1, align: "start" }}>
//         <div className="w-full flex justify-between py-8">
//           <div className="flex gap-2 relative items-center">
//             <CarouselPrevious
//               className="rounded-none border-none relative left-0"
//               icon={
//                 <Image
//                   src={"/blog/left.svg"}
//                   alt="Left Arrow"
//                   height={50}
//                   width={50}
//                   className=""
//                 />
//               }
//             />
//             Prev Post
//           </div>
//           <div className="flex gap-2 relative items-center">
//             Next Post
//             <CarouselNext
//               className="rounded-none border-none relative right-0"
//               icon={
//                 <Image
//                   src={"/blog/right.svg"}
//                   alt="Right Arrow"
//                   height={50}
//                   width={50}
//                   className=""
//                 />
//               }
//             />
//           </div>
//         </div>
//         <CarouselContent>
//           {data.map((card) => (
//             <CarouselItem key={card.id} className="basis-[50%] flex justify-center">
//               <Card
//                 title={card.title}
//                 description={card.description}
//                 imageUrl={card.imageUrl}
//                 tags={card.tags} onIconClick={function (): void {
//                   throw new Error("Function not implemented.");
//                 } }              />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </div>
//   );
// };

// export default CardsCarousel;
