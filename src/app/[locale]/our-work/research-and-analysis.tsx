import IndicatorIcon from "@/lib/assets/indicator.svg";
import ArrowCircleIcon from "@/lib/assets/arrow-circle.svg";
import Image from "next/image";
import FacebookIcon from "@/lib/assets/facebook.svg";
import XIcon from "@/lib/assets/x-twitter.svg";
import TikTokIcon from "@/lib/assets/tiktok.svg";
import YoutubeIcon from "@/lib/assets/yt.svg";
import WhatsappIcon from "@/lib/assets/whatsapp.svg";
import TelegramIcon from "@/lib/assets/telegram.svg";
import ConspiracyImg from "@/lib/assets/issues-and-narratives/conspiracy.png";
import DiversityImg from "@/lib/assets/issues-and-narratives/diversity.png";
import ElectionsImg from "@/lib/assets/issues-and-narratives/elections.png";
import IAImg from "@/lib/assets/issues-and-narratives/IA.png";
import MigrationImg from "@/lib/assets/issues-and-narratives/migration.png";
import PHealthImg from "@/lib/assets/issues-and-narratives/public-health.png";
import ShapeIcon from "@/lib/assets/shape-understanding.svg";
import DetermineIcon from "@/lib/assets/determine-the-extent.svg";
import { TPost } from "@/lib/utils/types";
import ServerImage from "@/lib/components/server-image";
import { parsePostDate, parseReadTime } from "@/lib/utils/helpers";
import I18nLink from "@/lib/components/I18nLink";

export default function ResearchAndAnalysis({
    research,
    t,
    translations,
}: {
    research: {
        publicOpinionResearch: TPost[];
    };
    t: any;
    translations: any;
}) {

    return (
        <section
            id="research-and-analysis"
            className="our-work-section page-container py-10 lg:py-20"
        >
            <div className="flex flex-col items-center">
                <IndicatorIcon className="fill-design-yellow w-4 h-4"></IndicatorIcon>
                <div className="Headline mt-10 text-center text-design-green text-4xl lg:text-6xl font-extrabold  leading-10">
                    {t('research-and-analysis')}
                </div>
                <div className="IntroductoryText mt-8 max-w-prose text-center text-design-green text-lg font-normal  leading-relaxed">
                    {/* {t('our-work-page.research.message')} */}
                    {translations?.research.message}
                </div>
                <div
                    id="public-opinion-research"
                    className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 my-10 lg:my-20 w-full"
                >
                    <div className="w-full lg:flex-1 h-[1px] bg-neutral-400 bg-opacity-50"></div>
                    <div className="IntroductoryText text-center text-design-green text-2xl lg:text-3xl font-extrabold  leading-7">
                        {t('public-opinion-research')}
                    </div>
                    <div className="w-full lg:flex-1 h-[1px] bg-neutral-400 bg-opacity-50"></div>
                </div>
                <div className="IntroductoryText max-w-prose text-center text-design-green text-lg font-normal  leading-relaxed">
                    {/* {t('our-work-page.research.message2')} */}
                    {translations?.research.message2}
                </div>
                <div className="IntroductoryText my-10 text-center text-design-green text-xl font-extrabold  uppercase leading-7">
                    {/* {t('our-work-page.research.message3')} */}
                    {translations?.research.message3}
                </div>
                <div className="Rectangle247 border-none lg:max-w-[80%] flex flex-col lg:flex-row lg:items-center justify-between p-10 gap-10 lg:h-36 bg-design-extralight-yellow rounded-2xl">
                    <ShapeIcon className="w-12 h-12 flex-shrink-0"></ShapeIcon>
                    <div className="IntroductoryText text-neutral-800 text-xl lg:text-2xl font-normal  leading-none">
                        {/* {t('our-work-page.research.message4')} */}
                        {translations?.research.message4}
                    </div>
                </div>
                <div className="Rectangle247 border-none mt-5 lg:max-w-[80%] flex flex-col lg:flex-row lg:items-center justify-between p-10 gap-10 lg:h-36 bg-design-extralight-yellow rounded-2xl">
                    <DetermineIcon className="w-12 h-12 flex-shrink-0"></DetermineIcon>
                    <div className="IntroductoryText text-neutral-800 text-xl lg:text-2xl font-normal  leading-none">
                        {/* {t('our-work-page.research.message5')} */}
                        {translations?.research.message5}
                    </div>
                </div>
                <div className="IntroductoryText mt-10 max-w-prose text-center text-neutral-800 text-lg font-normal  leading-relaxed">
                    {/* {t('our-work-page.research.message6')} */}
                    {translations?.research.message6}
                </div>

                <div className="grid lg:grid-cols-3 gap-10 mt-20">
                    {research.publicOpinionResearch.map((post) => (
                        <div key={post.slug} className="BlogSectionsPost overflow-hidden bg-white rounded-xl h-auto grid grid-rows-2">
                            {
                                post.feature_media && (
                                   <I18nLink href={post.platform_url ? post.platform_url : `/${post.slug}`}>
                                        <ServerImage {...post.feature_media} className="relative h-full w-full object-cover object-center"></ServerImage>
                                   </I18nLink>
                                )
                            }
                            <div className="Content p-6 bg-white flex-col justify-start items-start gap-6 inline-flex">
                                <div className="LeadingContent self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="TitleAndPreview self-stretch  flex-col justify-start items-start gap-3 flex">
                                        <I18nLink href={post.platform_url ? post.platform_url : `/${post.slug}`} className="Title self-stretch text-gray-900 text-xl font-semibold font-avenir leading-normal">
                                            {post.title}
                                        </I18nLink>
                                    </div>
                                </div>
                                {
                                    post.authors?.length > 0 && (
                                        <div className="BlogSectionsAvatarWithText  mt-auto justify-start items-center gap-3 inline-flex">
                                           {
                                                  post.authors[0].avatar && (
                                                    <ServerImage {...post.authors[0].avatar} className="Avatar w-10 h-10 bg-stone-100 rounded-full object-cover"></ServerImage>
                                                  )
                                           }
                                            <div className="Text flex-col justify-start items-start inline-flex">
                                                <div className="Title text-gray-900 text-sm font-medium leading-tight">
                                                    {post.authors[0].name}
                                                </div>
                                                <div className="SupportingText text-gray-500 text-sm font-normal leading-tight">
                                                    {parsePostDate(post.created_date)} · {parseReadTime(post.content)}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))}
                    
                </div>
                {/* <div className="flex items-center justify-center w-full">
                    <Link
                        href={`#`}
                        className="r-btn border-none text-white bg-design-green"
                    >
                        See all
                    </Link>
                </div> */}
                <div
                    id="social-listening-and-osint-investigations"
                    className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 my-20 w-full"
                >
                    <div className="w-full lg:flex-1 h-[1px] bg-neutral-400 bg-opacity-50"></div>
                    <div className="IntroductoryText text-center text-design-green text-2xl lg:text-3xl font-extrabold  leading-7">
                        {t('social-listening-osint-investigations')}
                    </div>
                    <div className="w-full lg:flex-1 h-[1px] bg-neutral-400 bg-opacity-50"></div>
                </div>
                <div className="IntroductoryText max-w-prose text-center text-neutral-800 text-lg font-normal leading-relaxed">
                    {/* {t('our-work-page.research.message7')} */}
                    {translations?.research.message7}
                </div>
                <div
                    id="issues-and-narratives"
                    className="IntroductoryText mt-20 text-center text-design-green text-xl font-extrabold  uppercase leading-7"
                >
                    {t('issues-and-narratives')}
                </div>
                <div className="grid lg:grid-cols-3 lg:grid-rows-2 mt-10 gap-5 lg:gap-10 w-full">
                    <I18nLink
                        href={`/our-work/issues-and-narratives?tag=elections-and-voting`}
                        className="group relative overflow-hidden bg-design-cyan rounded-xl lg:rounded-2xl flex items-center justify-between lg:aspect-[4/2] p-8"
                    >
                        <Image
                            src={ElectionsImg}
                            alt=""
                            className="absolute left-0 top-0 w-full h-full"
                        ></Image>
                        <div className="transition-all duration-300 overlay absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-50 bg-design-cyan"></div>
                        <div className="relative z-10 Headline text-white text-xl lg:text-3xl font-extrabold ">
                            {t('elections-and-voting')}
                        </div>
                        <ArrowCircleIcon className="relative z-10 stroke-design-light-green stroke-[1.5] mt-auto flex-shrink-0"></ArrowCircleIcon>
                    </I18nLink>
                    <I18nLink
                        href={`/our-work/issues-and-narratives?tag=identity-and-culture`}
                        className="group relative overflow-hidden bg-design-cyan rounded-xl lg:rounded-2xl flex items-center justify-between lg:aspect-[4/2] p-8"
                    >
                        <Image
                            src={DiversityImg}
                            alt=""
                            className="absolute left-0 top-0 w-full h-full"
                        ></Image>
                        <div className="transition-all duration-300 overlay absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-50 bg-design-cyan"></div>
                        <div className="relative z-10 Headline text-white text-xl lg:text-3xl font-extrabold ">
                            {t('identity-and-culture')}
                        </div>
                        <ArrowCircleIcon className="relative z-10 stroke-design-light-green stroke-[1.5] mt-auto flex-shrink-0"></ArrowCircleIcon>
                    </I18nLink>

                    <I18nLink
                        href={`/our-work/issues-and-narratives?tag=public-health`}
                        className="group relative overflow-hidden bg-design-cyan rounded-xl lg:rounded-2xl flex items-center justify-between lg:aspect-[4/2] p-8"
                    >
                        <Image
                            src={PHealthImg}
                            alt=""
                            className="absolute left-0 top-0 w-full h-full"
                        ></Image>
                        <div className="transition-all duration-300 overlay absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-50 bg-design-cyan"></div>
                        <div className="relative z-10 whitespace-nowrap lg:whitespace-normal Headline text-white text-xl lg:text-3xl font-extrabold ">
                            {t('public-health')}
                        </div>
                        <ArrowCircleIcon className="relative z-10 stroke-design-light-green stroke-[1.5] mt-auto flex-shrink-0"></ArrowCircleIcon>
                    </I18nLink>

                    <I18nLink
                        href={`/our-work/issues-and-narratives?tag=migration`}
                        className="group relative overflow-hidden bg-design-cyan rounded-xl lg:rounded-2xl flex items-center justify-between lg:aspect-[4/2] p-8"
                    >
                        <Image
                            src={MigrationImg}
                            alt=""
                            className="absolute left-0 top-0 w-full h-full"
                        ></Image>
                        <div className="transition-all duration-300 overlay absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-50 bg-design-cyan"></div>
                        <div className="relative z-10 Headline text-white text-xl lg:text-3xl font-extrabold">
                            {t('migration')}
                        </div>
                        <ArrowCircleIcon className="relative z-10 stroke-design-light-green stroke-[1.5] mt-auto flex-shrink-0"></ArrowCircleIcon>
                    </I18nLink>

                    <I18nLink
                        href={`/our-work/issues-and-narratives?tag=artificial-intelligence`}
                        className="group relative overflow-hidden bg-design-cyan rounded-xl lg:rounded-2xl flex items-center justify-between lg:aspect-[4/2] p-8"
                    >
                        <Image
                            src={IAImg}
                            alt=""
                            className="absolute left-0 top-0 w-full h-full"
                        ></Image>
                        <div className="transition-all duration-300 overlay absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-50 bg-design-cyan"></div>
                        <div className="relative z-10 Headline text-white text-xl lg:text-3xl font-extrabold">
                            {t('artificial-intelligence')}
                        </div>
                        <ArrowCircleIcon className="relative z-10 stroke-design-light-green stroke-[1.5] mt-auto flex-shrink-0"></ArrowCircleIcon>
                    </I18nLink>

                    <I18nLink
                        href={`/our-work/issues-and-narratives?tag=conspiracy-networks`}
                        className="group relative overflow-hidden bg-design-cyan rounded-xl lg:rounded-2xl flex items-center justify-between lg:aspect-[4/2] p-8"
                    >
                        <Image
                            src={ConspiracyImg}
                            alt=""
                            className="absolute left-0 top-0 w-full h-full"
                        ></Image>
                        <div className="transition-all duration-300 overlay absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-50 bg-design-cyan"></div>
                        <div className="relative z-10 Headline text-white text-xl lg:text-3xl font-extrabold">
                            {t('conspiracy-networks')}
                        </div>
                        <ArrowCircleIcon className="relative z-10 stroke-design-light-green stroke-[1.5] mt-auto flex-shrink-0"></ArrowCircleIcon>
                    </I18nLink>
                </div>

                <div
                    id="platforms-and-apps"
                    className="IntroductoryText text-center mt-20 text-design-green text-xl font-extrabold  uppercase leading-7"
                >
                    {t('platforms-and-apps')}
                </div>
                <div className="grid w-full lg:grid-cols-3 lg:grid-rows-2 mt-10 gap-5 lg:gap-10">
                    <I18nLink
                        href={
                            "/our-work/platforms-and-apps?tag=facebook-and-instagram"
                        }
                        className="Rectangle17 bg-design-cyan hover:bg-design-green transition-all duration-300 rounded-xl lg:rounded-2xl flex flex-col justify-between h-full p-8"
                    >
                        <div className="Ellipse59 w-11 h-11 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                            <FacebookIcon className=" fill-white"></FacebookIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="Headline mt-5 text-white text-xl lg:text-3xl font-extrabold ">
                                Facebook / Instagram
                            </div>
                            <ArrowCircleIcon className="stroke-design-light-green stroke-[1.5] ml-auto flex-shrink-0"></ArrowCircleIcon>
                        </div>
                    </I18nLink>
                    <I18nLink
                        href={
                            "/our-work/platforms-and-apps?tag=x-formerly-twitter"
                        }
                        className="bg-design-cyan hover:bg-design-green transition-all duration-300 rounded-xl lg:rounded-2xl flex flex-col justify-between h-full p-8"
                    >
                        <div className=" w-11 h-11 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                            <XIcon className="w-5 h-5 fill-white"></XIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="Headline mt-5 text-white text-xl lg:text-3xl font-extrabold ">
                                {t('x-twitter')}
                            </div>
                            <ArrowCircleIcon className="stroke-design-light-green stroke-[1.5] ml-auto flex-shrink-0"></ArrowCircleIcon>
                        </div>
                    </I18nLink>
                    <I18nLink
                        href={"/our-work/platforms-and-apps?tag=tiktok"}
                        className="bg-design-cyan hover:bg-design-green transition-all duration-300 rounded-xl lg:rounded-2xl flex flex-col justify-between h-full p-8"
                    >
                        <div className="Ellipse59 w-11 h-11 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                            <TikTokIcon className=" fill-white"></TikTokIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="Headline mt-5 text-white text-xl lg:text-3xl font-extrabold ">
                                {t('tiktok')}
                            </div>
                            <ArrowCircleIcon className="stroke-design-light-green stroke-[1.5] ml-auto flex-shrink-0"></ArrowCircleIcon>
                        </div>
                    </I18nLink>
                    <I18nLink
                        href={"/our-work/platforms-and-apps?tag=whatsapp"}
                        className="bg-design-cyan hover:bg-design-green transition-all duration-300 rounded-xl lg:rounded-2xl flex flex-col justify-between h-full p-8"
                    >
                        <div className="w-11 h-11 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                            <WhatsappIcon className=" fill-white"></WhatsappIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="Headline mt-5 text-white text-xl lg:text-3xl font-extrabold ">
                                {t('whatsapp')}
                            </div>
                            <ArrowCircleIcon className="stroke-design-light-green stroke-[1.5] ml-auto flex-shrink-0"></ArrowCircleIcon>
                        </div>
                    </I18nLink>
                    <I18nLink
                        href={"/our-work/platforms-and-apps?tag=youtube"}
                        className=" bg-design-cyan hover:bg-design-green transition-all duration-300 rounded-xl lg:rounded-2xl flex flex-col justify-between h-full p-8"
                    >
                        <div className="Ellipse59 w-11 h-11 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                            <YoutubeIcon className="fill-white"></YoutubeIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="Headline mt-5 text-white text-xl lg:text-3xl font-extrabold ">
                                {t('youtube')}
                            </div>
                            <ArrowCircleIcon className="stroke-design-light-green stroke-[1.5] ml-auto flex-shrink-0"></ArrowCircleIcon>
                        </div>
                    </I18nLink>
                    <I18nLink
                        href={"/our-work/platforms-and-apps?tag=telegram"}
                        className=" bg-design-cyan hover:bg-design-green transition-all duration-300 rounded-xl lg:rounded-2xl flex flex-col justify-between h-full p-8"
                    >
                        <div className="Ellipse59 w-11 h-11 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                            <TelegramIcon className="w-5 h-5 fill-white"></TelegramIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="Headline mt-5 text-white text-xl lg:text-3xl font-extrabold ">
                                {t('telegram')}
                            </div>
                            <ArrowCircleIcon className="stroke-design-light-green stroke-[1.5] ml-auto flex-shrink-0"></ArrowCircleIcon>
                        </div>
                    </I18nLink>
                </div>
            </div>
        </section>
    );
}
