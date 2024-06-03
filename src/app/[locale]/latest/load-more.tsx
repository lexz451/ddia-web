"use client";

import ServerImage from "@/lib/components/server-image";
import { TPost } from "@/lib/utils/types";
import ArrowCircleIcon from "@/lib/assets/arrow-circle.svg";
import LoadMore from "@/lib/components/load-more";
import { buildPostsQuery } from "./data";
import IndicatorIcon from "@/lib/assets/indicator.svg";
import { parsePostDate } from "@/lib/utils/helpers";
import I18nLink from "@/lib/components/I18nLink";
import { t } from "i18next";

function PostItem({ post }: { post: TPost }) {
  return (
    <div
      key={post.slug}
      className="grid lg:grid-cols-[320px_1fr] border-b border-neutral-400 gap-5 lg:gap-14 pb-10"
    >
      <I18nLink href={post.platform_url || `/${post.slug}`} className="">
        {post.feature_media && (
          <ServerImage
            {...post.feature_media}
            sizes="320px"
            className="rounded-2xl aspect-[9/6] object-cover w-full"
          ></ServerImage>
        )}
      </I18nLink>
      <div className="flex items-center">
        <div className="flex-1 self-stretch">
          <span className="block mb-3 uppercase text-design-green text-sm">
            {post.post_type.name}
          </span>
          <I18nLink
            href={post.platform_url || `/${post.slug}`}
            className="block mb-2 text-xl font-semibold text-design-dark leading-normal"
          >
            {post.title}
          </I18nLink>
          <div className="mb-4 flex text-xs">
            <h5 className="font-medium text-xs text-neutral-800 leading-3">
              {post.authors?.map((a) => a.name).join(", ")}
            </h5>
            <span className="font-medium text-xs text-neutral-400 leading-3 mx-[0.8ch]">
              -
            </span>
            <h5 className="font-medium text-xs text-neutral-400 leading-3">
              {parsePostDate(post.created_date)}
            </h5>
          </div>

          <p className="text-gray-500 font-avenir line-clamp-3 leading-snug">
            {post.description}
          </p>

          <I18nLink
            href={post.platform_url || `/${post.slug}`}
            className="lg:hidden flex items-center mt-4"
          >
            <IndicatorIcon className="fill-design-yellow mr-2"></IndicatorIcon>{" "}
            <span className="leading-none text-design-green underline text-sm font-bold">
              {t("read-more")}
            </span>
          </I18nLink>
        </div>
        <I18nLink
          className="hidden lg:block my-auto ml-20"
          href={post.platform_url || `/${post.slug}`}
        >
          <ArrowCircleIcon className="stroke-design-green stroke-[1.5]"></ArrowCircleIcon>
        </I18nLink>
      </div>
    </div>
  );
}

export default function LoadMoreWrapper({
  posts,
  total,
  tag,
  query,
  className,
}: {
  posts: any[];
  total: number;
  className?: string;
  tag?: string;
  query?: string;
}) {
  const postsQuery = buildPostsQuery(tag, query);

  return (
    <LoadMore
      renderComponent={(item, key) => (
        <PostItem post={item} key={key}></PostItem>
      )}
      items={posts}
      total={total}
      params={postsQuery}
      className={className}
    />
  );
}
