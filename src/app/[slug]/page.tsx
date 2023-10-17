import FacebookIcon from '@/lib/assets/facebook.svg';
import InstagramIcon from '@/lib/assets/instagram.svg';
import XIcon from '@/lib/assets/x-twitter.svg';
import WAIcon from '@/lib/assets/whatsapp.svg';

import ServerImage from "@/lib/components/server-image";
import { fetchLatestPosts, fetchPostBySlug } from "@/lib/data/posts"
import { TPost } from "@/lib/utils/types";
import { Metadata } from "next"
import { parsePostContent } from '@/lib/utils/helpers';
import LatestUpdates from '@/lib/components/latest-updates';

// export async function generateStaticParams() {
//     const {data: posts} = await fetchLatestPosts({});
//     return posts.map((post: TPost) => ({
//         slug: post.slug
//     }));
// }

// export const metadata: Metadata = {};

export default async function ArticlePage({
    params: { slug }
}: { params: { slug: string } }) {

    const { data: [post] }: { data: TPost[] } = await fetchPostBySlug(slug);
    const { data: latestPosts } = await fetchLatestPosts({
        limit: 3,
    });

    const content = parsePostContent(post.content);

    return (
        <article className="">
            <header className="flex flex-col">
                {post.feature_media && (<ServerImage {...post.feature_media} className="h-[75vh] object-cover"></ServerImage>)}
                <div className="page-container">
                    <div className="flex items-center justify-center my-10">
                        <div className="Title text-center text-neutral-800 text-5xl font-semibold leading-10">How to use search engine optimization to drive sales how to use search engine sales.</div>
                    </div>
                    <div className="grid grid-cols-[1fr_250px] border-y border-neutral-300">
                        <div className="py-4">
                            <div className="IntroductoryText leading-none">
                                <span className="text-neutral-800 text-xs font-semibold">Mariano García </span>
                                <span className="text-neutral-400 text-xs font-semibold">- June 2, 2023</span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center justify-center border-l border-neutral-300">
                            <div className="IntroductoryText w-12 text-neutral-800 text-xs font-semibold leading-3">Share</div>
                            <div className='flex items-center gap-2'>
                                <div className='w-8 h-8 rounded-full bg-design-dark flex items-center justify-center'>
                                    <FacebookIcon className="fill-white w-6 h-6"></FacebookIcon>
                                </div>
                                <div className='w-8 h-8 rounded-full bg-design-dark flex items-center justify-center'>
                                    <InstagramIcon className="fill-white w-6 h-6"></InstagramIcon>
                                </div>
                                <div className='w-8 h-8 rounded-full bg-design-dark flex items-center justify-center'>
                                    <XIcon className="fill-white w-5 h-5"></XIcon>
                                </div>
                                <div className='w-8 h-8 rounded-full bg-design-dark flex items-center justify-center'>
                                    <WAIcon className="fill-white w-6 h-6"></WAIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="page-container">
                <div className="grid grid-cols-[2fr_1fr] mt-10 gap-10">
                    <div className='post-content' dangerouslySetInnerHTML={{
                        __html: content
                    }}>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className="Rectangle204 h-96 bg-gradient-to-b from-emerald-300 to-emerald-300 rounded-2xl flex flex-col items-center justify-center">
                            <div className="Headline text-center text-black text-opacity-60 text-3xl font-semibold font-['Inter'] leading-9">Newsletter subscription banner</div>
                        </div>
                        <div>
                            <div className="IntroductoryText border-b border-neutral-800 mb-5 pb-5 text-neutral-800 text-xl font-semibold leading-3">What We Are Reading</div>
                            <div>
                                <div className='aspect-[4/2.5] bg-design-green'></div>
                                <h5 className="Title my-2 text-neutral-800 text-lg font-semibold leading-snug">How to use search engine optimization to drive sales how to use search engine sales.</h5>
                                <div className="IntroductoryText"><span className="text-neutral-800 text-xs font-semibold leading-3">Mariano García </span><span className="text-neutral-400 text-xs font-semibold leading-3">- June 2, 2023</span></div>
                            </div>
                        </div>
                        <div>
                            <div className="IntroductoryText border-b border-neutral-800 mb-5 pb-5 text-neutral-800 text-xl font-semibold leading-3">DIA in the news</div>
                            <div className='flex flex-col'>
                                <div className="Title border-b border-neutral-500 pb-2 text-neutral-800 text-base font-semibold leading-snug">How to use search engine optimization to drive sales how to use search engine sales.</div>
                                <div className="Title border-b border-neutral-500 text-neutral-800 text-base  py-2 font-semibold leading-snug">How to use search engine optimization to drive sales how to use search engine sales.</div>
                                <div className="Title text-neutral-800 text-base  py-2 font-semibold leading-snug">How to use search engine optimization to drive sales how to use search engine sales.</div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <footer className="page-container flex flex-col gap-10 pb-footer mb-10">
                <div className="flex w-full my-10 h-80 rounded-3xl bg-gradient-to-b from-design-light-green to-gray-100">
                    <h1 className="m-auto font-[Inter] font-semibold text-5xl text-gray-500">
                        Banner
                    </h1>
                </div>
                <LatestUpdates posts={latestPosts}></LatestUpdates>
            </footer>
        </article>
    )
}