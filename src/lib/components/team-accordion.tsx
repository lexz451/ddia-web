"use client";
import { useState } from "react";
import { TServerImage } from "../utils/types";
import ServerImage from "./server-image";
import parse from "html-react-parser";

export default function TeamAccordion({
    avatar,
    prime,
    name,
    role,
    description,
}: {
    avatar: TServerImage;
    name: string;
    role: string;
    prime?: string;
    description: string;
}) {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <div
            onClick={() => setExpanded(!expanded)}
            className={`grid cursor-pointer lg:grid-cols-[1fr_5fr] lg:gap-10 py-4 px-5 lg:px-10 rounded-2xl transition-all ease-out duration-300 ${
                expanded
                    ? "text-white bg-design-green"
                    : "text-design-green bg-[#F2EFE8]"
            }`}
        >
            <div className="self-start relative flex items-center lg:justify-end ml-auto w-full">
                {avatar && (
                    <ServerImage
                        {...avatar}
                        sizes="160px"
                        className={`rounded-full transition-[opacity] lg:transition-all duration-500 lg:duration-300 aspect-square object-cover h-auto ${
                            expanded
                                ? "opacity-100 w-40"
                                : "opacity-0 lg:opacity-100 w-0 lg:w-24"
                        }`}
                    />
                )}
            </div>

            <div className="flex flex-col relative">
                <div className="flex my-4">
                    <div className="">
                        <h3 className="text-3xl font-extrabold font-avenir cursor-pointer">
                            {name}
                        </h3>
                        <div className="flex text-base font-avenir mt-1">
                            <h4 className="uppercase text-sm">{role}</h4>
                            <h4 className="font-semibold">{prime}</h4>
                        </div>
                    </div>

                    <div className={`absolute mt-2 right-0 cursor-pointer`}>
                        <svg
                            className="transition-all duration-300 ease-out"
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
                    }] col-[2] transition-all ease-out duration-200`}
                >
                    <div
                        className={`overflow-y-hidden font-avenir text-white text-lg leading-normal ${
                            expanded ? "pb-4" : "pb-0"
                        }`}
                    >
                        {parse(description)}
                    </div>
                </div>
            </div>
        </div>
    );
}
