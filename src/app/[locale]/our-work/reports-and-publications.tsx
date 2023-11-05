"use client";

import IndicatorIcon from "@/lib/assets/indicator.svg";
import { TPost } from "@/lib/utils/types";
import LoadMore from "@/lib/components/load-more";
import QueryString from "qs";
import ServerImage from "@/lib/components/server-image";
import { parsePostDate, parseReadTime } from "@/lib/utils/helpers";
import I18nLink from "@/lib/components/I18nLink";


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
            className="BlogSectionsPost grid lg:grid-cols-2 relative bg-white rounded-2xl overflow-hidden"
        >
            <I18nLink href={`/${post.slug}`}>
                {post.feature_media && (
                    <ServerImage
                        {...post.feature_media}
                        className="relative w-full h-full object-cover object-center"
                    ></ServerImage>
                )}
            </I18nLink>
            <div className="Content p-10  bg-white flex-col justify-center items-start gap-9 inline-flex">
                <div className="LeadingContent self-stretch h-40 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="Category self-stretch text-design-light-green text-sm font-medium  uppercase leading-tight">
                        Report
                    </div>
                    <div className="TitleAndPreview self-stretch flex-col justify-start items-start gap-3 flex">
                        <I18nLink
                            href={`/${post.slug}`}
                            className="Title self-stretch text-gray-900 text-xl font-semibold font-avenir leading-7"
                        >
                            {post.title}
                        </I18nLink>
                        <p className="Preview self-stretch text-gray-500 text-base font-normal leading-normal line-clamp-3">
                            {post.description}
                        </p>
                    </div>
                </div>
                <div className="BlogSectionsAvatarWithText justify-start items-center gap-3 inline-flex">
                    {post.authors?.[0]?.avatar && (
                        <div className="Avatar w-10 h-10 flex items-center justify-center bg-stone-100 rounded-full">
                            <ServerImage
                                {...post.authors?.[0]?.avatar}
                                className="w-full h-full object-cover object-center rounded-full"
                            ></ServerImage>
                        </div>
                    )}
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
    reports,
}: {
    reports: { data: TPost[]; total: number };
}) {
    return (
        <section
            id="reports-and-publications"
            className="our-work-section gradient-green-section"
        >
            <div className="page-container pt-10 lg:pt-20 pb-10 lg:pb-28">
                <div className="flex flex-col items-center">
                    <IndicatorIcon className="fill-white w-4 h-4"></IndicatorIcon>
                    <div className="Headline mt-10 text-center text-design-green text-4xl lg:text-6xl font-extrabold  leading-10">
                        Reports and Publications
                    </div>
                    <div className="IntroductoryText mt-8 max-w-prose text-center text-design-green text-lg font-normal  leading-normal">
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
                            items={reports.data}
                            total={reports.total}
                            params={postParams}
                            className={
                                "flex flex-col gap-10 lg:max-w-[80%] mx-auto"
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
