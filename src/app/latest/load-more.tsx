'use client';

import ServerImage from "@/lib/components/server-image";
import { TPost } from "@/lib/utils/types";
import { Link } from "@lexz451/next-nprogress";
import ArrowCircleIcon from "@/lib/assets/arrow-circle.svg";
import LoadMore from "@/lib/components/load-more";
import { buildPostsQuery } from "./data";
import { forwardRef } from "react";

function PostItem({ post }: { post: TPost }) {
    return (
        <div
            key={post.slug}
            className="grid grid-cols-[320px_1fr] border-b border-neutral-400 gap-14 pb-10"
        >
            <div className="">
                {post.feature_media && <ServerImage {...post.feature_media} sizes="320px" className="rounded-2xl aspect-[9/6] object-cover"></ServerImage>}
            </div>
            <div className="flex items-center">
                <div className="flex-1 self-stretch">
                    <span className="block mb-3 uppercase text-design-green text-sm">
                        {post.post_type.name}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold font-avenir text-design-dark leading-relaxed">
                        {post.title}
                    </h3>
                    <div className="mb-4 flex text-xs">
                        <h5 className="font-medium text-xs text-neutral-800 leading-3">
                            {
                                post.authors?.map(a => a.name).join(', ')
                            }
                        </h5>
                        <span className="font-medium text-xs text-neutral-400 leading-3 mx-[0.8ch]">-</span>
                        <h5 className="font-medium text-xs text-neutral-400 leading-3">{
                            new Date(post.createdAt).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })
                        }</h5>
                    </div>

                    <p className="text-gray-500 font-avenir line-clamp-3 leading-snug">
                        {post.description}
                    </p>
                </div>
                <Link className="my-auto ml-20" href={`/${post.slug}`}>
                    <ArrowCircleIcon className="stroke-design-green stroke-[1.5]"></ArrowCircleIcon>
                </Link>
            </div>
        </div>
    )
}

export default function LoadMoreWrapper({
    posts,
    total,
    tag,
    query,
    className
}: {
    posts: any[],
    total: number,
    className?: string,
    tag?: string,
    query?: string
}) {

    const postsQuery = buildPostsQuery(tag, query);

    return <LoadMore
        renderComponent={(item, key) => <PostItem post={item} key={key}></PostItem>}
        items={posts}
        total={total}
        params={postsQuery}
        className={className}
    />
}