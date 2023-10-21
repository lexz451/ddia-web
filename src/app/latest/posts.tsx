"use client";

import ServerImage from "@/lib/components/server-image";
import { TPost } from "@/lib/utils/types";
import { Link } from "next-nprogress";
import { useEffect, useState } from "react";
import ArrowCircleIcon from "@/lib/assets/arrow-circle.svg";

export default function Posts({
  posts,
  limit,
  type,
  query,
  total,
}: {
  posts: TPost[];
  limit: number;
  type: number | undefined;
  query: string | undefined;
  total: number;
}) {
  const [latestPosts, setLatestPosts] = useState<TPost[]>(posts);
  const [canFetchMore, setCanFetchMore] = useState(false);

  useEffect(() => setLatestPosts(posts), [posts]);
  useEffect(
    () => setCanFetchMore(latestPosts.length < total),
    [latestPosts, total]
  );

  function fetchMore() {
    const _start = latestPosts.length;
    const params = new URLSearchParams();
    params.append("limit", limit.toString());
    params.append("start", _start.toString());
    if (type) {
      params.append("type", type.toString());
    }
    if (query) {
      params.append("q", query);
    }
    fetch(`/api/posts?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => {
        setLatestPosts([...latestPosts, ...data.data]);
      });
  }

  return (
    <div>
      <div>
        {latestPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-4xl font-semibold text-center text-design-dark">
              No posts found
            </h1>
            <p className="text-center text-gray-500 mt-4">Try another search</p>
          </div>
        )}
        {latestPosts.map((post: TPost) => {
          return (
            <div
              key={post.slug}
              className="lg:grid lg:grid-cols-[320px_1fr] gap-14 py-5 lg:py-10 lg:border-t lg:border-t-gray-500"
            >
              <div className="mb-2 lg:mb-0">
                {post.feature_media && (
                  <ServerImage
                    {...post.feature_media}
                    sizes="320px"
                    className="rounded-2xl aspect-[4/2.5]"
                  ></ServerImage>
                )}
              </div>
              <div className="lg:flex lg:items-center">
                <div className="flex-1 self-stretch">
                  <span className="block mb-3 uppercase text-gray-900 text-opacity-60 text-sm">
                    {post.post_type.name}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold font-avenir text-design-dark leading-relaxed">
                    {post.title}
                  </h3>
                  <div className="mb-4 flex text-xs">
                    <h5 className="font-medium text-xs text-neutral-800 leading-3">
                      {post.authors?.map((a) => a.name).join(", ")}
                    </h5>
                    <span className="font-medium text-xs text-neutral-400 leading-3 mx-[0.8ch]">
                      -
                    </span>
                    <h5 className="font-medium text-xs text-neutral-400 leading-3">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </h5>
                  </div>

                  <p className="text-gray-500 font-avenir line-clamp-3 leading-snug">
                    {post.description}
                  </p>
                </div>
                <Link className="my-auto ml-20" href="#">
                  <ArrowCircleIcon className="hidden lg:block stroke-design-green stroke-[1.5]"></ArrowCircleIcon>
                  <div className="flex lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M8.9868 17.8042L17.957 8.90137L8.9868 -0.00149975L0.0165666 8.90137L8.9868 17.8042Z"
                        fill="#EBB785"
                      />
                    </svg>
                    <p className="ml-2 font-avenir font-bold text-sm text-design-green underline">
                      Read more
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {canFetchMore && (
        <div className="flex w-full my-20">
          <div className="lg:hidden my-auto basis-full h-[1px] bg-gray-400"></div>
          <button
            className="mx-2 lg:mx-auto flex-shrink-0 text-white bg-design-green border-none font-normal r-btn"
            onClick={fetchMore}
          >
            Load more
          </button>
          <div className="lg:hidden my-auto basis-full h-[1px] bg-gray-400"></div>
        </div>
      )}
    </div>
  );
}
