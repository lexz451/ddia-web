"use client";
import { useState } from "react";

export default function LatestUpdates() {
  const strFilterButtons: string[] = [
    "All",
    "Announcements",
    "Blog",
    "In the News",
    "Resources",
    "Events",
  ];
  const [selectedFilter, setSelectedFilter] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  return (
    <main className="container mx-auto mt-[12rem]">
      <section className="flex gap-4 mb-8">
        {strFilterButtons.map((value, index) => {
          return (
            <button
              key={value}
              className={`r-btn flex-shrink-0 border-design-dark-green font-extrabold text-sm ${
                selectedFilter == index
                  ? "bg-design-dark-green text-white"
                  : "text-design-dark-green"
              }`}
              onClick={() => setSelectedFilter(index)}
            >
              {value}
            </button>
          );
        })}

        <div className="group flex overflow-hidden relative w-11 max-w-[14rem] ml-auto rounded-full bg-design-light transition-[width] duration-500 ease-out outline-design-green outline-2 focus-within:w-1/3 focus-within:outline">
          <div className="absolute flex h-full w-[80%] ">
            <input
              className="w-full px-5 my-auto transition-opacity duration-300 bg-transparent outline-none opacity-0 cursor-pointer placeholder:italic group-focus-within:cursor-auto group-focus-within:opacity-100"
              type="text"
              placeholder="insert your search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          <button className="flex ml-auto rounded-full h-11 w-11 ">
            <svg
              className="m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#015C6B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
}
