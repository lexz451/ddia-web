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
  preview: string;
  link: string;
}

function fakeFetch() {
  const arr: IUpdate[] = [
    {
      img: upd1,
      section: "section",
      title: "Lorem ipsum dolor sit.",
      preview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit suscipit hic deserunt, enim ipsum voluptatem. Praesentium nesciunt rerum nisi vel dolorem asperiores",
      link: "123",
    },
    {
      img: upd2,
      section: "section",
      title: "Lorem ipsum dolor sit.",
      preview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit suscipit hic deserunt, enim ipsum voluptatem. Praesentium nesciunt rerum nisi vel dolorem asperiores",
      link: "234",
    },
    {
      img: upd3,
      section: "section",
      title: "Lorem ipsum dolor sit.",
      preview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit suscipit hic deserunt, enim ipsum voluptatem. Praesentium nesciunt rerum nisi vel dolorem asperiores",
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
        <h2 className="font-extrabold text-design-dark-green text-5xl tracking-tighter">
          Latest Updates
        </h2>
        <Link
          href={"#"}
          className="r-btn text-sm border-design-green text-design-green ml-auto"
        >
          See all
        </Link>
      </div>

      <div className="flex flex-row gap-10 justify-between mt-10">
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

              <h4 className="uppercase text-sm text-gray-400 tracking-tight">
                {upd.section}
              </h4>
              <h3 className="text-design-dark-green font-semibold tracking-tight text-xl mb-4 mt-2">
                {upd.title}
              </h3>
              <h4 className="text-gray-500 tracking-tighter line-clamp-3">
                {upd.preview}
              </h4>
              <div className="my-4 flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M8.97117 17.8042L17.9414 8.90137L8.97117 -0.00149975L0.000941627 8.90137L8.97117 17.8042Z"
                    fill="#EBB785"
                  />
                </svg>
                <Link
                  className="text-design-green underline text-sm font-bold pl-2"
                  href={upd.link}
                >
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
