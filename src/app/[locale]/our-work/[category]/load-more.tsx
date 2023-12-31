"use client";

import LoadMore from "@/lib/components/load-more";
import ServerImage from "@/lib/components/server-image";
import { buildPostsQuery } from "./data";
import I18nLink from "@/lib/components/I18nLink";
import { parsePostDate, parseReadTime } from "@/lib/utils/helpers";
import { TPost } from "@/lib/utils/types";

function PostItem({ post }: { post: TPost }) {
    const author = post?.authors?.[0];

    return (
        <div
            key={post?.slug}
            className="overflow-hidden bg-white rounded-lg flex-col justify-stretch items-start inline-flex"
        >
            <I18nLink className="w-full" href={`${post?.platform_url ? post.platform_url : `/${post.slug}`}`}>
                {post?.feature_media && (
                    <ServerImage
                        {...post.feature_media}
                        className="aspect-[9/6] w-full object-center object-cover"
                    ></ServerImage>
                )}
            </I18nLink>
            <div className="flex-1 p-6 bg-white flex-col justify-between items-start gap-8 inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-design-cyan text-sm font-medium leading-tight">
                        {post?.tags
                            ?.map((category: any) => category.title)
                            .join(", ")}
                    </div>
                    <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                        <I18nLink
                            href={`${post?.platform_url ? post.platform_url : `/${post.slug}`}`}
                            className="self-stretch text-gray-900 text-xl font-semibold leading-7"
                        >
                            {post?.title}
                        </I18nLink>
                    </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                    <div className="w-10 h-10 flex-shrink-0 bg-stone-100 rounded-full overflow-hidden">
                        {author?.avatar && (
                            <ServerImage
                                {...author.avatar}
                                width={40}
                                height={40}
                                className="rounded-full"
                            ></ServerImage>
                        )}
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-gray-900 text-sm font-medium leading-tight">
                            {author?.name}
                        </div>
                        <div className="text-gray-500 text-sm font-normal leading-tight">
                            {parsePostDate(post?.created_date)}
                            <span className="mx-1">·</span>
                            {parseReadTime(post?.content)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function LoadMoreWrapper({
    posts,
    total,
    className,
    category,
    tag,
    query,
}: {
    posts: any[];
    total: number;
    category: string;
    className?: string;
    tag?: string;
    query?: string;
}) {
    const params = buildPostsQuery(category, tag, query);

    return (
        <LoadMore
            renderComponent={(item, key) => (
                <PostItem post={item} key={key}></PostItem>
            )}
            params={params}
            items={posts}
            total={total}
            className={className}
        />
    );
}
