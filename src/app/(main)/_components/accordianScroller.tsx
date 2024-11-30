"use client";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordianScrollerProps {
    data: any[];
    ref?: any;
    index: number;
}

const AccordianScroller = ({ data , ref,index}: AccordianScrollerProps) => {

  return (
            <Accordion type="single" defaultValue={`item-1`} collapsible>
              {data.map((item, subIndex) => (
                <AccordionItem key={`accordion-item-${index}-${subIndex}`} value={`item-${subIndex + 1}`} className="pt-8">
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent className="pb-6">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
  );
};

export default AccordianScroller;
