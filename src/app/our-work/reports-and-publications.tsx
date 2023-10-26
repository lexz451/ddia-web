"use client";

import IndicatorIcon from "@/lib/assets/indicator.svg";
import { TPost } from "@/lib/utils/types";
import LoadMore from "@/lib/components/load-more";
import QueryString from "qs";
import ServerImage from "@/lib/components/server-image";
import UserIcon from "@/lib/assets/user.svg";
import { parsePostDate, parseReadTime } from "@/lib/utils/helpers";
import { Link } from "@lexz451/next-nprogress";

const postParams = QueryString.stringify({
    filters: {
        post_type: {
            id: {
                $eq: 2,
            },
        },
    },
    populate: [
        "feature_media",
        "authors",
        "authors.avatar",
        "categories",
        "tags",
    ],
    pagination: {
        limit: 6,
    },
    sort: ["publish_date:desc"],
});

function PostItem({ post }: { post: TPost }) {
    return (
        <div
            key={post.slug}
            className="BlogSectionsPost grid grid-cols-2 relative bg-white rounded-2xl overflow-hidden"
        >
            <Link href={`/${post.slug}`}>
                {post.feature_media && (
                    <ServerImage
                        {...post.feature_media}
                        className="relative w-full h-full object-cover object-center"
                    ></ServerImage>
                )}
            </Link>
            <div className="Content p-10  bg-white flex-col justify-center items-start gap-9 inline-flex">
                <div className="LeadingContent self-stretch h-40 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="Category self-stretch text-design-light-green text-sm font-medium  uppercase leading-tight">
                        Report
                    </div>
                    <div className="TitleAndPreview self-stretch flex-col justify-start items-start gap-3 flex">
                        <Link href={`/${post.slug}`} className="Title self-stretch text-gray-900 text-xl font-semibold font-avenir leading-7">
                            {post.title}
                        </Link>
                        <p className="Preview self-stretch text-gray-500 text-base font-normal leading-normal line-clamp-3">
                            {post.description}
                        </p>
                    </div>
                </div>
                <div className="BlogSectionsAvatarWithText justify-start items-center gap-3 inline-flex">
                    <div className="Avatar w-10 h-10 flex items-center justify-center bg-stone-100 rounded-full">
                        {post.authors?.[0]?.avatar ? (
                            <ServerImage
                                {...post.authors?.[0]?.avatar}
                                className="w-full h-full object-cover object-center rounded-full"
                            ></ServerImage>
                        ) : (
                            <UserIcon className="w-8 h-8 fill-design-green"></UserIcon>
                        )}
                    </div>
                    <div className="Text flex-col justify-start items-start inline-flex">
                        <div className="Title text-gray-900 text-sm font-medium  leading-tight">
                            {post.authors?.[0]?.name}
                        </div>
                        <div className="SupportingText text-gray-500 text-sm font-normal  leading-tight">
                            {parsePostDate(post.publish_date)}
                            <span className="mx-2">·</span>
                            {parseReadTime(post?.content)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ReportsAndPublications({
    reportsAndPublications,
}: {
    reportsAndPublications: { data: TPost[]; total: number };
}) {
    return (
        <section
            id="reports-and-publications"
            className="our-work-section gradient-green-section"
        >
            <div className="page-container py-20">
                <div className="flex flex-col items-center">
                    <IndicatorIcon className="fill-white w-4 h-4"></IndicatorIcon>
                    <div className="Headline mt-10 text-center text-design-green text-6xl font-extrabold  leading-10">
                        Reports and Publications
                    </div>
                    <div className="IntroductoryText mt-8 max-w-prose text-center text-design-green text-lg font-normal  leading-relaxed">
                        DDIA&apos;s reports and publications contribute to the
                        development of a set of theories on what is unique to
                        Latinos and Latin Americans when it comes to information
                        disorder online.
                    </div>
                    <div className="flex flex-col mt-10">
                        <LoadMore
                            renderComponent={(item, key) => (
                                <PostItem post={item} key={key}></PostItem>
                            )}
                            items={reportsAndPublications.data}
                            total={reportsAndPublications.total}
                            params={postParams}
                            className={
                                "flex flex-col gap-10 max-w-[80%] mx-auto"
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
