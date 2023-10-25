import FacebookIcon from '@/lib/assets/facebook.svg';
import InstagramIcon from '@/lib/assets/instagram.svg';
import TelegramIcon from '@/lib/assets/telegram.svg';
import XIcon from '@/lib/assets/x-twitter.svg';
import WAIcon from '@/lib/assets/whatsapp.svg';

import ServerImage from "@/lib/components/server-image";
import { TPost } from "@/lib/utils/types";
import { parsePostContent, parsePostDate } from '@/lib/utils/helpers';
import LatestUpdates from '@/lib/components/latest-updates';
import { getApi } from '@/lib/utils/api';
import { notFound } from 'next/navigation';
import { Link } from '@lexz451/next-nprogress';
import CommentBox from '@/lib/components/comments/CommentBox';
import { fetchData } from './data';

export async function generateStaticParams() {
    const { data: posts } = await getApi<TPost[]>(`/posts`, {
        filters: {
            content: {
                $ne: null
            }
        }
    });
    return posts.map((post: TPost) => ({
        slug: post.slug
    }));
}

export default async function ArticlePage({
    params: { slug }
}: { params: { slug: string } }) {

    const { post, latestPosts, whatAreWeReading, inTheNews } = await fetchData(slug);

    if (!post) {
        return notFound();
    }

    const content = parsePostContent(post.content);

    const shareUrl = encodeURI(`${process.env.SITE_HOST}/${post.slug}`);

    return (
        <article className="pt-[104px]">
            <header className="flex flex-col">
                {post.feature_media && (<ServerImage {...post.feature_media} className="h-[40vh] lg:h-[60vh] w-full object-cover"></ServerImage>)}
                <div className="page-container">
                    <div className="flex items-center justify-center my-10">
                        <div className="Title text-center text-neutral-800 text-5xl font-semibold leading-10">
                            {post.title}
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_250px] border-y border-neutral-300">
                        <div className="py-4">
                            <div className="IntroductoryText leading-none">
                                <span className="text-neutral-800 text-xs font-semibold">
                                    {
                                        post.authors?.map(a => a.name).join(', ')
                                    }
                                </span>
                                <span className='mx-2'>-</span>
                                <span className="text-neutral-400 text-xs font-semibold">
                                    {
                                        parsePostDate(post.publish_date)
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center justify-center border-l border-neutral-300">
                            <div className="IntroductoryText w-12 text-neutral-800 text-xs font-semibold leading-3">Share</div>
                            <div className='flex items-center gap-2'>
                                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} className='w-8 h-8 rounded-full bg-design-dark flex items-center justify-center'>
                                    <FacebookIcon className="fill-white w-6 h-6"></FacebookIcon>
                                </Link>
                                <Link href={`https://twitter.com/share?url=${shareUrl}`} className='w-8 h-8 rounded-full bg-design-dark flex items-center justify-center'>
                                    <XIcon className="fill-white w-5 h-5"></XIcon>
                                </Link>
                                <Link href={`https://telegram.me/share/url?url=${shareUrl}`} className='w-8 h-8 rounded-full bg-design-dark flex items-center justify-center'>
                                    <TelegramIcon className="fill-white w-6 h-6"></TelegramIcon>
                                </Link>
                                <Link data-action="share/whatsapp/share" href={`https://web.whatsapp.com/send?text=${shareUrl}`} className='w-8 h-8 rounded-full bg-design-dark flex items-center justify-center'>
                                    <WAIcon className="fill-white w-6 h-6"></WAIcon>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="page-container">
                <div className="grid lg:grid-cols-[2fr_1fr] mt-10 gap-10">
                    <div>
                        <div className='post-content' dangerouslySetInnerHTML={{
                            __html: content
                        }}>
                        </div>
                        <CommentBox postId={post.id}></CommentBox>
                    </div>
                    <aside className='flex flex-col gap-10'>
                        <div className="Rectangle204 h-96 bg-gradient-to-b from-emerald-300 to-emerald-300 rounded-2xl flex flex-col items-center justify-center">
                            <div className="Headline text-center text-black text-opacity-60 text-3xl font-semibold font-['Inter'] leading-9">Newsletter subscription banner</div>
                        </div>
                        <div className='sticky top-24 flex flex-col'>
                            <div>
                                <div className="IntroductoryText border-b border-neutral-800 mb-5 pb-5 text-neutral-800 text-xl font-semibold leading-3">What We Are Reading</div>
                                {whatAreWeReading.map((post) => (
                                    <div key={post.slug}>
                                        <div className='overflow-hidden'>
                                            {post.feature_media && (<ServerImage {...post.feature_media} sizes="160px" className={`rounded-2xl aspect-[9/6] object-cover h-auto`}></ServerImage>)}
                                        </div>
                                        <Link href={`/${post.slug}`} className="Title block my-2 text-neutral-800 text-lg font-semibold leading-snug">
                                            {post.title}
                                        </Link>
                                        <div className="IntroductoryText">
                                            <span className="text-neutral-800 text-xs font-semibold leading-3">
                                                {post.authors?.map(a => a.name).join(', ')}
                                            </span>
                                            <span className='mx-2'>-</span>
                                            <span className="text-neutral-400 text-xs font-semibold leading-3">
                                                {parsePostDate(post.publish_date)}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='mt-8'>
                                <div className="IntroductoryText border-b border-neutral-800 pb-5 text-neutral-800 text-xl font-semibold leading-3">DIA in the news</div>
                                <div className='flex flex-col'>
                                    {inTheNews.map((post) => (
                                        <Link href={`/${post.slug}`} key={post.slug} className="Title border-b border-neutral-500 py-2 text-neutral-800 text-base font-semibold leading-snug">
                                            {post.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <footer className="page-container flex flex-col gap-10 mb-10">
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