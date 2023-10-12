'use client';

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
    total
}: {
    posts: TPost[],
    limit: number,
    type: number | undefined,
    query: string | undefined,
    total: number
}) {

    const [latestPosts, setLatestPosts] = useState<TPost[]>(posts);
    const [canFetchMore, setCanFetchMore] = useState(false);

    useEffect(() => setLatestPosts(posts), [posts]);
    useEffect(() => setCanFetchMore(latestPosts.length < total), [latestPosts, total]);

    function fetchMore() {
        const _start = latestPosts.length;
        const params = new URLSearchParams();
        params.append('limit', limit.toString());
        params.append('start', _start.toString());
        if (type) {
            params.append('type', type.toString());
        }
        if (query) {
            params.append('q', query);
        }
        fetch(`/api/posts?${params.toString()}`)
            .then(response => response.json())
            .then(data => {
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
                        <p className="text-center text-gray-500 mt-4">
                            Try another search
                        </p>
                    </div>
                )}
                {latestPosts.map((post: TPost) => {
                    return (
                        <div
                            key={post.slug}
                            className="grid grid-cols-[320px_1fr] gap-14 py-10 border-t border-t-gray-500"
                        >
                            <div className="">
                                {post.feature_media && <ServerImage {...post.feature_media} sizes="320px" className="rounded-2xl aspect-[4/2.5]"></ServerImage>}
                            </div>
                            <div className="flex items-center">
                                <div className="flex-1 self-stretch">
                                    <span className="block mb-3 uppercase text-gray-900 text-opacity-60 text-sm">
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
                                <Link className="my-auto ml-20" href="#">
                                    <ArrowCircleIcon className="stroke-design-green stroke-[1.5]"></ArrowCircleIcon>
                                </Link>
                            </div>

                        </div>
                    );
                })}
            </div>
            {canFetchMore && (
                <div className="flex w-full my-20">
                    <button
                        className="mx-auto text-white bg-design-green border-none font-normal r-btn"
                        onClick={fetchMore}
                    >
                        Load more
                    </button>
                </div>
            )}
        </div>
    )
}