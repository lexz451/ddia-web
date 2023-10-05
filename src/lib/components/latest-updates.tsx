"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import upd1 from "@/lib/assets/tecnologia-fondo-toque-humano-nueva-version-moderna-creacion-adan-11.png";
import upd2 from "@/lib/assets/diseno-bodegones-revolucion-11.png";
import upd3 from "@/lib/assets/unnamed.png";

interface IUpdate {
  img: StaticImageData;
  section: string;
  title: string;
  abstract: string;
  link: string;
}

function fakeFetch() {
  const arr: IUpdate[] = [
    {
      img: upd1,
      section: "section",
      title: "Lorem ipsum dolor sit.",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illo repellat quaerat ab consequuntur iste corporis deleniti eaque totam consequatur.",
      link: "123",
    },
    {
      img: upd2,
      section: "section",
      title: "Lorem ipsum dolor sit.",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illo repellat quaerat ab consequuntur iste corporis deleniti eaque totam consequatur.",
      link: "234",
    },
    {
      img: upd3,
      section: "section",
      title: "Lorem ipsum dolor sit.",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illo repellat quaerat ab consequuntur iste corporis deleniti eaque totam consequatur.",
      link: "345",
    },
  ];
  return arr;
}

export default function LatestUpdates() {
  //Fetch three latest updates
  const updatesInfo: IUpdate[] = fakeFetch();
  return (
    <section className="flex flex-col">
      <div className="flex w-full">
        <h2 className="font-semibold text-design-dark-green text-5xl">
          Latest Updates
        </h2>
        <Link
          href={"#"}
          className="r-btn text-sm border-design-green text-design-green ml-auto"
        >
          See all
        </Link>
      </div>

      <div className="flex flex-row gap-14 justify-between mt-10">
        {updatesInfo.map((upd) => {
          return (
            <div key={upd.link} className={`flex flex-col`}>
              <div className="relative w-full mb-2">
                <Image
                  className="object-contain w-full h-auto rounded-2xl"
                  src={upd.img}
                  alt={upd.title}
                  width={0}
                  height={0}
                  sizes={`${100 / updatesInfo.length}vw`}
                />
              </div>

              <h4 className="uppercase font-medium text-gray-400">
                {upd.section}
              </h4>
              <h3 className="text-design-dark-green font-semibold mt-1 mb-2">
                {upd.title}
              </h3>
              <h4 className="text-gray-500">{upd.abstract}</h4>
              <div className="my-4">
                <Link className="text-design-green underline" href={upd.link}>
                  Read more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
