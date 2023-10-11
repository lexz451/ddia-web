"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import testImage from "@/lib/assets/manos-circulo.png";
import Link from "next/link";

//Temporal implementation
type PostInfo = {
  img: StaticImageData;
  section: string;
  title: string;
  author: string;
  date: string;
  preview: string;
};

function fakeFetch() {
  const buff: PostInfo[] = [];
  for (let i = 0; i < 10; i++) {
    buff.push({
      img: testImage,
      section: "section",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ad placeat excepturi",
      author: "Mariano Garcia",
      date: "June 2, 2023",
      preview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita odio exercitationem libero nostrum! Consequuntur rem quia, eveniet dolorem ipsa quo ducimus aliquam, temporibus libero deserunt laboriosam officia expedita, reprehenderit fugiat non hic in. Architecto exercitationem nemo nulla dignissimos, sint odit perspiciatis cupiditate doloremque, quam iure qui obcaecati officiis iusto expedita possimus ratione quasi amet excepturi libero atque. Quia porro consectetur vel. Et corporis, earum quasi quas, iusto exercitationem molestiae fuga vero nisi atque eos magni, commodi cum ipsum architecto.",
    });
  }
  return buff;
}

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
              className={`r-btn font-avenir flex-shrink-0 border-design-green font-extrabold text-sm ${
                selectedFilter == index
                  ? "bg-design-green text-white"
                  : "text-design-green"
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

      <section className="border-b border-b-gray-500">
        {fakeFetch()?.map((value, index) => {
          return (
            <div
              key={index}
              className="flex flex-row py-10 border-t border-t-gray-500"
            >
              <Image
                className="object-cover w-64 h-full mr-12 rounded-xl "
                src={value.img}
                alt=""
                width={0}
                height={0}
                sizes="16rem"
              />
              <div>
                <h4 className="mb-4 uppercase font-[Inter] text-sm text-gray-500">
                  {value.section}
                </h4>
                <h3 className="mb-3 text-lg font-semibold font-avenir text-design-dark">
                  {value.title}
                </h3>
                <div className="mb-3 flex font-[Inter] text-xs">
                  <h5 className="font-semibold text-design-dark">
                    {value.author}
                  </h5>
                  <h1 className="text-gray-500 mx-[0.8ch]">-</h1>
                  <h5 className="text-gray-500">{value.date}</h5>
                </div>

                <p className="text-gray-500 font-avenir line-clamp-3">
                  {value.preview}
                </p>
              </div>
              <Link className="my-auto ml-20" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                >
                  <circle
                    cx="22.5"
                    cy="22.5"
                    r="21.75"
                    stroke="#015C6B"
                    stroke-width="1.5"
                  />
                  <path
                    d="M14.7438 29.867L28.8655 15.7453M28.8655 15.7453L14.3541 15.8783M28.8655 15.7453L28.7372 29.7385"
                    stroke="#015C6B"
                    stroke-width="2"
                  />
                </svg>
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
}
