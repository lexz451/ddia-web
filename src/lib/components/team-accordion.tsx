"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function TeamAccordion({
  img,
  prime,
  member,
  role,
  description,
}: {
  img: StaticImageData;
  member: string;
  role: string;
  prime?: string;
  description: string;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div
      className={`grid mb-6 rounded-2xl transition-colors ease-out duration-300 ${
        expanded
          ? "text-white bg-design-green"
          : "text-design-green bg-design-light"
      }`}
      style={{
        gridTemplateColumns: "1fr 5fr",
        padding: `1.2rem 2.5rem`,
      }}
    >
      <div
        className="block transition duration-300 relative ml-auto mr-10 aspect-square"
        style={{ height: expanded ? "160px" : "90px" }}
      >
        <Image fill src={img} sizes="100vw" alt="" />
      </div>

      <div className="flex flex-col relative">
        <div className="flex my-4">
          <div className="">
            <h3
              className="text-3xl font-extrabold font-avenir cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            >
              {member}
            </h3>
            <div className="flex text-base font-avenir mt-1">
              <h4 className="uppercase ">{role}</h4>
              <h4 className="font-semibold">{prime}</h4>
            </div>
          </div>

          <div
            className={`absolute mt-2 right-0 cursor-pointer`}
            onClick={() => setExpanded(!expanded)}
          >
            <svg
              className="transition duration-300 ease-out"
              style={expanded ? {} : { rotate: "90deg" }}
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="-1 -1 47 47"
              fill="none"
            >
              <circle
                className="transition-[fill] ease-out duration-300"
                cx="22.5"
                cy="22.5"
                r="22.5"
                fill={expanded ? "#FAFAFA" : ""}
                strokeWidth="2"
                stroke="#015C6B"
              />
              <path
                className="transition-[stroke] ease-out duration-300"
                d="M14.7438 29.867L28.8655 15.7453M28.8655 15.7453L14.3541 15.8783M28.8655 15.7453L28.7372 29.7385"
                strokeWidth="2"
                stroke="#015C6B"
              />
            </svg>
          </div>
        </div>
        <div
          className={`grid grid-rows-[${
            expanded ? "1fr" : "0fr"
          }] col-[2] transition-all ease-out duration-300 mt-3`}
        >
          <p className="overflow-y-hidden font-avenir text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
