"use client";

import ServerImage from "@/lib/components/server-image";
import { TPost } from "@/lib/utils/types";
import { Link } from "@lexz451/next-nprogress";
import ArrowCircleIcon from "@/lib/assets/arrow-circle.svg";
import LoadMore from "@/lib/components/load-more";
import { buildPostsQuery } from "./data";
import IndicatorIcon from "@/lib/assets/indicator.svg";
import { parsePostDate } from "@/lib/utils/helpers";

function PostItem({ post }: { post: TPost }) {
    return (
        <div
            key={post.slug}
            className="grid lg:grid-cols-[320px_1fr] border-b border-neutral-400 gap-5 lg:gap-14 pb-10"
        >
            <Link href={post.platform_url || `/${post.slug}`} className="">
                {post.feature_media && (
                    <ServerImage
                        {...post.feature_media}
                        sizes="320px"
                        className="rounded-2xl aspect-[9/6] object-cover"
                    ></ServerImage>
                )}
            </Link>
            <div className="flex items-center">
                <div className="flex-1 self-stretch">
                    <span className="block mb-3 uppercase text-design-green text-sm">
                        {post.tags?.map((t) => t.title).join(", ")}
                    </span>
                    <Link
                        href={post.platform_url || `/${post.slug}`}
                        className="block mb-2 text-xl font-semibold text-design-dark leading-normal"
                    >
                        {post.title}
                    </Link>
                    <div className="mb-4 flex text-xs">
                        <h5 className="font-medium text-xs text-neutral-800 leading-3">
                            {post.authors?.map((a) => a.name).join(", ")}
                        </h5>
                        <span className="font-medium text-xs text-neutral-400 leading-3 mx-[0.8ch]">
                            -
                        </span>
                        <h5 className="font-medium text-xs text-neutral-400 leading-3">
                            {parsePostDate(post.createdAt)}
                        </h5>
                    </div>

                    <p className="text-gray-500 font-avenir line-clamp-3 leading-snug">
                        {post.description}
                    </p>

                    <Link
                        href={post.platform_url || `/${post.slug}`}
                        className="lg:hidden flex items-center mt-4"
                    >
                        <IndicatorIcon className="fill-design-yellow mr-2"></IndicatorIcon>{" "}
                        <span className="leading-none text-design-green underline text-sm font-bold">
                            Read More
                        </span>
                    </Link>
                </div>
                <Link
                    className="hidden lg:block my-auto ml-20"
                    href={post.platform_url || `/${post.slug}`}
                >
                    <ArrowCircleIcon className="stroke-design-green stroke-[1.5]"></ArrowCircleIcon>
                </Link>
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