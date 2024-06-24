"use client";

import IndicatorIcon from "@/lib/assets/indicator.svg";
import { TPost } from "@/lib/utils/types";
import LoadMore from "@/lib/components/load-more";
import QueryString from "qs";
import ServerImage from "@/lib/components/server-image";
import { parsePostDate, parseReadTime } from "@/lib/utils/helpers";
import I18nLink from "@/lib/components/I18nLink";
import useI18n from "@/lib/hooks/useI18n";

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
    sort: ["created_date:desc"],
});

function PostItem({ post }: { post: TPost; }) {
    return (
        <div
            key={post.slug}
            className="relative grid lg:grid-cols-2 bg-white rounded-2xl overflow-hidden BlogSectionsPost"
        >
            <I18nLink href={`/${post.slug}`}>
                {post.feature_media && (
                    <ServerImage
                        {...post.feature_media}
                        className="relative w-full h-full object-center object-cover"
                    ></ServerImage>
                )}
            </I18nLink>
            <div className="inline-flex flex-col justify-center items-start gap-9 bg-white p-10 Content">
                <div className="flex flex-col justify-start items-start gap-2 LeadingContent self-stretch">
                    <div className="font-medium text-design-light-green text-sm uppercase leading-tight Category self-stretch">
                        Report
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3 self-stretch TitleAndPreview">
                        <I18nLink
                            href={`/${post.slug}`}
                            className="font-avenir font-semibold text-gray-900 text-xl leading-7 self-stretch Title"
                        >
                            {post.title}
                        </I18nLink>
                        <p className="line-clamp-3 font-normal text-base text-gray-500 leading-normal Preview self-stretch">
                            {post.description}
                        </p>
                    </div>
                    <div className="inline-flex justify-start items-center gap-3 BlogSectionsAvatarWithText">
                        {post.authors?.[0]?.avatar && (
                            <div className="flex justify-center items-center bg-stone-100 rounded-full w-10 h-10 Avatar">
                                <ServerImage
                                    {...post.authors?.[0]?.avatar}
                                    className="rounded-full w-full h-full object-center object-cover"
                                ></ServerImage>
                            </div>
                        )}
                        <div className="inline-flex flex-col justify-start items-start Text">
                            <div className="font-medium text-gray-900 text-sm leading-tight Title">
                                {post.authors?.[0]?.name}
                            </div>
                            <div className="font-normal text-gray-500 text-sm leading-tight SupportingText">
                                {parsePostDate(post.created_date)}
                                <span className="mx-2">·</span>
                                {parseReadTime(post?.content)}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default function ReportsAndPublications({
    reports,
    locale,
    translations,
}: {
    reports: { data: TPost[]; total: number };
    locale: string;
    translations: any;
}) {

    const { t } = useI18n(locale);

    return (
        <section
            id="reports-and-publications"
            className="gradient-green-section our-work-section"
        >
            <div className="pt-10 lg:pt-20 pb-10 lg:pb-28 page-container">
                <div className="flex flex-col items-center">
                    <IndicatorIcon className="w-4 h-4 fill-white"></IndicatorIcon>
                    <div className="mt-10 font-extrabold text-4xl text-center text-design-green lg:text-6xl leading-10 Headline">
                        {t("reports-and-publications")}
                    </div>
                    <div className="mt-8 max-w-prose font-normal text-center text-design-green text-lg leading-normal IntroductoryText">
                        {/* {t("our-work-page.research.message8")} */}
                        {translations?.research.message8}
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
