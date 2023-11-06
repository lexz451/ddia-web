"use client";

import { ReactNode, useState } from "react";

export default function NavbarAccordion({
    title,
    children,
}: {
    title: ReactNode;
    children: ReactNode;
}) {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <div className="navbar-accordion">
            <div className="header flex items-center">
                {title}
                <div
                    className={`ml-auto px-2 cursor-pointer `}
                    onClick={() => setExpanded(!expanded)}
                >
                    <svg
                        className={`transition-all duration-100 ease-out ${
                            expanded ? "scale-[1]" : "scale-[-1]"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M5 15L12 8L19 15"
                            stroke="#0F8BA0"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div
                className={`grid text-gray-500 ${
                    expanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                } transition-all duration-300`}
            >
                <div className="overflow-y-hidden">{children}</div>
            </div>
        </div>
    );
}
