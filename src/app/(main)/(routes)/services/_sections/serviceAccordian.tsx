"use client";
import { serviceData, serviceDataMain } from "@/components/data/services";
import React from "react";
import AccordianSingle from "./accordianSingle";

const ServiceAccordian = () => {
  return (
    <div className="my-10">
      {Object.keys(serviceDataMain).map((service, index) => {
        return (
          <AccordianSingle service={service} key={index} id={index} />
        );
      })}
    </div>
  );
};

export default ServiceAccordian;
