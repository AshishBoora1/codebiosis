"use client";

import { ArrowBigDown, MapPinIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import map from "../../../public/Home_Page/homepage_images/map.png";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import pinGray from "@/../public/pin-g.svg";
import pin from "@/../public/pin.svg";

function OurOfficeLocatedSection() {
  const [showMap, setShowMap] = useState("usa");

  const Pin = () => {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M37.8913 62.3156C40.8336 60.8921 59.375 51.2517 59.375 34.375C59.375 22.2938 49.5812 12.5 37.5 12.5C25.4188 12.5 15.625 22.2938 15.625 34.375C15.625 51.2517 34.1664 60.8921 37.1087 62.3156C37.3651 62.4397 37.6349 62.4397 37.8913 62.3156ZM37.5 43.75C42.6777 43.75 46.875 39.5527 46.875 34.375C46.875 29.1973 42.6777 25 37.5 25C32.3223 25 28.125 29.1973 28.125 34.375C28.125 39.5527 32.3223 43.75 37.5 43.75Z"
          fill="black"
          className="cursor-pointer"
        />
      </svg>
    );
  };

  const PinGray = () => {
    return (
      <svg
        width={20}
        height={20}
        fill="none"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.3966 33.1429C22.4381 32.1225 31.6667 27.029 31.6667 18.3337C31.6667 11.8903 26.4434 6.66699 20 6.66699C13.5567 6.66699 8.33337 11.8903 8.33337 18.3337C8.33337 27.029 17.562 32.1225 19.6035 33.1429C19.8583 33.2702 20.1418 33.2702 20.3966 33.1429ZM20 23.3337C22.7615 23.3337 25 21.0951 25 18.3337C25 15.5722 22.7615 13.3337 20 13.3337C17.2386 13.3337 15 15.5722 15 18.3337C15 21.0951 17.2386 23.3337 20 23.3337Z"
          fill="#E0E0E0"
          className="cursor-pointer"
        />
      </svg>
    );
  };
  return (
    <div className="pt-20">
      <div className="text-xl text-center text-[#525252] pb-[10px]">
        Our Offices
      </div>
      <div className="md:text-[40px] 2xl:text-[87px] font-bold text-center">
        We&#39;re Located At
      </div>

      <Image
        src={map}
        width={1600}
        height={1200}
        alt=""
        className=" mx-auto py-12"
      />

      {/* <ComposableMap
        focusable={false}
        height={1200}
        max={500}
        className="my-10 max-w-[1600px] mx-auto"
        markerHeight={40}
      >
      
        <Geographies geography="/feature.json" focusable={false}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="#525252"
                fill="#525252"
                focusable={false}
                className="focus:border-none focus:outline-none"
              />
            ))
          }
        </Geographies>
        <Marker
          coordinates={showMap === "kol" ? [76.5, 32.9] : [78.99997, 27.9]}
          onClick={() => {
            setShowMap("kol");
          }}
          height={40}
        >
          {showMap === "kol" ? <Pin /> : <PinGray />}
        </Marker>
        <Marker
          coordinates={
            showMap === "usa" ? [-92.15715, 50.781082] : [-84.15715, 44.781082]
          }
          className="focus:border-none focus:outline-none"
          onClick={() => {
            setShowMap("usa");
          }}
        >
          {showMap === "usa" ? <Pin /> : <PinGray />}
        </Marker>
        <Marker
          coordinates={showMap === "blr" ? [71.99997, 22] : [74.99997, 18]}
          onClick={() => {
            setShowMap("blr");
          }}
        >
          {showMap === "blr" ? <Pin /> : <PinGray />}
        </Marker>
      </ComposableMap> */}

      <div className="md:flex md:text-center md:m-auto md:px-10 justify-center ">
        <div className=" flex" style={{ borderBottom: "1px solid lightGrey" }}>
          <div
            style={{ borderRight: "1px solid lightGrey" }}
            className={`max-w-[400px] px-10 pb-[92px] pe-[100px]  opacity-50 hover:opacity-100 ${
              showMap === "blr" && "!opacity-100"
            } transition-all duration-300`}
          >
            <div className="text-2xl font-bold">USA</div>
            <div className="mt-3">
              16192 Coastal, Lewes, Delaware 19958, Sussex County, USA
            </div>
          </div>
          <div
            style={{ borderRight: "1px solid lightGrey" }}
            className={`max-w-[400px] px-10 pb-[92px] pe-[100px]  opacity-50 hover:opacity-100 ${
              showMap === "blr" && "!opacity-100"
            } transition-all duration-300`}
          >
            <div className="text-2xl font-bold">Bengaluru</div>
            <div className="mt-3">
              #7A, 3rd floor, 5th crossroad, St Thomas Town Main Road,
              Kammanahalli Bengaluru -560084
            </div>
          </div>
          <div
            className={`max-w-[400px] px-10 pb-[92px] pe-[100px]  opacity-50 hover:opacity-100 ${
              showMap === "blr" && "!opacity-100"
            } transition-all duration-300`}
          >
            <div className="text-2xl font-bold">Lucknow</div>
            <div className="mt-3">
              Unit no.FF-01, Parsvnath Planet Plaza, Lucknow, Uttar Pradesh
              226010
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurOfficeLocatedSection;
