import FacebookIcon from "@/lib/assets/facebook.svg";
// import InstagramIcon from '@/lib/assets/instagram.svg';
import TelegramIcon from "@/lib/assets/telegram.svg";
import XIcon from "@/lib/assets/x-twitter.svg";
import WAIcon from "@/lib/assets/whatsapp.svg";
import NewsletterBanner from "@/lib/assets/banners/newsletter.png";

import ServerImage from "@/lib/components/server-image";
import { TPost } from "@/lib/utils/types";
import { parsePostContent, parsePostDate } from "@/lib/utils/helpers";
import LatestUpdates from "@/lib/components/latest-updates";
import { getApi } from "@/lib/utils/api";
import { notFound } from "next/navigation";

// import CommentBox from '@/lib/components/comments/CommentBox';
import { fetchData } from "./data";
import I18nLink from "@/lib/components/I18nLink";
import Image from "next/image";
import ContactUsBanner from "@/lib/components/ContactUsBanner";
import { ArticleJsonLd } from "next-seo";

export async function generateStaticParams() {
    const { data: posts } = await getApi<TPost[]>(`/posts`, {
        filters: {
            content: {
                $ne: null,
            },
        },
    });
    return posts.map((post: TPost) => ({
        slug: post.slug,
    }));
}

export default async function ArticlePage({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const { post, latestPosts, related } = await fetchData(slug);

    if (!post) {
        return notFound();
    }

    const content = parsePostContent(post.content);

    const shareUrl = encodeURI(`${process.env.SITE_HOST}/${post.slug}`);

    return (
        <>
            <ArticleJsonLd
                useAppDir={true}
                url={`${process.env.SITE_HOST}/${post.slug}`}
                title={post.title}
                description={post.description}
                datePublished={post.publishedAt}
                dateModified={post.updatedAt}
                authorName={post.authors?.map((a) => ({
                    name: a.name,
                }))}
                images={[post.feature_media?.url]}
                publisherName="DDIA"
                publisherLogo={`${process.env.SITE_HOST}/logo.png`}
                isAccessibleForFree={true}
            />
            <article className="pt-[104px]">
                <header className="flex flex-col">
                    {post.feature_media && (
                        <ServerImage
                            {...post.feature_media}
                            priority={true}
                            className="h-[40vh] lg:h-[60vh] w-full object-cover"
                            sizes="100vw"
                        ></ServerImage>
                    )}
                    <div className="page-container">
                        <div className="flex items-center justify-center my-12">
                            <div className="Title text-center text-neutral-800 text-[45px] font-semibold leading-[3.5rem]">
                                {post.title}
                            </div>
                        </div>
                        <div className="grid grid-cols-[1fr_250px] border-y border-neutral-300">
                            <div className="py-4">
                                <div className="IntroductoryText leading-none">
                                    <span className="text-neutral-800 text-xs font-semibold">
                                        {post.authors
                                            ?.map((a) => a.name)
                                            .join(", ")}
                                    </span>
                                    <span className="mx-2">-</span>
                                    <span className="text-neutral-400 text-xs font-semibold">
                                        {parsePostDate(post.created_date)}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center justify-center border-l border-neutral-300">
                                <div className="IntroductoryText w-12 text-neutral-800 text-xs font-semibold leading-3">
                                    Share
                                </div>
                                <div className="flex items-center gap-2">
                                    <I18nLink
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                                        className="w-8 h-8 rounded-full bg-design-dark flex items-center justify-center"
                                    >
                                        <FacebookIcon className="fill-white w-6 h-6"></FacebookIcon>
                                    </I18nLink>
                                    <I18nLink
                                        href={`https://twitter.com/share?url=${shareUrl}`}
                                        className="w-8 h-8 rounded-full bg-design-dark flex items-center justify-center"
                                    >
                                        <XIcon className="fill-white w-5 h-5"></XIcon>
                                    </I18nLink>
                                    <I18nLink
                                        href={`https://telegram.me/share/url?url=${shareUrl}`}
                                        className="w-8 h-8 rounded-full bg-design-dark flex items-center justify-center"
                                    >
                                        <TelegramIcon className="fill-white w-6 h-6"></TelegramIcon>
                                    </I18nLink>
                                    <I18nLink
                                        data-action="share/whatsapp/share"
                                        href={`https://web.whatsapp.com/send?text=${shareUrl}`}
                                        className="w-8 h-8 rounded-full bg-design-dark flex items-center justify-center"
                                    >
                                        <WAIcon className="fill-white w-6 h-6"></WAIcon>
                                    </I18nLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="page-container">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] mt-10 gap-14">
                        <div>
                            <div
                                className="post-content"
                                dangerouslySetInnerHTML={{
                                    __html: content,
                                }}
                            ></div>
                            {/* <CommentBox postId={post.id}></CommentBox> */}
                        </div>
                        <aside className="flex flex-col gap-10">
                            <I18nLink
                                href={"/"}
                                className="Rectangle204 overflow-hidden bg-gradient-to-b from-emerald-300 to-emerald-300 rounded-2xl flex flex-col items-center justify-center"
                            >
                                <Image
                                    src={NewsletterBanner}
                                    alt="Newsletter"
                                    className="hover:scale-105 transition-transform duration-300"
                                ></Image>
                            </I18nLink>
                            <div className="top-24 flex flex-col">
                                <div>
                                    <div className="IntroductoryText border-b border-neutral-800 mb-5 pb-5 text-neutral-800 text-xl font-semibold leading-3">
                                        You may also like
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        {related.map((post) => (
                                            <div key={post.slug}>
                                                <div className="overflow-hidden">
                                                    {post.feature_media && (
                                                        <ServerImage
                                                            {...post.feature_media}
                                                            sizes="160px"
                                                            className={`rounded-2xl aspect-[16/9] object-cover h-auto`}
                                                        ></ServerImage>
                                                    )}
                                                </div>
                                                <I18nLink
                                                    href={`/${post.slug}`}
                                                    className="Title block mt-2 text-neutral-800 text-md font-semibold leading-snug"
                                                >
                                                    {post.title}
                                                </I18nLink>
                                                <div className="IntroductoryText">
                                                    <span className="text-neutral-800 text-xs font-semibold leading-3">
                                                        {
                                                            post.authors?.[0]
                                                                ?.name
                                                        }
                                                    </span>
                                                    {post.authors?.length >
                                                        0 && (
                                                        <span className="mx-2">
                                                            -
                                                        </span>
                                                    )}
                                                    <span className="text-neutral-400 text-xs font-semibold leading-3">
                                                        {parsePostDate(
                                                            post.created_date
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* <div className="mt-8">
                                <div className="IntroductoryText border-b border-neutral-800 pb-5 text-neutral-800 text-xl font-semibold leading-3">
                                    DDIA in the news
                                </div>
                                <div className="flex flex-col">
                                    {inTheNews.map((post) => (
                                        <I18nLink
                                            href={`/${post.slug}`}
                                            key={post.slug}
                                            className="Title border-b border-neutral-500 py-4 text-neutral-800 text-base font-semibold leading-snug"
                                        >
                                            {post.title}
                                        </I18nLink>
                                    ))}
                                </div>
                            </div> */}
                            </div>
                        </aside>
                    </div>
                </main>
                <footer className="page-container flex flex-col gap-10 mb-20 pb-footer">
                    <ContactUsBanner></ContactUsBanner>
                    <LatestUpdates posts={latestPosts}></LatestUpdates>
                </footer>
            </article>
        </>
    );
}
