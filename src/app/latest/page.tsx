"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import testImage from "@/lib/assets/manos-circulo.png";
import Link from "next/link";
import ArrowCircleIcon from "@/lib/assets/arrow-circle.svg";
import SearchIcon from "@/lib/assets/search.svg";

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

          <button className="flex ml-auto rounded-full h-11 w-11">
            <SearchIcon className="stroke-design-green m-auto"></SearchIcon>
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
                <ArrowCircleIcon className="stroke-design-green stroke-[1.5]"></ArrowCircleIcon>
              </Link>
            </div>
          );
        })}
      </section>

      <div className="flex w-full my-20">
        <Link
          className="mx-auto text-white bg-design-dark-green border-design-dark-green r-btn"
          href={"#"}
        >
          Load more
        </Link>
      </div>

      <div className="flex w-full mb-20 h-80 rounded-3xl bg-gradient-to-b from-design-light-green to-gray-100">
        <h1 className="m-auto font-[Inter] font-semibold text-5xl text-gray-500">
          Banner
        </h1>
      </div>
    </main>
  );
}
