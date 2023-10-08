import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import upd1 from "@/lib/assets/tecnologia-fondo-toque-humano-nueva-version-moderna-creacion-adan-11.png";
import upd2 from "@/lib/assets/diseno-bodegones-revolucion-11.png";
import upd3 from "@/lib/assets/unnamed.png";
import ServerImage from "./ServerImage";
import { TPost } from "../utils/types";


export default function LatestUpdates({
  posts,
}: {
  posts: TPost[];
}) {
  
  return (
    <section className="flex flex-col">
      <div className="flex w-full">
        <h2 className="text-5xl font-avenir font-semibold tracking-tighter text-design-dark-green">
          Latest Updates
        </h2>
        <Link
          href={"#"}
          className="ml-auto text-sm r-btn border-design-green text-design-green"
        >
          See all
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-10">
        {posts.map((upd) => {
          return (
            <div key={upd.slug} className={`flex flex-col`}>
              <div className="relative w-full mb-2">
                {upd.feature_media && <ServerImage {...upd.feature_media} sizes="33vw"/>}
              </div>

              <h4 className="text-sm tracking-tight text-gray-400 uppercase">
                {upd.post_type?.name}
              </h4>
              <h3 className="mt-2 mb-4 text-xl font-semibold tracking-tight text-design-dark-green">
                {upd.title}
              </h3>
              <h4 className="tracking-tighter text-gray-500 line-clamp-3">
                {upd.description}
              </h4>
              <div className="flex flex-row items-center my-4">
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
                  className="pl-2 text-sm font-bold underline text-design-green"
                  href={'/'}
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
