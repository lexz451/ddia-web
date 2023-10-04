"use client";
import { ReactNode, useState } from "react";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="w-full mb-6 before:mb-8 before:block before:w-full before:h-[1px] before:bg-gray-200 ">
      <div className="flex mb-2">
        <h3 className="font-medium">{title}</h3>
        <div
          className={`ml-auto px-2`}
          onClick={() => setExpanded(expanded !== true)}
        >
          <svg
            className={`cursor-pointer transition-all duration-100 ease-out ${
              expanded ? "scale-[-1]" : "scale-[1]"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 15L12 8L19 15"
              stroke="#9CA3AF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div
        className={`grid text-gray-500 ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        } transition-all duration-300`}
      >
        <div className="overflow-y-hidden">{children}</div>
      </div>
    </div>
  );
}
