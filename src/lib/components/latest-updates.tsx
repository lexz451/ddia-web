
import ServerImage from "./server-image";
import { TPost } from "../utils/types";
import I18nLink from "./I18nLink";

export default function LatestUpdates({
  posts,
  t
}: {
  posts: TPost[];
  t: any;
}) {

  return (
    <section className="flex flex-col">
      <div className="flex items-center w-full">
        <h2 className="text-5xl font-avenir tracking-tighter text-design-dark-green">
          {t('latest-updates')}
        </h2>
        <I18nLink
          href={"/latest"}
          className="hidden lg:block ml-auto text-sm r-btn border-none bg-design-green text-white"
        >
          {t("see-all")}
        </I18nLink>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {posts.map((upd) => {
          return (
            <div key={upd.slug} className={`flex flex-col`}>
              <I18nLink href={`${upd.platform_url ? upd.platform_url : `/${upd.slug}`}`} className="relative w-full mb-4 group rounded-2xl overflow-hidden">
                {upd.feature_media && <ServerImage {...upd.feature_media} sizes="33vw" className="aspect-[9/6] object-cover transition-transform duration-700 group-hover:scale-110" />}
              </I18nLink>
              <span className="block text-sm tracking-tight text-gray-500 uppercase">
                {upd.post_type?.name}
              </span>
              <I18nLink href={`${upd.platform_url ? upd.platform_url : `/${upd.slug}`}`}>
                <h3 className="mt-2 mb-4 text-xl font-semibold tracking-tight text-design-dark-green">
                  {upd.title}
                </h3>
              </I18nLink>
              <span className="block tracking-tighter text-gray-500 line-clamp-3">
                {upd.description}
              </span>
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
                <I18nLink
                  className="pl-2 text-sm font-bold underline text-design-green"
                  href={`${upd.platform_url ? upd.platform_url : `/${upd.slug}`}`}
                >
                  {t("read-more")}
                </I18nLink>
              </div>
            </div>
          );
        })}
      </div>

      <I18nLink
        prefetch={true}
        href={"/latest"}
        className="lg:hidden mt-10 mx-auto text-sm r-btn border-none bg-design-green text-design-light"
      >
        See all
      </I18nLink>
    </section>
  );
}
